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
