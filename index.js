const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = function () {
  rotateFeature(-90); //will rotate the content in the anti-clockwise direction
};

downBtn.onclick = function () {
  rotateFeature(90);
};

function rotateFeature(rotateAmount) {
  rotateSum = rotateValue + `rotate(${rotateAmount}deg)`;
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
