// Durstenfeld shuffle algorithm used for shuffling numbers in an array
// (modernized version of Fisher-Yates shuffle algorithm)
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
}

//Reset button will shuffle the cards
document.getElementById("resetCards").addEventListener("click", function() {
    clear(), cardShuffle();
});

var dataIdArray = [];  //Array for comparing two clicked cards
var classArray = [];

document.getElementById("content").addEventListener("click", function(e) {

    var parentDiv = e.target.parentElement;

    parentDiv.classList.add("flipCard");

    //checking if the user has clicked two or more times on the same card
    //undefined values will not be added to the array
    if (parentDiv.dataset.id !== undefined) {  
        dataIdArray.push(parentDiv.dataset.id);
    }

    classArray.push(parentDiv);
    console.log(classArray);

    if (dataIdArray.length === 2) {
        if (dataIdArray[0] === dataIdArray[1]) {
            console.log("You guessed it!");
            dataIdArray = [];
            classArray = [];
        } else if (dataIdArray[0] !== dataIdArray[1]) {
            console.log("Wrong. Try again.");
            dataIdArray = [];
            // for (var i = 0; i < classArray.length; i++) {
            //     classArray[i].classList.remove("flipCard");
            // }
            // setInterval(removingClasses, 1000);
            for (var i = 0; i < classArray.length; i++) {
                classArray[i].classList.remove("flipCard");
            }
            
            classArray = [];

            // function delayCardFlip() {
            //     setInterval(function() {
            //         for (var i = 0; i < classArray.length; i++) {
            //             classArray[i].classList.remove("flipCard");
            //         }
            //         delayCardFlip();
            //     }, 1000);
            // }
            
            
            
            
        }
    }
    // console.log(classArray);

    function removingClasses() {
        for (var i = 0; i < classArray.length; i++) {
            classArray[i].classList.remove("flipCard");
        }
    }
    // dataIdArray.push(parentDiv.dataset.id);

    // if (typeof dataIdArray[1] === "undefined") {
    //     dataIdArray[1].pop;
    // }

    
    // if (clickedCard[0] === clickedCard[1]) {
    //     console.log("You have clicked on the same card");
    // }


    // if (dataIdArray.length === 2 && dataIdArray[1] === undefined) {
    //     dataIdArray[1].pop();
    // }


    // for (var i = 0; i < dataIdArray.length; i++) {
    //     if (dataIdArray[1] === undefined) {
    //         dataIdArray[1].pop();
    //     }
    // }
    

    // if (parentDiv.classList.contains("flipCard")) {
    //     this.classList.add("disabledCard");
    // }
    // console.log(dataIdArray.length);
    // console.log(dataIdArray);


});













/*
var cardArray = [];
var cardArray2 = [];

document.getElementById("content").addEventListener("click", function(e) {
    
    var card = e.target.classList;

    cardArray.push(e.target.dataset.id);  //for comparing cards data-id
    cardArray2.push(e.target); //for removing classes from unpaired divs

    if (cardArray.length === 2) {
        if (cardArray[1] === undefined) {
            cardArray.pop();
            // cardArray2[0].childNodes.style.pointerEvents = "none";
            // e.target.style.pointerEvents = "none";
            // e.target.parentElement.classList.remove("flipCard");
            console.log("select another card");
        } else if (cardArray[0] === cardArray[1]) {
            console.log("You guessed it!");
            cardArray = [];
            cardArray2 = [];
        } else if (cardArray[0] !== cardArray[1]) {
            console.log("That is not correct. Guess again.");
            cardArray = [];
            function turnCards() {
                cardArray2[0].classList.remove("flipCard");
                cardArray2[1].classList.remove("flipCard");
                cardArray2 = [];
            }
            setTimeout(turnCards, 1000);
        }
    }

    console.log(cardArray);

    
    if (e.target.parentElement.classList.contains("flipCard")) {
        e.target.parentElement.classList.remove("flipCard");
    } else {
        card.add("flipCard");
    }
*/