const colorBox = document.getElementById("color-box")
const changeColorBtn = document.getElementById("change-color-btn");

changeColorBtn.addEventListener("click", function (event) {
  function getRandomColor() {
    let randomColor = "#";
    const letters = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }

  changeColorBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
