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
	Date_created string `json:"date_created"`
	Body         string `json:"body"`
	Description  string `json:"description"`
	Category     string `json:"category"`
	Is_published bool   `json:"is_published"`
}

type Category struct {
	Category string `json:"category"`
}
type ArticlesArray []Article
