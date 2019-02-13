$(".crystal").on("click", function() {
    alert("you clicked a crystal!");
});
///created counter to keep track of the users total ,each time they click on the crystal it will add 1. 
var counter = 0;
$(".crystal").on("click", function() {

    counter +=1;

    alert("you clicked this crystal" + counter + " times!");
});
///increase the counter by *10 each time the user clicks
var counter = 0;
$(".crystal").on("click", function() {

    counter += 10;

    alert("your new score is " + counter);
});
///establishing the new "targetNumber"
var targetNumber = 50;

$("#number-to-guess").text(targetNumber);
///setting the "number-to-guess" header to match "targetNUmber"
var counter = 0;
$("#.crystal").on("click", function() {

    counter += 10;

    alert("your new score is: " + counter);
});

var targetNUmber= 50;

$("#number-to-guess").text(targetNUmber);

var counter = 0;
var numberOptions = [10, 11];
var increment = numberOptions[Math.round(Math.random())];

$(".crystal").on("click", function() {

    counter += increment;

    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("you win!");
    }
    else if (counter >= targetNUmber){
        alert("you lose!!");
    }
});

var targetNUmber = 53;
$("#number-to-guess").text(targetNUmber);

var counter = 0;

var numberOptions = [10, 5, 3, 7];
////create for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal");
        imageCrystal.attr("src","crystal");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
    }
    ////click event applies to every single crystal on page.
    $(".crystal").on("click", function() {
        var crystalvalue = ($(this).attr("data-crystalvalue"));
        crystalvalue = parseInt(crystalvalue);
        counter += crystalvalue; ///////every click from the crystals adds to the global counter.
        alert("new score: " + conter);
        if (counter === targetNUmber){
            alert("you win!");
        }
        else if (counter >= targetNUmber) {
            alert("you lose!!");
        }
    });