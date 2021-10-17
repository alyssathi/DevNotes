CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid NOT NULL DEFAULT uuid_generate_v4 (),
    name text NOT NULL,
    username text NOT NULL,
    password_hash text NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
    token text PRIMARY KEY,
    data bytea NOT NULL,
    expiry timestamptz NOT NULL
);

CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON sessions (expiry);

CREATE TABLE IF NOT EXISTS articles (
    id uuid NOT NULL DEFAULT uuid_generate_v4 (),
    title text NOT NULL,
    date_created text NOT NULL,
    description text NOT NULL,
    body text NOT NULL,
    category text NOT NULL,
    is_published boolean NOT NULL
);

