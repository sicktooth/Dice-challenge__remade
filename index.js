var player1 = prompt("Welcome to my dice game. Enter your name Player 1");

var player2 = prompt("Enter your name Player 2");

if (player1.length == 0) {
    document.querySelector(".p1").textContent = "Player 1";
    player1 = "Player 1";
}
else if (player2.length == 0) {
    document.querySelector(".p2").textContent = "Player 2";
    player2 = "Player 2";
} else {
    document.querySelector(".p1").textContent = player1;
    document.querySelector(".p2").textContent = player2;
}

document.querySelector(".refreshBtn").addEventListener("click", rollDice);

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // outputs a random number from 1 - 6

    var imageSource = "/images/dice" + randomNumber1 + ".png";

    var img1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // outputs a random number from 1 - 6

    var imageSource0 = "/images/dice" + randomNumber2 + ".png";

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
