package seed

import (
	"context"
	"devNotes/db"
	"fmt"
	"time"

	"syreclabs.com/go/faker"
)

type Seed struct {
	*db.DB
}

func New(database *db.DB) (*Seed, error) {
	return &Seed{database}, nil

}

func Run(s *Seed) error {
	for i := 0; i < 10; i++ {
		err := s.InsertFakeArticle()
		if err != nil {
			fmt.Println(err)
			return err
		}
	}
	return nil
}

func (s *Seed) InsertFakeArticle() error {
	category := faker.Number().Between(1, 5)
	title := faker.Commerce().ProductName()
	date := time.Now().Format("January 2, 2006")
	body := faker.Lorem().Paragraphs(3)[1]
	description := faker.Lorem().Paragraph(4)

	query := `INSERT INTO articles (title, date_created, body, category, is_published, description) VALUES ($1, $2, $3, $4, $5, $6);`

	_, err := s.DB.Conn.Exec(context.Background(), query, title, date, body, category, true, description)
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}
