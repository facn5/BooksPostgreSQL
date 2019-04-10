const url = require('url');
const handler = require('./handler');
const router = (req, res) => {

  let url = req.url;
  if (url === "/") {
    handler.home(res);
  } else if (url.indexOf('public') !== -1) {
    handler.public(url, res);
  } else if (url === '/getbooks') {
    if (req.method === "GET")
      handler.data(res);
  } else if (url === "/postdata") {
    if (req.method === "POST")
      handler.post(req, res);
    else
      handler.error(res);
  } else if (url.indexOf('deleted') !== -1) {
    handler.delete(url, res);
  } else {
        handler.error(res);
  } else if ( url.indexOf( "ca" ) !== -1 ) {
    url = url.split("?")[1];
     handler.create(res, url)
}
    else {
    handler.error(res);
  }
}

module.exports = router;
