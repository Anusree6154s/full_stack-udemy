var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var score = 0;
var i = 0;
$(document).keydown(function () {
  if (gameStarted == false) {
    gameStarted = true;
    nextSequence();
  }
  $("h1").text("Level-" + i + " " +"Score-"+ score);
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

var l = 0;
function checkAnswer(elementIndex) {
  if (gamePattern[elementIndex] == userClickedPattern[elementIndex]) {
    console.log("Success");

    console.log("gamePattern[elementIndex] = " + gamePattern[elementIndex]);
    console.log("userClickedPattern = " + userClickedPattern);

    if (gamePattern.length == userClickedPattern.length) {
      score++;
      if(elementIndex==(4+i*5)){
        i++;
      }
      $("h1").text("Level-" + i + " " +"Score-"+ score);
      setTimeout(function () {
        nextSequence();
      }, 1000);
      
      console.log("i = "+i);
      console.log("elementIndex = "+elementIndex);
    } else {
      console.log(l + "th iteration");
      l++;
    }
  } else {
    console.log("Wrong");
    $("body").addClass("game-over");
    setTimeout(subtractClass, 100);
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    gameStarted=false;
    gamePattern = [];

    function subtractClass() {
      $("body").removeClass("game-over");
    }
  }
}

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  flashAnimation(randomChosenColour);
  playSound(randomChosenColour);

  console.log("gamePattern = " + gamePattern);
  console.log("userClickedPattern = " + userClickedPattern);
}

function flashAnimation(colour) {
  $("#" + colour)
    .fadeOut(300)
    .fadeIn(300);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
