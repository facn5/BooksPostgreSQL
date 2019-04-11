const dbConnection = require('../database/db_connection');

const getData = (cb) => {
  dbConnection.query('SELECT * FROM books;',(err, result) => {
    if(err) cb(err);
    cb(null, result.rows);
  });
}

const getNames = (cb) => {
  dbConnection.query('SELECT name FROM users;',(err, result) => {
    if(err) cb(err);
    cb(null, result.rows);
  });
}

const getBookid = (id, cb) => {
  dbConnection.query('SELECT * FROM books where id = '+id+';',(err, result) => {
    if(err) cb(err);
    cb(null, result.rows);
  });
}

const getUserReservation = (value, cb) => {
  dbConnection.query(`SELECT U.name, B.name from users U, books B join res_books R on R.user_id is not null where R.book_id = B.id and U.id = ${value} and U.id = R.user_id group by U.name, B.name;`,(err, result) => {
    if(err) cb(err);
    cb(null, result.rows);
  });
}

module.exports = {
  getData,
  getBookid,
  getNames
}
