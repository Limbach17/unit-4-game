var wins = 0;
var losses = 0;

var targetManna = "";
var yourManna = "";


//can't translate this translated from Homework_03 display function //

/* function displayBoard() {
    $("#gameboard").css("display", "block");
} 

$("#gogamego").click(displayBoard);

$("#gogamego").click(function(){
    $("#gameboard").css("display", "block"); */

function randomManna(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addManna

var diamondManna = randomManna(1,12);
var opalManna = randomManna(1,12);
var amethystManna = randomManna(1,12);
var snowflakeManna = randomManna(1,12);

targetManna = randomManna(19,120);

$("#diamond").click()

if (yourManna === targetManna) {
    alert("Chakaras fully aligned!");
    wins++;
}

else if (yourManna > targetManna) {
    alert("Crystals broken! Try again.");
    losses++;
}



