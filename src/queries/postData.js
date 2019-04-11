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

  getData.getNames( (err,result)=> {

       for( var i = 0; i < result.length; i++ ) {
         if( name == result[i].name )
           no = true;

}
         if( !no ) {
           dbConnection.query(
             'INSERT INTO users (name) VALUES ($1)',
             [name],
             (err, res) => {
               if (err) return cb(err);

               cb(null, name, resp);
             }

           );
         }


  });


};

const reserveBook = (bookid, userid , resp, cb) => {

let hey;
getData.getBookid( bookid, (err,result)=> {
  hey = result;
  dbConnection.query(
    'UPDATE books SET reserved=$2 where id = $1', [hey[0].id, hey[0].reserved == 0 ? 1 : 0],
    (err, res) => {
      if (err) return cb(err);

      cb(null, resp);
    }
  );

  // dbConnection.query(
  //   'INSERT INTO res_books (user_id, book_id) VALUES ($1, $2)',
  //   [user_id, book_id],
  //   (err, res) => {
  //     if (err) return cb(err);
  //
  //     cb(null, bookid, userid, resp);
  //   }
  // );

} )




}

module.exports = {
  post: postData,
  reserve: reserveBook,
  create: createAccount
}
