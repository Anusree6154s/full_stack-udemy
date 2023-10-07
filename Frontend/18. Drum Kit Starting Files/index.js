for (let i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", clickOutput);

  function clickOutput() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  }
}

document.addEventListener("keypress",keyOutput );

function keyOutput(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
  }


function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");

    // setTimeout(() => {
    //     document.querySelector("."+key).classList.remove("pressed"); 
    // }, 100);

    setTimeout(removalFunction, 100);
    function removalFunction(){
        document.querySelector("."+key).classList.remove("pressed");
    }

}