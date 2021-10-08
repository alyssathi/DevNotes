package main

//CLI command to start the server: **Make sure you are in study-nook/server/cmd first. Then run `go run main.go s` this will only print out emails for use in development. If you need to actually send an email, run `go run main.go s -b true`
import (
	"devNotes/api"
	"devNotes/db"
	"devNotes/seed"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/urfave/cli/v2"
)

//this main function is using a cli to start the server with flags for the configs so they can be easily changed if needed. It is initializing all of the package structs that we will be using so they can be used across the application
func main() {
	app := &cli.App{
		Name:    "DevNotes CLI",
		Version: "v0.0.1",
		Usage:   "Developer's tool for the DevNotes App",
		Commands: []*cli.Command{
			{
				Name:    "serve",
				Usage:   "run the server on certain port",
				Aliases: []string{"s"},
				Flags: []cli.Flag{
					//Running the database and connection
					&cli.StringFlag{
						Name:    "address",
						Aliases: []string{"a"},
						Value:   ":8080",
						Usage:   "Set the address to use for the server"},
					&cli.StringFlag{
						Name:    "user",
						Aliases: []string{"u"},
						Value:   "dev",
						Usage:   "Set the database username in the database connection string"},
					&cli.StringFlag{
						Name:    "password",
						Aliases: []string{"p"},
						Value:   "dev",
						Usage:   "Set the database password in the database connection string"},
					&cli.StringFlag{
						Name:    "connection",
						Aliases: []string{"c"},
						Value:   "5432",
						Usage:   "Set the database port in the database connection string"},
					&cli.StringFlag{
						Name:    "name",
						Aliases: []string{"n"},
						Value:   "devnotes",
						Usage:   "Set the database name in the database connection string"},
					&cli.BoolFlag{
						Name:    "seed",
						Aliases: []string{"d"},
						Value:   false,
						Usage:   "Sets if you want to seed the database"},
				},
				Action: func(c *cli.Context) error {
					address := c.String("address")
					user := c.String("user")
					password := c.String("password")
					connection := c.String("connection")
					name := c.String("name")
					seedBool := c.Bool("seed")

					//initializing the database connection
					conn, err := db.Connect(user, password, connection, name)
					if err != nil {
						fmt.Println(err)
						return err
					}
					//initializing the db struct holding the connection allowing it to be available to other packages ex. API below
					database, err := db.New(conn)
					if err != nil {
						fmt.Println(err)
						return err
					}

					if seedBool {
						seeder, err := seed.New(database)
						if err != nil {
							fmt.Println(err)
							return err
						}
						err = seed.Run(seeder)
						if err != nil {
							fmt.Println(err)
							return err
						}
					}

					//passing in the database and emailer to the controller so they are available to the API package
					controller, err := api.New(database)
					if err != nil {
						fmt.Println(err)
						return err
					}
					//starting the server
					log.Fatal(http.ListenAndServe(address, controller.Sessions.LoadAndSave(controller.Router)))
					if err != nil {
						fmt.Println(err)
						return err
					}
					return nil
				},
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}
