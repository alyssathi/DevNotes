.PHONY: up
up:
	./bin/migrate -database 'postgres://dev:dev@localhost:5432/devnotes?sslmode=disable' -path ./server/migrations up

.PHONY: drop
drop:
	./bin/migrate -database 'postgres://dev:dev@localhost:5432/devnotes?sslmode=disable' -path ./server/migrations drop -f

.PHONY: dirtyV1
dirtyV1:
	./bin/migrate -path ./server/migrations -database 'postgres://dev:dev@localhost:5432/devnotes?sslmode=disable' force 20211001164239

.PHONY: seed
seed:
	cd server/cmd && go run main.go s -d true	

.PHONY: serve
serve:
	cd server/cmd && go run main.go s
