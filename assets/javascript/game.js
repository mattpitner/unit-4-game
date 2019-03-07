var ghosts = ["red", "orange", "green", "pink"]

function generatePointNumber() {
    randomNumber = Math.floor(Math.random() * 120) + 16;
    return randomNumber
}
var targetScore = generatePointNumber()

$("#target").append(targetScore)

function generateGhostNumbers() {
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    ghosts.forEach(setGhostValue);
}

function setGhostValue(color) {
    console.log(color)
    randomNumber = Math.floor(Math.random() * 12) + 1;
    // $("#ghosts-" + ghosts).html = ghosts + ":" + randomNumber;
    $("#ghost-" + color).attr("score", randomNumber)
}

generateGhostNumbers()

var ghostNumber = generateGhostNumbers()

var counter = 0

$(".ghost").on("click", function () {

    var score = ($(this).attr("score"));

    counter = parseInt(score) + counter
    $("#score").html("Current Score: " + counter)

    if (counter === targetScore) {
        resetPoints()
        alert("You win!")
    }
    else if (counter > targetScore) {

        resetPoints()
        alert("You lose!!")
    }
});

function resetPoints() {
    generateGhostNumbers();
    counter = 0;
    generatePointNumber();
    $("#score").html("Current Score: " + counter)
    targetScore = generatePointNumber()
    $("#target").html("Target Score: " + targetScore)
}




