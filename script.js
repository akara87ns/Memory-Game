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
                <img src="images/image${cardsArray[i]}.jpg">
            </div>
        `;
    }
    document.getElementById("content").innerHTML = output;
}

//Cards are positioned in their random places on page opening or refresh
window.onload = function() {
    cardShuffle();
}

function clear() {
    output = "";
}

//Reset button will shuffle the cards
document.getElementById("resetCards").addEventListener("click", function() {
    clear(), cardShuffle();
});