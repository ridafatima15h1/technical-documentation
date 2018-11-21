"use strict";

//////////////////////////////////////////////////////////////////
/////////////////////////_DATA_SET_///////////////////////////////
//////////////////////////////////////////////////////////////////

var quotes = [

    {
        text: "Of all God’s creatures, there is only one that cannot be made slave of the leash. That one is the cat.",
        author: "Mark Twain",
        image: "https://res.cloudinary.com/billu/image/upload/v1537232705/Cats/00.jpg"
    },

    {
        text: "I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.",
        author: "Hippolyte Taine",
        image: "https://res.cloudinary.com/billu/image/upload/v1536970923/Cats/01.jpg"
    },

    {
        text: "The way to get on with a cat is to treat it as an equal – or even better, as the superior it knows itself to be.",
        author: "Elizabeth Peters",
        image: "https://res.cloudinary.com/billu/image/upload/v1536970849/Cats/02.jpg"
    },

    {
        text: "There are no ordinary cats.",
        author: "Colette",
        image: "https://res.cloudinary.com/billu/image/upload/v1536971105/Cats/03.jpg"
    },

    {
        text: "What greater gift than the love of a cat.",
        author: "Charles Dickens",
        image: "https://res.cloudinary.com/billu/image/upload/v1536970825/Cats/04.jpg"
    },

    {
        text: "I have lived with several Zen masters -- all of them cats.",
        author: "Eckhart Tolle",
        image: "https://res.cloudinary.com/billu/image/upload/v1536970857/Cats/05.jpg"
    },

    {
        text: "I believe cats to be spirits come to earth.",
        author: "Jules Verne",
        image: "https://res.cloudinary.com/billu/image/upload/v1536970823/Cats/06.jpg"
    },

    {
        text: "As anyone who has ever been around a cat for any length of time well knows cats have enormous patience with the limitations of the human kind.",
        author: "Cleveland Amory",
        image: "https://res.cloudinary.com/billu/image/upload/v1536971230/Cats/07.jpg"
    },

    {
        text: "The smallest feline is a masterpiece.",
        author: "Leonardo da Vinci",
        image: "https://res.cloudinary.com/billu/image/upload/v1536971263/Cats/08.jpg"
    },

    {
        text: "A cat has absolute emotional honesty.",
        author: "Ernest Hemingway",
        image: "https://res.cloudinary.com/billu/image/upload/v1536971388/Cats/09.jpg"
    },

    {
        text: "Cats choose us, we don’t own them.",
        author: "Kristin Cast",
        image: "https://res.cloudinary.com/billu/image/upload/v1536971302/Cats/10.jpg"
    },

    {
        text: "Way down deep, we’re all motivated by the same urges. Cats have the courage to live by them.",
        author: "Jim Davis",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231488/Cats/11.jpg"
    },

    {
        text: "Those who’ll play with cats must expect to be scratched.",
        author: "Miguel de Cervantes",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231518/Cats/12.jpg"
    },

    {
        text: "Cats know how to obtain food without labor, shelter without confinement, and love without penalties.",
        author: "Walter Lionel George",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231540/Cats/13.jpg"
    },

    {
        text: "Cats have it all — admiration, an endless sleep, and company only when they want it.",
        author: "Rod Mckuen",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231571/Cats/14.jpg"
    },

    {
        text: "The problem with cats is that they get the same exact look whether they see a moth or an axe-murderer.",
        author: "Paula Poundstone",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231589/Cats/15.jpg"
    },

    {
        text: "There are two means of refuge from the miseries of life: music and cats.",
        author: "Albert Schweitzer",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231648/Cats/16.jpg"
    },

    {
        text: "In ancient times cats were worshipped as gods; they have not forgotten this.",
        author: "Terry Pratchett ",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231674/Cats/17.jpg"
    },

    {
        text: "Time spent with cats is never wasted.",
        author: "Sigmund Freud",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231714/Cats/18.jpg"
    },

    {
        text: "Cats are the runes of beauty, invincibility, wonder, pride, freedom, coldness, self-sufficiency, and dainty individuality.",
        author: "H. P. Lovecraft",
        image: "https://res.cloudinary.com/billu/image/upload/v1537231761/Cats/19.jpg"
    }

];

//////////////////////////////////////////////////////////////////
/////////////////////////_GLOBAL_VARIABLES_///////////////////////
//////////////////////////////////////////////////////////////////

var remainingQuotes = Array.from(quotes); // copy of original quotes array

var hasDisplayedFirstQuote = false; // boolean flag for main function

var img = []; // variable for imagePreLoader function

//////////////////////////////////////////////////////////////////
/////////////////////////_FUNCTION_DECLARATIONS_//////////////////
//////////////////////////////////////////////////////////////////

// RANDOM INTEGER FUNCTION
function getRandomInt(arraySize) {
    return Math.floor(Math.random() * Math.floor(arraySize));
}

// INDEX OF OBJECT IN AN ARRAY FUNCTION
function indexOfObject(arr, obj) {
    let objKeyArr = Object.keys(obj);
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < objKeyArr.length; k++) {
            if (arr[i].hasOwnProperty(objKeyArr[k]) === true) {
                if (obj[objKeyArr[k]] != arr[i][objKeyArr[k]]) {
                    break;
                }
                if (k === (objKeyArr.length - 1)) {
                    return i;
                }
            }
        }
    }
    return -1;
}

// TEXT FOR TWITTER FUNCTION
function textTweet(text, author) {
    let tweetText = "";
    if ((text.length + author.length) > 280) {
        tweetText = text.slice(0, (280 - (author.length + 3)));
        tweetText = tweetText + "...";
    } else {
        tweetText = text;
    }
    return tweetText;
}

// FADE-IN ANIMATION
function fadeIn() {
    document.getElementById("text").style.animationName = "fade-in";
    document.getElementById("author").style.animationName = "fade-in";
}

// FADE-OUT ANIMATION
function fadeOut() {
    document.getElementById("text").style.animationName = "fade-out";
    document.getElementById("author").style.animationName = "fade-out";
}

// SET QUOTE
function setQuote(text, author, image) {
    document.getElementById("text").innerHTML = text;
    document.getElementById("author").innerHTML = author;
    document.body.style.backgroundImage = "url(" + image + ")";
    document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + textTweet(text, author) + '" ' + author);
}

// IMAGE PRE-LOADER FUNCTION
function imagePreLoader(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
        img[i] = new Image();
        img[i].src = imageArray[i].image;
    }
}

// RANDOM QUOTE FUNCTION
function new_Quote() {

    let random = getRandomInt(remainingQuotes.length);
    let currentQuote = remainingQuotes.splice(random, 1)[0];

    if (remainingQuotes.length === 0) {
        remainingQuotes = Array.from(quotes);
        let x = indexOfObject(remainingQuotes, currentQuote);
        remainingQuotes.splice(x, 1);
    }

    setQuote(currentQuote.text, currentQuote.author, currentQuote.image);
}

// MAIN FUNCTION
function main() {
    if (!hasDisplayedFirstQuote) {
        new_Quote();
        fadeIn();
        hasDisplayedFirstQuote = true;
    } else {
        fadeOut();
        setTimeout(new_Quote, 1000);
        setTimeout(fadeIn, 1000);
    }
}

//////////////////////////////////////////////////////////////////
/////////////////////////_FUNCTION_CALLING_///////////////////////
//////////////////////////////////////////////////////////////////
window.onload = function () {
    imagePreLoader(quotes);
    main();
};

document.getElementById("new-quote").onclick = function () {
    main();
};