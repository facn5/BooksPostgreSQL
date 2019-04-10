document.getElementById("arrow-down").addEventListener("click", function(e) {
  e.preventDefault();

  var x = document.getElementsByClassName("add-book--container")[0];
  var y = document.getElementById('arrow-down');
  if (x.style.opacity == 1) {
    x.style.position = "absolute";
    x.style.opacity = 0;
    y.style.color = "#141414";
  } else {
    x.style.position = "relative";
    x.style.opacity = 1;
    y.style.color = "#666";
  }
});

getcurrency(updateDom);

function updateDom( data ) {

  var container = document.getElementById('container');

  data.map( function( item ){

    var newElement = document.createElement('DIV');
    newElement.setAttribute('class', "book-item");
    var newH3 = document.createElement('h3');
    var p0 = document.createElement('p');
    var p1 = document.createElement('p');
    newH3.innerText = item.name;
    p0.innerText = item.shortdesc;
    p1.innerText = item.year + " By " + item.author;
    newElement.append(newH3);
    newElement.append(p0);
    newElement.append(p1);
    container.append(newElement);

  } )
}
