const dbConnection = require('../database/db_connection.js');

const postData = (name, author, year, cb) => {
  dbConnection.query(
    'INSERT INTO users (name, author, year) VALUES ($1, $2, $3)',
    [name, author, year],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
