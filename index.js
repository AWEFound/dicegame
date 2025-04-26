
//Lets generate a random value using Math.random() as earlier learnt

/*
var  randomNumber1 = Math.random() * 6;
*/

//Since we are limited to 6 numbers, lets multiply our random number by 6. 
// Random numbers are always less than 1 hence the result multiplied by 1 would all be less than 6

/* 
var randomNumber1 = Math.random() * 6;
*/

//We want our random numbers to be whole number, hence lets introduce Math.floor()

var randomNumber1 = Math.floor(Math.random() * 6);

/* Our results would all be between 0 to 5 and won't ever display 6. To display 6,
we will have to add 1 to the previous random generation
*/

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// We will use this randomization to generate the different images. We will also use cancatenation.

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// We can now use this to change the source of our image element. We will use cancatenation.

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// Now, let's change the source of our images using the Attibutes properties
// We will first do for image1 and then that of image2

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Lets do same for the second dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Adding an if or else statement for the dice outcomes

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTMl = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}