# BooksPostgresSQL

[Link to our application](https://bookspostgresql.herokuapp.com/)

### What ?

This week's project involved setting up a database which clients are connected to via a node.js server. We used client data to make a dynamic web app.

A books sharing application where people can add their own books to the database so everyone who is interested in borrowing it
can reserve it for certain dates, with the freedom of unreseving it at anytime.

### Routes

* Homepage:- For loginning for the first time into our application, you will be asked to provide us your name, to create
for you a username that has your name - ( this is a simple authentication to distinguish our users )

You can Add a book, Delete a book, Review a book and make a reservation for it.

### How to use locally?

1. git clone this repo.
2. npm install, if something was missing, please install manually to your machine, nyc, pg, tape, tape-spec, supertest, nodemon.
3. test scripts are : "npm run testbackend | npm run testdb"
4. to deploy the server, we made an easy script for you, just type in your terminal 'npm run connect', and it will be deployed with nodemon, if you with to deploy without nodemon, just type in 'run start'.
5. Have fun!

### Main goals

- [x] Simple web app with a node server and a database
- [ ] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- [x] Database hosted on Heroku, or locally
- [x] Build script for your database
- [x] Security concerns appropriately considered (you must protect against script injections!)
- [x] Content dynamic, but DOM manipulation kept to a minimum
- [x] Mobile-first design
- [x] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)
- [x] test your server routes with supertest
- [x] test your pure functions both server and client side
- [x] set up a test database so that you can test your database queries
- [x] simple authentication

### Stretch goals

- [ ] Rating books
- [x Books can simultaneously be reserved by multiple users

### Design artheticture

![Design artheticture 01](https://raw.githubusercontent.com/facn5/BooksPostgreSQL/master/public/assets/design_artheticture00.png)

### Tools/technologies used

* Heroku - For deploying/hosting server and database.
* Tape - for testing.
* PostgreSQL - for database
* pg for testing
* Supertest for testing.
* nodemon - for hosting locally.
* cookies web api - for a simple authentication
* Node.js - backend.

### Team members

* Karam: [Github Profile Page](https://github.com/karam1ashqar)
* Faris: [Github Profile Page](https://github.com/faris114)
* Obaydah: [Github Profile Page](https://github.com/obayda)

All rights reserved 2019, for the whole application and the readme file.
Please don't embarrass yourself
