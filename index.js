var button = document.querySelector('#button');
button.addEventListener("click" , validNumber , false);
var correctNumber = Math.ceil(Math.random()*100);
var guessRemainingTimes = 10;
var guessMade = 0;
var gameWon = false;
var gameOver = false;
var userNumber = document.querySelector('#usernumber');
var arrow = document.querySelector('#arrow');
function render(){
  arrow.style.left = userNumber.value * 3 + "px";
}



function validNumber(){
  console.log(userNumber.value);
if(isNaN(userNumber.value) == true || userNumber.value == '')
    window.alert("Enter valid number!");
  else
    playGame();

}
var gameState = "";
var result = document.querySelector("#intial");

button.style.cursor = "pointer";
window.addEventListener("keydown" , keyHandler , false);
function keyHandler(event){
  if(event.keyCode == 13) validNumber();
}

function playGame(){
  ++guessMade;
  --guessRemainingTimes;
if(guessRemainingTimes <= 0) gameOver = true;

if(parseInt(userNumber.value)>correctNumber){
  result.innerHTML = "That's too high. ";
}
else if(parseInt(userNumber.value)<correctNumber){
  result.innerHTML = "That's too low. ";
}
else if(parseInt(userNumber.value)==correctNumber){
  result.innerHTML = "You got it! ";
  gameWon = true;
}

gameState = "Guess: " + guessMade + ", Remaining: " + guessRemainingTimes + "." ;
result.innerHTML += gameState;

if(gameOver == true || gameWon == true){
  endGame();
}

render();
}

function endGame(){
  if(gameWon == true) result.innerHTML = "Wow! it's " + correctNumber + " as you guessed." +"<br>"
   + "it only took you " + guessMade + " guesses.";
  else result.innerHTML = "Loser!";
  button.removeEventListener("click", validNumber , false);
  button.disabled = true;
  window.removeEventListener("keydown", keyHandler, false);
  userNumber.disabled = true;
}
