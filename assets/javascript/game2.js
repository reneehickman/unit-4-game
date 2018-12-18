// Global Variables
window.onload = function(){
var wins = 0;

var losses = 0;

var scoreCounter = 0;

var images = [ '../images/red.png', '../images/blue.png', '../images/yellow.png', '../images/green.png'];

console.log(images);

//Generates a random number between 19-120 ((max-min + 1) + min)
function generateTargetNumber(){
    targetNumber = Math.floor(Math.random() * 102) + 19;
};


function setCrystalValues(){
    //for loop to create crystals for every images option
    for (var i = 0; i < images.length; i++) {
        // For each iteration, we will create a crystal Image
        var crystalImage = $("<img>");
        // First each crystal will be given the class ".crystalImage".
        // This will allow the CSS to take effect.
        crystalImage.addClass("crystalImage");
        // Each imageCrystal will be given a src link to the crystal image
        crystalImage.attr("src", images[i]);
        //Gives each crystal image a height of 100
        crystalImage.attr("height", "100");
        //Gives each crystal a random value between 1 - 12.
        crystalImage.attr("value", (Math.floor(Math.random() * 12) + 1));
        //Each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystalImages").append(crystalImage);
    };
};
console.log(setCrystalValues);

// function startGame(){
//     generateTargetNumber();
//     setCrystalValues();
//     scoreCounter = 0;
// };






};


