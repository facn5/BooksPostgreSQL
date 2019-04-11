var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var userid;

if (!cookieValue || cookieValue == null || cookieValue == undefined || cookieValue == "") {
  div_show();
  document.getElementById('WelcomeMsg').style.display = "none";
  document.getElementById('Logout').style.display = "none";
} else {
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

function setid(data) {
  userid = data;
}

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

  data.forEach((item) => {
    var newElement = document.createElement('DIV');
    var resButton = document.createElement('button');
    var delBtn = document.createElement('button');
    var newH3 = document.createElement('h3');
    var p0 = document.createElement('p');
    var p1 = document.createElement('p');
    var div = document.createElement('div');

    delBtn.setAttribute('class', "del-button");
    delBtn.setAttribute("onclick", 'deleteFetch(\'' + item.id + '\')');
    newElement.setAttribute('class', "book-item");
    resButton.setAttribute('class', "res-button");
    div.setAttribute('class', 'div-id');
    p1.setAttribute("id", 'item.id');

    resButton.id = item.id;
    resButton.value = item.id;
    newH3.innerText = item.name;
    p0.innerText = item.shortdesc;
    p1.innerText = item.year + " By " + item.author;
    resButton.innerText = ((item.reserved == 1 ? "Unr" : "R") + "eserve the book")
    delBtn.innerText = "Delete the book"

    newElement.append(newH3);
    newElement.append(p0);
    newElement.append(p1);
    container.append(newElement);
    newElement.append(resButton);
    newElement.append(div);
    div.append(resButton);
    div.append(delBtn);

    document.getElementById(item.id).addEventListener("click", (e) => {
      ReserveFetch(e.target.value, cookieValue);
      e.target.innerText = e.target.innerText.indexOf('Un') !== -1 ? "Reserve the book" : "Unreserve the book";
    });
  });
}
