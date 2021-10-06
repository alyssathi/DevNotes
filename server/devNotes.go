package devNotes

import "time"

type User struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type Article struct {
	Id           string    `json:"id"`
	Title        string    `json:"title"`
	Date_created time.Time `json:"dateCreated"`
	Body         string    `json:"body"`
	Category     string    `json:"category"`
	Is_published bool      `json:"isPublished"`
}
