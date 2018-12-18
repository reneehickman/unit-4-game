// Global Variables
window.onload = function(){
var wins = 0;

var losses = 0;

var scoreCounter = 0;

var targetNumber = "";

var images = ["assets/images/red.png", "assets/images/blue.png", "assets/images/yellow.png", "assets/images/green.png"];

console.log(images);

//Generates a random number between 19-120 ((max-min + 1) + min)
function generateTargetNumber() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);
}

//function that creates and sets values for each crystal image
function setCrystalValues() {
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
        var crystalElement = $(".crystalImages");
        //Each crystal image (with all it classes and attributes) will get added to the page.
        crystalElement.append(crystalImage);
    }
}

//function that displays html content
function displayContent() {
    $("#winsTotal").html(wins);
    $('#currentNumberToMatch').html(targetNumber);
    $("#lossesTotal").html(losses);
    $("#scoreCounter").html(scoreCounter);
    $('.crystalImages').empty();
}

//function to start or reset game
function startGame() {
    scoreCounter = 0;
    generateTargetNumber();
    displayContent();
    setCrystalValues();
};




generateTargetNumber();
displayContent();
setCrystalValues();


// Click Functions
function onCrystalClick(){
$(".crystalImage").on("click", function(){
    //Using the .attr("value") allows us to grab the value out of the "value" attribute of the crystals.
    //Since attributes on HTML elements are strings, we must convert it to an integer (parseInt) before adding to scoreCounter
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue); 
    scoreCounter += crystalValue;
    //Each crystal click adds to the global counter.
    $("#scoreCounter").html(scoreCounter);
    if (scoreCounter == targetNumber) {
        wins++;
        startGame();
    }
    else if (scoreCounter > targetNumber) {
        losses++;
        startGame();
    }; 
});

};

//Since we are appending the crystal image element dynamically, set on document click 
$(document).on('click', '.crystalImage', onCrystalClick);



};











    // startGame();




    // };

// $(".crystalImage").on("click", function () {

//     alert('hello there!');
//     // var crystalElement = $(".crystalImages");

//     //Using the .attr("value") allows us to grab the value out of the "value" attribute of the crystals.
//     //Since attributes on HTML elements are strings, we must convert it to an integer (parseInt) before adding to scoreCounter
//     // var crystalValue = ($(this).attr("value"));
//     // crystalValue = parseInt(crystalValue);
//     // //Every click, from every crystal adds to the global counter.
//     // scoreCounter += crystalValue;
//     // $("#scoreCounter").html(scoreCounter);

// });


//Since we are appending the crystal image element dynamically, on document click 
// $(document).on('click', '.crystalImage', function () {

//     alert('hello there!');
//     // var crystalElement = $(".crystalImages");

//     //Using the .attr("value") allows us to grab the value out of the "value" attribute of the crystals.
//     //Since attributes on HTML elements are strings, we must convert it to an integer (parseInt) before adding to scoreCounter
//     var crystalValue = parseInt($(this).attr("value"));

//     //Every click, from every crystal adds to the global counter.
//     scoreCounter += crystalValue;
//     $("#scoreCounter").html(scoreCounter);

// });
















