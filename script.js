function myFunction() {
  var x = document.getElementById("myLinks");
  if (window.screen.width < 751) {
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  } else {
    x.style.display = "flex";
  }
}
