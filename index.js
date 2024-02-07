var player1 = prompt("Welcome to my dice game. Enter your name Player 1"); // Player 1's name

var player2 = prompt("Enter your name Player 2"); // Player 2's name

if (player1 == "" && player2 == "" || player1 == null && player2 == null || player1 == "" && player2 == null || player2 == "" && player1 == null) {
    document.querySelector(".p1").textContent = "Player 1";
    player1 = "Player 1";
    
    document.querySelector(".p2").textContent = "Player 2";
    player2 = "Player 2";
} // Checks for empty variables then renders Player 1 and 2

else if (player1 == "" || player1 == null ) {
  document.querySelector(".p1").textContent = "Computer";
  player1 = "Computer";
  
  document.querySelector(".p2").textContent = player2;
} // Checks and renders Computer for empty player 1 variable 

else if (player2 == "" || player2 == null) {
  document.querySelector(".p1").textContent = player1;
  
  player2 = "Computer";
  document.querySelector(".p2").textContent = "Computer";
} // Checks and renders Computer for empty player 2 variable 

else {
    document.querySelector(".p1").textContent = player1;
    document.querySelector(".p2").textContent = player2;
} // Renders input data

document.querySelector(".refreshBtn").addEventListener("click", rollDice); // makes the button function on click

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // outputs a random number from 1 - 6

    var imageSource = "images/dice" + randomNumber1 + ".png";

    var img1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // outputs a random number from 1 - 6

    var imageSource0 = "images/dice" + randomNumber2 + ".png";

    var img2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource0);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩 " + player1 + " wins!";
    } //player1 wins
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = player2 + " wins! 🚩";
    } //player2 wins
    else {
        document.querySelector("h1").textContent = "Draw!";
    } //draw 
}
