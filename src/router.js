const url = require('url');
const handler = require('./handler');
const router = (req, res) => {

  let url = req.url;
  if (url === "/") {
    handler.home(res);
  } else if (url.indexOf('public') !== -1) {
    handler.public(url, res);
  } else if (url === '/getbooks') {
    req.method === "POST"
    handler.data(res);
  } else if (url === "/postdata") {
    // req.method === "POST"
    handler.post(res);
  } else {
    handler.error(res);
  }
}

module.exports = router;
