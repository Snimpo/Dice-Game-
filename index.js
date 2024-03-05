
/*

Here is the solution given on the course:

var randomNumber1= (Math.floor()(Math.random()*6))+1;

var randomDiceImage= "dice" +randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);

var randomNumber2= (Math.floor()(Math.random()*6))+1;

var randomImageSource2 = "images/dice" + randomNumber2 ".png";

var image2 = document.querySelectorAll("img") [0];

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
} else {
    document.querySelecto("h1").innerHTML = A Draw!;
}

And here is the solution I arrived to:

*/

var arrayOfImages = ['images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'];


function dicee() {
    var random1 = Math.floor(Math.random() * arrayOfImages.length);
    var x = document.querySelector('.img1').src = arrayOfImages[random1];

    var random2 = Math.floor(Math.random() * arrayOfImages.length);
    var y = document.querySelector('.img2').src = arrayOfImages[random2];

    if (x > y) {
        document.querySelector('h1').innerHTML = "Player 1 Wins";
    } else if (x < y) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    } else if (x === y) {
        document.querySelector('h1').innerText = "A Draw!";
    }
};



dicee();
