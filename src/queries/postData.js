const dbConnection = require('../database/db_connection.js');

const postData = (name, author, year, shortDesc, resp, cb) => {
  dbConnection.query(
    'INSERT INTO books (name, author, year, shortDesc) VALUES ($1, $2, $3, $4)',
    [name, author, year, shortDesc],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res, resp);
    }
  );
};

module.exports = postData;
