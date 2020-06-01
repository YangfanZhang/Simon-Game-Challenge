
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var startGame = false;
var level = 0;

$(document).keypress(function(){
  if(!startGame){
    $("h1").text("Level " + level);
    nextSequence();
    startGame = true;
  }
})

$(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  })

function checkAnswer(currentLevel) {
     if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
     {
       if(userClickedPattern.length === gamePattern.length){
         setTimeout(function(){
           nextSequence();
         }, 1000);
       }
     }
     else
     {
       playSound("wrong");
       $("body").addClass("game-over");
       $("#level-title").text("Game over, Press Any Key to Restart");

       setTimeout(function(){
         $("body").removeClass("game-over");
       }, 200);
       startOver();
     }
  }

function nextSequence(){
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenClour = buttonColours[randomNumber];
  gamePattern.push(randomChosenClour);
  $("#" + randomChosenClour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenClour);
  level++;
  userClickedPattern = [];
}

function startOver() {
  level = 0;
  gamePattern = [];
  startGame = false;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
    }, 100);
  }
