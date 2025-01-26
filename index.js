// click processing  processing

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++)
  buttons[i].addEventListener("click", function () {
    var button = this.innerHTML;
    buttonAnimation(button)
    checkKey(button)
});
// key press processing
document.addEventListener("keypress", function (event) {
    buttonAnimation(event.key)
    checkKey(event.key);
});

function playSound(src) {
  var audio = new Audio(src);
  audio.play();
}
function checkKey(key) {
    switch (key) {
        case "w":
          playSound("./sounds/tom-4.mp3");
          break;
        case "a":
          playSound("./sounds/tom-3.mp3");
  
          break;
        case "s":
          playSound("./sounds/tom-2.mp3");
  
          break;
        case "d":
          playSound("./sounds/tom-1.mp3");
  
          break;
        case "j":
          playSound("./sounds/snare.mp3");
  
          break;
        case "k":
          playSound("./sounds/crash.mp3");
  
          break;
        case "l":
          playSound("./sounds/kick-bass.mp3");
  
          break;
        default:
          break;
      }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}