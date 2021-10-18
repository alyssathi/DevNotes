package api

import (
	"devNotes"
	"encoding/json"
	"errors"
	"net/http"
	"time"

	"github.com/alexedwards/scs/pgxstore"
	"github.com/alexedwards/scs/v2"
	"github.com/go-chi/chi/v5"

	"devNotes/db"
)

type Controller struct {
	DB       *db.DB
	Sessions *scs.SessionManager
	Router   chi.Router
}

//initializes our Controller, this is called in the server/cmd main.go file and makes the db, sessions, router and emailer available to all Controller methods in the API package
func New(db *db.DB) (*Controller, error) {
	sessionManager := scs.New()
	sessionManager.Store = pgxstore.New(db.Conn)
	sessionManager.Lifetime = 1000000 * time.Hour
	sessionManager.Cookie.Persist = true
	sessionManager.Cookie.HttpOnly = false

	r := chi.NewRouter()

	c := &Controller{db, sessionManager, r}

	//this middleware chaining took me way too long. WithError takes in a special type of handlerfunc that allows me to return an error for each of my handlers and it returns a regular handler function. This is how I'm able to chain WithError to WithUser that takes in sessions and a handler func. WithError accounts for the handlerfunc and I can just pass in my session manager
	r.HandleFunc("/api/login_user", WithError(c.LoginUser))
	r.HandleFunc("/api/logout-user", WithError(c.LogoutUser))
	r.HandleFunc("/api/save-article", WithUser(sessionManager, WithError(c.SaveArticle)))
	r.HandleFunc("/api/delete-article/{id}", WithUser(sessionManager, WithError(c.DeleteArticle)))
	r.HandleFunc("/api/get-articles", WithError(c.GetPublicArticles))
	r.HandleFunc("/api/get-all-articles", WithError(c.GetAllArticles))
	r.HandleFunc("/api/get-categories", WithError(c.GetCategories))
	r.HandleFunc("/api/get-article/{id}", WithError(c.GetArticle))
	r.HandleFunc("/api/add-category", WithUser(sessionManager, WithError(c.AddCategory)))
	r.HandleFunc("/api/update-article/{id}", WithUser(sessionManager, WithError(c.UpdateArticle)))

	return c, nil
}

func (c *Controller) LoginUser(w http.ResponseWriter, r *http.Request) error {
	u := &devNotes.User{}
	err := json.NewDecoder(r.Body).Decode(u)
	if err != nil {
		return err
	}

	dbUser, err := c.DB.GetUserByUsername(u.Username)
	if err != nil {
		return err
	}
	//this will have to be changed to hashed for production
	if u.Password != dbUser.Password {
		err = errors.New("passwords do not match")
		return err
	}

	c.Sessions.Put(r.Context(), "id", dbUser.Id)
	c.Sessions.Put(r.Context(), "name", dbUser.Name)
	c.Sessions.Put(r.Context(), "username", dbUser.Username)

	json.NewEncoder(w).Encode(http.StatusOK)
	return nil
}

func (c *Controller) LogoutUser(w http.ResponseWriter, r *http.Request) error {
	err := c.Sessions.Destroy(r.Context())
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(http.StatusOK)
	return nil
}

func (c *Controller) SaveArticle(w http.ResponseWriter, r *http.Request) error {
	//saving to articles db
	a := &devNotes.Article{}

	err := json.NewDecoder(r.Body).Decode(a)
	if err != nil {
		return err
	}
	a.Date_created = time.Now().Format("January 2, 2006")

	err = c.DB.SaveArticleToDB(a.Title, a.Body, a.Category, a.Date_created, a.Description, a.Is_published)
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(http.StatusOK)
	return nil
}

func (c *Controller) DeleteArticle(w http.ResponseWriter, r *http.Request) error {
	id := chi.URLParam(r, "id")

	err := c.DB.DeleteArticle(id)
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(http.StatusOK)
	return nil
}

func (c *Controller) GetPublicArticles(w http.ResponseWriter, r *http.Request) error {
	arr, err := c.DB.GetArticles(true)
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(arr)
	return nil
}

func (c *Controller) GetAllArticles(w http.ResponseWriter, r *http.Request) error {
	arr, err := c.DB.GetArticles(false)
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(arr)
	return nil
}

func (c *Controller) GetCategories(w http.ResponseWriter, r *http.Request) error {
	arr, err := c.DB.GetCategories()
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(arr)
	return nil
}

func (c *Controller) GetArticle(w http.ResponseWriter, r *http.Request) error {
	id := chi.URLParam(r, "id")
	article, err := c.DB.GetArticleByID(id)
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode(article)
	return nil
}

func (c *Controller) AddCategory(w http.ResponseWriter, r *http.Request) error {
	category := &devNotes.Category{}
	err := json.NewDecoder(r.Body).Decode(&category)
	if err != nil {
		return err
	}
	err = c.DB.AddCategory(category.Category)
	if err != nil {
		return err
	}
	json.NewEncoder(w).Encode("ok")
	return nil
}

func (c *Controller) UpdateArticle(w http.ResponseWriter, r *http.Request) error {
	a := &devNotes.Article{}
	id := chi.URLParam(r, "id")

	err := json.NewDecoder(r.Body).Decode(a)
	if err != nil {
		return err
	}
	a.Date_created = time.Now().Format("January 2, 2006")

	err = c.DB.UpdateArticle(id, a.Title, a.Body, a.Category, a.Date_created, a.Description, a.Is_published)
	if err != nil {
		return err
	}

	json.NewEncoder(w).Encode(http.StatusOK)
	return nil
}
