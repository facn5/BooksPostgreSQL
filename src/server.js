const http = require('http');
const router = require('./router');
const server = http.createServer(router);

const port = process.env.PORT || 4010;

server.listen(port, () => {
  console.log(`Server started at ${port}`);
});
