
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
  })

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenClour = buttonColours[randomNumber];
  gamePattern.push(randomChosenClour);
  $("#" + randomChosenClour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenClour);
  level++;
  $("h1").text("Level " + level);
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
