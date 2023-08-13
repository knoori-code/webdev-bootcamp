const listOfButtons = document.querySelectorAll(".drum");

for (let button of listOfButtons) {
  button.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        const crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        const kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "s":
        const snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      default:
        break;
    }
  });
}
