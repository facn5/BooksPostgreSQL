const fs = require('fs');
const path = require('path');

let extType={
  html: {"content-type": "text/html"},
  css:{"content-type": "text/css"}

}

const handleHome = (res) => {
  let pathFile=path.join(__dirname, "..","public","layouts","index.html");
    fs.readFile(pathFile,(err,file) => {
      if(err){
        console.log(err);
      }else{
        res.writeHead(200,extType["html"]);
        res.end(file);
      }
    })

}
module.exports={
  home: handleHome
}
