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

function updateDom(data) {

  var container = document.getElementById('container');

  

  for (var i = 0; i <= data.length - 1; i++) {
    var newElement = document.createElement('DIV');
    var resButton = document.createElement('button')

    newElement.setAttribute('class', "book-item");
    resButton.setAttribute('class', "res-button");
    resButton.id = "ko" + i;

    var newH3 = document.createElement('h3');
    var p0 = document.createElement('p');
    var p1 = document.createElement('p');

    newH3.innerText = data[i].name;
    p0.innerText = data[i].shortdesc;
    p1.innerText = data[i].year + " By " + data[i].author;
    resButton.innerText = "Reserve the book"
    newElement.append(newH3);
    newElement.append(p0);
    newElement.append(p1);
    container.append(newElement);
    newElement.append(resButton);
    var input = document.createElement("input");

    input.setAttribute('type', 'date');
    input.style.display = "block"
    input.setAttribute('id', 'text' + i);
    p1.setAttribute("id", i);
    document.getElementById("ko" + i).addEventListener("click", (e) => {
      //e.preventDefault()

      document.getElementById((e.target.id).charAt(2)).append(input);
    })

  }

}




// }
//
// document.getElementsByClassName("res-button").addEventListener("click", addRes => {
// addRes.preventDefault()
//   var input = document.createElement("input"); input.setAttribute('type', 'text');
//   res-button.append(input)
//   if (!date) {
//     let pIns = document.createElement('p')
//     pIns.innerText="Please inseret reservation date"
//   }
// })
