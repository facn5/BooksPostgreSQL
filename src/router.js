const url = require('url');
const handler = require('./handler');
const router=(req,res) => {

  let url=req.url;
  if(url==="/"){
    handler.home(res) ;
  }else if(url.indexOf('public') !== -1){
    handler.public(url, res);
  }else {
    handler.error(res);
  }
}

module.exports=router;
