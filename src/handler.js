const fs = require('fs');
const path = require('path');

let extType = {
  html: { "content-type": "text/html"},
  css: { "content-type": "text/css"},
  js: { "content-type": "application/javascript"}
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

const handleError = (res) => {
  let pathFile = path.join(__dirname, "..", "public", "layouts", "404.html");
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


module.exports = {
  home: handleHome,
  public: handlePublic,
  error: handleError
}
