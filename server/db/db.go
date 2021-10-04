package db

import (
	"context"
	"devNotes"
	"fmt"

	"github.com/jackc/pgx/v4/pgxpool"
)

type DB struct {
	Conn *pgxpool.Pool
}

//initializing my database connection
func Connect(user, password, connection, name string) (*pgxpool.Pool, error) {
	connectionString := "postgres://" + user + ":" + password + "@localhost:" + connection + "/" + name + "?sslmode=disable"

	fmt.Println(connectionString)
	conn, err := pgxpool.Connect(context.Background(), connectionString)
	if err != nil {
		return nil, err
	}
	return conn, nil
}

//making the connection available to other packages
func New(conn *pgxpool.Pool) (*DB, error) {
	return &DB{conn}, nil
}

func (db *DB) GetUserByUsername(username string) (*devNotes.User, error) {
	query := `
		SELECT id, name, username, password FROM users WHERE username = $1`
	dbUser := &devNotes.User{}
	err := db.Conn.QueryRow(context.Background(), query, username).Scan(&dbUser.Id, &dbUser.Name, &dbUser.Username, &dbUser.Password)
	if err != nil {
		return nil, err
	}
	return dbUser, nil
}

func (db *DB) GetArticles(isPublished bool) (*devNotes.Article, error) {
	//getting articles based on if it is published or not
	return nil, nil
}

func (db *DB) GetArticleByID(id string) (*devNotes.Article, error) {
	//getting article based on id
	return nil, nil
}

func (db *DB) SaveArticleDraft() {
	//setting isPublished to False
}

func (db *DB) PublishArticle() {
	//setting isPublished to True
}
