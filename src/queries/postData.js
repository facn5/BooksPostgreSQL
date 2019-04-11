const dbConnection = require('../database/db_connection.js');
const getData = require('./getData');

const postData = (name, author, year, shortDesc, response, cb) => {
  dbConnection.query(
    'INSERT INTO books (name, author, year, shortDesc) VALUES ($1, $2, $3, $4)',
    [name, author, year, shortDesc],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res, response);
    }
  );
};

const createAccount = (name, resp, cb) => {

  let no = false;
  name = decodeURI(name);

  getData.getNames((err, result) => {

    for (var i = 0; i < result.length; i++) {
      if (name == result[i].name)
        no = true;

    }
    if (!no) {
      dbConnection.query(
        'INSERT INTO users (name) VALUES ($1)',
        [name],
        (err, res) => {
          if (err) return cb(err);

          cb(null, name, resp);
        });
    }
  });
};

const reserveBook = (bookid, userid, resp, cb) => {

  let data;
  getData.getBookid(bookid, (err, result) => {
    data = result;
    dbConnection.query(
      'UPDATE books SET reserved=$2 where id = $1', [data[0].id, data[0].reserved == 0 ? 1 : 0],
      (err, res) => {
        if (err) return cb(err);

        cb(null, resp);
      }
    );
  });
}

module.exports = {
  post: postData,
  reserve: reserveBook,
  create: createAccount
}
