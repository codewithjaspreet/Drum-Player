//detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    playAudio(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function handleClick() {
  alert("I got clicked!");
}

function playAudio(k) {

  switch (k) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/crash.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/snare.mp3").play();
      break;
    default: console.log(k);

  }
}
//detecting keyboard press
document.addEventListener("keydown", function(event){
  playAudio(event.key);
  buttonAnimation(event.key);
});

//Adding animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}
