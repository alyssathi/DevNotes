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
		SELECT id, name, username, password_hash FROM users WHERE username = $1`
	dbUser := &devNotes.User{}
	err := db.Conn.QueryRow(context.Background(), query, username).Scan(&dbUser.Id, &dbUser.Name, &dbUser.Username, &dbUser.Password)
	if err != nil {
		return nil, err
	}
	return dbUser, nil
}

func (db *DB) GetArticles(isPublic bool) (interface{}, error) {
	//getting articles based on if it is published or not
	var arr interface{}
	if isPublic {
		query := `
		SELECT array_to_json(array_agg(row_to_json(articles))) FROM articles WHERE is_published = true;`

		err := db.Conn.QueryRow(context.Background(), query).Scan(&arr)
		if err != nil {
			return nil, err
		}
	} else if !isPublic {
		query := `
		SELECT array_to_json(array_agg(row_to_json(articles))) FROM articles;`

		err := db.Conn.QueryRow(context.Background(), query).Scan(&arr)
		if err != nil {
			return nil, err
		}
	}
	return arr, nil
}

func (db *DB) GetArticleByID(id string) (*devNotes.Article, error) {
	query := `
		SELECT title, date_created, body, category, is_published FROM articles WHERE id = $1`
	dbArticle := &devNotes.Article{}
	err := db.Conn.QueryRow(context.Background(), query, id).Scan(&dbArticle.Title, &dbArticle.Date_created, &dbArticle.Body, &dbArticle.Category, &dbArticle.Is_published)
	if err != nil {
		return nil, err
	}
	return dbArticle, nil
}

func (db *DB) SaveArticleToDB(title, body, category, date_created, description string, is_published bool) error {
	query := `
		INSERT INTO articles (title, body, category, date_created, is_published, description) VALUES ($1, $2, $3, $4, $5, $6)`
	_, err := db.Conn.Exec(context.Background(), query, title, body, category, date_created, is_published, description)
	if err != nil {
		return err
	}
	return nil
}

func (db *DB) GetCategories() ([]string, error) {
	var arr []string
	query := `
		SELECT ARRAY(SELECT * FROM categories);`
	err := db.Conn.QueryRow(context.Background(), query).Scan(&arr)
	if err != nil {
		return nil, err
	}

	return arr, nil
}

func (db *DB) DeleteArticle(id string) error {
	query := `
		DELETE FROM articles WHERE id = $1;`
	_, err := db.Conn.Exec(context.Background(), query, id)
	if err != nil {
		return err
	}

	return nil
}

func (db *DB) AddCategory(category string) error {
	query := `
		INSERT INTO categories (category) VALUES ($1)`
	_, err := db.Conn.Exec(context.Background(), query, category)
	if err != nil {
		return err
	}
	return nil
}
