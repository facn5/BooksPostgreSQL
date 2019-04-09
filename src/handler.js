const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData');

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
    if(err) console.log('error');
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


module.exports = {
  home: handleHome,
  public: handlePublic,
  data: handleData,
  error: handleError
}
