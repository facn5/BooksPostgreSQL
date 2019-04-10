function getcurrency(cb){
  fetch('/getbooks')
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    return cb(data);
  })
  .catch(function(error) {
    return error;
  })
}
