function getcurrency(cb){
  fetch('/getbooks')
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    // console.log(data);
    // console.log("data body",data.body);
    return cb(data);
  })
  .catch(function(error) {
    return error;
  })
}
