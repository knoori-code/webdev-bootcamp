const listOfButtons = document.querySelectorAll(".drum");

for (let button of listOfButtons) {
  button.addEventListener("click", function () {

    this.style.color = "white";

  });
}

// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();