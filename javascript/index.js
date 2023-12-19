/*---------------------IMAGE 1---------------------*/

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


/*---------------------IMAGE 2---------------------*/

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1 - 6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource2);

/*---------------------HEADING---------------------*/

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player one Wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a draw";
} else {
  document.querySelector("h1").innerHTML = "Player two Wins!🚩";
}
