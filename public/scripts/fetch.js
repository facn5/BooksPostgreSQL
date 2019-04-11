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


function createAccountFetch(value) {
  fetch('/ca?' + value )
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
  //   console.log('hey');
  // console.log(data);
    return;
  })
  .catch(function(error) {
    return error;
  })
}

function ReserveFetch(bookid, userid ) {
  fetch('/reserve?' + bookid + "&" + userid )
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    return;

  })
  .catch(function(error) {
    return error;
  })
}

function deleteFetch (bookid) {
  fetch('/deleted=' + bookid)
  .then(function(response) {
    location.reload();    
    return response.json();
  })
  .then(function(data){
    return;
  })
  .catch(function(error) {
    return error;
  })
}
