// Durstenfeld shuffle algorithm used for shuffling numbers in an array (modernized version of Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Numbers in this array will be used for creating of 16 cards
var cardsArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var output = "";

function cardShuffle() {
    shuffleArray(cardsArray);

    for (var i = 0; i < cardsArray.length; i++) {
        output += `
            <div class="card" data-id="${cardsArray[i]}">
                <img class="back" src="images/image${cardsArray[i]}.jpg">
                <img class="front" src="images/front.jpg">
            </div>
        `;
    }
    document.getElementById("content").innerHTML = output;
}

//Cards are positioned in their random places on page opening or page refresh
window.onload = function() {
    cardShuffle();
}

function clear() {
    output = "";
    dataIdArray = [];
    document.getElementById("message").style.display = "none";
}

//Reset button will shuffle the cards
document.getElementById("resetCards").addEventListener("click", function() {
    clear(), cardShuffle();
});

var dataIdArray = [];  //Array for comparing data id's of two clicked cards
var classArray = [];   //Array for removal of flipCard class on unmatched cards
var correctGuesses = 0;

document.getElementById("content").addEventListener("click", function(e) {

    var parentDiv = e.target.parentElement;

    parentDiv.classList.add("flipCard");

    //Checking if the user has clicked two or more times on the same card. Undefined values will not be added to the array
    if (parentDiv.dataset.id !== undefined) {  
        dataIdArray.push(parentDiv.dataset.id);
    }

    classArray.push(parentDiv);

    if (dataIdArray.length === 2) {
        document.getElementById("content").style.pointerEvents = "none";
        if (dataIdArray[0] === dataIdArray[1]) {         //Correct guess
            dataIdArray = [];
            classArray = [];
            setTimeout(clickDelay, 1000);

            correctGuesses++;
        } else if (dataIdArray[0] !== dataIdArray[1]) {  //Incorrect guess
            dataIdArray = [];
            setTimeout(turnUnmatchedCards, 1000);
            setTimeout(clickDelay, 1100);
        } 
    }

    function clickDelay() {
        document.getElementById("content").style.pointerEvents = "auto";
    }

    function turnUnmatchedCards() {
        for (var i = 0; i < classArray.length; i++) {
            classArray[i].classList.remove("flipCard");
        }
        classArray = [];
    }

    if (correctGuesses === 8) {
        setTimeout(function() {
            document.getElementById("message").style.display = "flex";
        }, 1000);
    }
});