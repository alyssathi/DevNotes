package devNotes

type User struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type Article struct {
	Id           string `json:"id"`
	Title        string `json:"title"`
	Date_created string `json:"dateCreated"`
	Date_edited  string `json:"dateEdited"`
	Body         string `json:"body"`
	Category     string `json:"category"`
	Is_published bool   `json:"isPublished"`
}
