const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const displayCurrentPlayer = document.querySelector("#current-player");
let currentPlayer = 1;

for (var i = 0, len = squares.length; i < len; i++) {
  function index(index) {
    squares[i].onclick = function () {
      console.log("clicked" + index);
    };
  }
}
