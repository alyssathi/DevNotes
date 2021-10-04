package api

import (
	"devNotes"
	"encoding/json"
	"net/http"
	"time"

	"github.com/alexedwards/scs/pgxstore"
	"github.com/alexedwards/scs/v2"
	"github.com/go-chi/chi/v5"
	"golang.org/x/crypto/bcrypt"

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

	r.HandleFunc("/api/login_user", c.LoginUser)

	return c, nil
}

func (c *Controller) LoginUser(w http.ResponseWriter, r *http.Request) {
	u := &devNotes.User{}
	err := json.NewDecoder(r.Body).Decode(u)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	dbUser, err := c.DB.GetUserByUsername(u.Username)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(u.Password))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	c.Sessions.Put(r.Context(), "id", dbUser.Id)
	c.Sessions.Put(r.Context(), "name", dbUser.Name)
	c.Sessions.Put(r.Context(), "username", dbUser.Username)

	json.NewEncoder(w).Encode(http.StatusOK)
}

func (c *Controller) PublishArticle(w http.ResponseWriter, r *http.Request) {
	//saving to articles db and setting true to is_published
}

func (c *Controller) SaveDraft(w http.ResponseWriter, r *http.Request) {
	//saving to articles db and setting false to is_published
}

func (c *Controller) GetArticles(w http.ResponseWriter, r *http.Request) {
	//this will be used in the admin panel and the displaying to public- need a key to check where it is coming from. Admin will display both drafts and published articles and the public will only see the published.
}
