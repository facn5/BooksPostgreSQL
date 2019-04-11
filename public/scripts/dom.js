var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var userid;

if (!cookieValue || cookieValue == null || cookieValue == undefined || cookieValue == "") {
  div_show();
  document.getElementById('WelcomeMsg').style.display = "none";
  document.getElementById('Logout').style.display = "none";
}
else {
  document.getElementById('WelcomeMsg').innerText = "Hello " + cookieValue + "!";
  document.getElementById('Logout').style.display = "inline-block";
  document.getElementById('WelcomeMsg').style.display = "block";
}

document.getElementById('Logout').addEventListener('click', function (e) {
  e.preventDefault();
  document.cookie = "name=";
  location.reload();
})

document.getElementById("arrow-down").addEventListener("click", function (e) {

  e.preventDefault();

  var x = document.getElementsByClassName("add-book--container")[0];
  var y = document.getElementById('arrow-down');
  if (x.style.opacity == 1) {
    x.style.position = "absolute";
    x.style.opacity = 0;
    x.style.visibility = "hidden";
    y.style.color = "#141414";
  } else {
    x.style.position = "relative";
    x.style.visibility = "visible";
    x.style.opacity = 1;
    y.style.color = "#666";
  }
});

getcurrency(updateDom);
// getuserid(setid);

function setid( data ) {
  userid = data;
}

// Validating Empty Field
function check_empty() {
  if (document.getElementById('name').value.trim() == "") {
    alert("Please enter your full name");
  } else {
    div_hide();
    createAccountFetch(document.getElementById('name').value);
    create(document.getElementById('name').value);
  }
}

function create(value) {
  document.cookie = "name=" + value;
  document.getElementById('WelcomeMsg').innerText = "Hello " + value + "!";
  document.getElementById('WelcomeMsg').style.display = "block";
  document.getElementById('Logout').style.display = "inline-block";
}

function div_show() {
  document.getElementById('abc').style.display = "block";
}

function div_hide() {
  document.getElementById('abc').style.display = "none";
}

function updateDom(data) {

  var container = document.getElementById('container');

  for (var i = 0; i <= data.length - 1; i++) {
    var newElement = document.createElement('DIV');

    var resButton = document.createElement('button');
    var input = document.createElement("input");
    var delBtn = document.createElement('button');
    var newH3 = document.createElement('h3');
    var p0 = document.createElement('p');
    var p1 = document.createElement('p');
    var div = document.createElement('div');

    delBtn.setAttribute('class', "del-button");
    delBtn.setAttribute("onclick", 'return itemClicked(\'' + data[i].id + '\')');

    newElement.setAttribute('class', "book-item");



    resButton.setAttribute('class', "res-button");
    resButton.id = "ko" + i;
    resButton.value = data[i].id;

    div.setAttribute('class','div-id');

    newH3.innerText = data[i].name;
    p0.innerText = data[i].shortdesc;
    p1.innerText = data[i].year + " By " + data[i].author;

    resButton.innerText = ( ( data[i].reserved == 1 ? "Unr" : "R"  ) + "eserve the book" )

    delBtn.innerText = "Delete the book"
    newElement.append(newH3);
    newElement.append(p0);
    newElement.append(p1);
    container.append(newElement);
    newElement.append(resButton);
    // var input = document.createElement("input");
    //
    // input.setAttribute('type', 'date');
    // input.style.display = "block"
    // input.setAttribute('id', 'text' + i);
    p1.setAttribute("id", i);
    document.getElementById("ko" + i).addEventListener("click", (e) => {
      //e.preventDefault()
        ReserveFetch(e.target.value, cookieValue);

        e.target.innerText = e.target.innerText.indexOf('Un') !== -1 ? "Reserve the book" : "Unreserve the book";
  //    widow.location.href =

    //  document.getElementById((e.target.id).charAt(2)).append(input);
    })
    newElement.append(div);
    div.append(resButton);
    div.append(delBtn);


  }
}

const itemClicked = (id) => {
  let deleted = "deleted=" + id;
  window.location.href = deleted;
}
