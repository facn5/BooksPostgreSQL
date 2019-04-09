const url = require('url');
const handler = require('./handler');
const router=(req,res) => {

  let url=req.url;
  if(url==="/"){
    handler.home(res) ;
  }else {
    res.writeHead(404);
    res.end("not found 404");
  }
}

module.exports=router;
