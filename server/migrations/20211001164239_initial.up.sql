CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS users(
    id UUID NOT NULL DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    username TEXT NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS articles(
    id UUID NOT NULL DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    date_edited TIMESTAMP,
    body TEXT NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO users (name, username, password_hash) VALUES ('dev', 'dev', 'dev');
