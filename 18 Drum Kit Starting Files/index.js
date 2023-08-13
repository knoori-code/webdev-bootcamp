const listOfButtons = document.querySelectorAll(".drum");

for (let button of listOfButtons) {
  button.addEventListener("click", function () {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
