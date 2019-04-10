BEGIN;

DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    year INTEGER,
    shortDesc VARCHAR(1000) NOT NULL
);

INSERT INTO books (name, author, year, shortDesc) VALUES
    ('Linux is a nutshell','AbuSalma',2009, 'a book describing the whole abu salma story'),
    ('Linux is a not nutshell','Abu-Salma',2011, 'a book describing the whole abu salma story'),
    ('Linux is a nothing','AbuSalma1',1999, 'a book describing the whole abu salma story'),
    ('Windows is a nutshell','Abu',1965, 'a book describing the whole abu salma story');

COMMIT;
