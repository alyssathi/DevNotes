package api

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/alexedwards/scs/v2"
)

type ErrorHandler func(w http.ResponseWriter, r *http.Request) error

func WithUser(sessions *scs.SessionManager, next http.HandlerFunc) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		//getting id from the Session
		id := sessions.GetString(r.Context(), "id")
		if id == "" {
			http.Error(w, "You are not logged in", http.StatusForbidden)
			return
		}
		next(w, r)
	}
	return fn
}

//next is the handler that will sit inside of the middleware
//it will return the User handler which sits outside the middleware
//UserHandler(WithError(next))
func WithError(next ErrorHandler) http.HandlerFunc {
	fn := func(w http.ResponseWriter, r *http.Request) {
		err := next(w, r)
		if err != nil {
			fmt.Println(err)
			json.NewEncoder(w).Encode(http.StatusBadRequest)
			return
		}
	}
	return fn
}
