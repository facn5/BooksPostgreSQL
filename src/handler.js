const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData');
const postData = require('./queries/postData');
const qs = require('querystring');

let extType = {
  html: { "content-type": "text/html" },
  css: { "content-type": "text/css" },
  js: { "content-type": "application/javascript" },
  json: {'content-type': 'application/json'}
}

const handleHome = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "layouts", "index.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("error500");
    } else {
      res.writeHead(200, extType.html);
      res.end(file);
    }
  })
}

const handlePublic = (url, res) => {
  const ext = url.split('.')[1];
  let pathFile = path.join(__dirname, '..', url);
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("error500");
    } else {
      res.writeHead(200, extType[ext]);
      res.end(file);
    }
  })
}

const handleData = (res) => {
  getData((err,result) => {
    if(err) {
      res.writeHead(500);
      res.end("server error 500");
    }
    let dynamicData = JSON.stringify(result);
    res.writeHead(200,extType.json);
    res.end(dynamicData);
  });
}

const handleError = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "layouts", "404.html");
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("error500");
    } else {
      res.writeHead(404, extType.html);
      res.end(file);
    }
  })
}

const handlePost = (req, res) => {

      let body = '';
      req.on('data', chunk => {
          body += chunk.toString(); // convert Buffer to string
      });
      req.on('end', () => {
          if( body != null )
          {
            const hey = qs.parse(body);
            postData.postData(hey.book, hey.author, hey.year, hey.shortDesc, res, returnPostData, (err) => {
              if( err )   console.log('error');


            });
          }
      });

  }

const returnPostData = ( err, data, res ) => {
  if (err) return console.log('error');

  res.writeHead(302, { 'Location': '/' });
  res.end()
}

const handleCreate = ( res, value ) => {
  postData.createAccount(value, res, returnPostData, (err) => {
    if( err )  console.log('error');


  });
}

module.exports = {
  home: handleHome,
  public: handlePublic,
  data: handleData,
  error: handleError,
  create: handleCreate,
  post: handlePost
}
