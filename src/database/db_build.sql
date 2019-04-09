BEGIN;

DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    year INTEGER
);

INSERT INTO books (name, author, year) VALUES 
    ('Linux is a nutshell','AbuSalma',2009),
    ('Linux is a not nutshell','Abu-Salma',2011),
    ('Linux is a nothing','AbuSalma1',1999),
    ('Windows is a nutshell','Abu',1965);

COMMIT;