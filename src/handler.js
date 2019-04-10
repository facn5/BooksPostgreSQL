const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const getData = require('./queries/getData');
const postData = require('./queries/postData');
const deleteData = require('./queries/deleteData');

let extType = {
  html: { "content-type": "text/html" },
  css: { "content-type": "text/css" },
  js: { "content-type": "application/javascript" },
  json: { 'content-type': 'application/json' }
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
  getData((err, result) => {
    if (err) {
      res.writeHead(500);
      res.end("server error 500");
    }
    let dynamicData = JSON.stringify(result);
    res.writeHead(200, extType.json);
    res.end(dynamicData);
  });
}

const handlePost = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    if (body != null) {
      const ps = qs.parse(body);
      postData.post(ps.book, ps.author, ps.year, ps.shortDesc, res, (err, result) => {
        if (err) return console.log('error');
        res.writeHead(302, { 'Location': '/' });
        res.end()
      });
    }
  });
}

const handleCreate = (res, value) => {
  postData.create(value, res, (err, result) => {
    if (err) return console.log('error');
    res.writeHead(302, { 'Location': '/' });
    res.end()
  });
}

const handleDelete = (url, res) => {
  url = decodeURI(url);
  var queryString = url.split("=")[1];
  deleteData(queryString, (err, result) => {
    if (err) return console.log('error deleting');
    res.writeHead(302, { 'Location': '/' });
    res.end()
  })
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

module.exports = {
  home: handleHome,
  public: handlePublic,
  data: handleData,
  error: handleError,
  delete: handleDelete,
  create: handleCreate,
  post: handlePost
}
