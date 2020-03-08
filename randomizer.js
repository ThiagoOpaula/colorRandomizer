function redCubes() {
  var boxContainer = document.querySelector("#box-container");
  var newBox = document.createElement("div");
  newBox.className = "box";
  boxContainer.appendChild(newBox);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  newBox.style.backgroundColor = getRandomColor();
  var newColor = getRandomColor();
  var hex = document.querySelector("#hex");
  hex.innerHTML = "Hex color value " + newColor;
  var emptyBox = document.querySelector(".box");
  emptyBox.parentNode.removeChild(emptyBox);
}