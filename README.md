# BooksPostgresSQL

[Link to our application](https://.herokuapp.com/)

### What ?

This week's project involved setting up a database which clients are connected to via a node.js server. We used client data to make a dynamic web app.

A books sharing application where people can add their own books to the database so everyone who is interested in borrowing it
can reserve it for certain dates, with the freedom of unreseving it at anytime.
### Routes

* Homepage:- 

### How to use locally?

1. git clone this repo.
2. git install, if something was missing, please install manually to your machine, nyc, tape, tape-spec, supertest, nodemon.
3. for nyc tests, nyc npm test.
4. to deploy the server, we made an easy script for you, just type in your terminal 'npm run connect', and it will be deployed with nodemon, if you with to deploy without nodemon, just type in 'run start'.
5. Have fun!

### Main goals

- [ ] Simple web app with a node server and a database
- [ ] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- [ ] Database hosted on Heroku, or locally
- [ ] Build script for your database
- [ ] Security concerns appropriately considered (you must protect against script injections!)
- [ ] Content dynamic, but DOM manipulation kept to a minimum
- [ ] Mobile-first design
- [ ] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)
- [ ] test your server routes with supertest
- [ ] test your pure functions both server and client side
- [ ] set up a test database so that yo

### Stretch goals

- [ ] Rating books
- [ ] Books can simultaneously be reserved by multiple users but for different dates

### Design artheticture
![Design artheticture 01](https://raw.githubusercontent.com/facn5/BooksPostgreSQL/Assets/public/assets/design_artheticture00.png)

### Tools/technologies used
* Heroku - For deploying/hosting server and database.
* Tape - for testing.
* PostGreSQL - for database
* nyc - for testing.
* nock - for testing APIs.
* Supertest for testing.
* nodemon - for hosting locally.
* Node.js - backend.

### Team members
* Karam: [Github](https://github.com/karam1ashqar)
* Faris: [Github](https://github.com/faris114)
* Obaydah: [Github](https://github.com/obayda)

