//  Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

let spansValue = [];

// Generate Letters
lettersArray.forEach(letter => {
    // Creat Span
    let span = document.createElement("span");

    // Creat Letters
    let theLetter = document.createTextNode(letter);

    // Append The Letter to span
    span.appendChild(theLetter);

    // Add Class To Span
    span.className = "letter_box";

    // Append Span To The Letters Container
    lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
    programming: ["php", "Javascript", "go", "scale", "scale", "fortran", "mysqual", "python"],
    movies: ["Prestige", "Up", "Coco", "Interstteler", "Inception", "Parasite"],
    people: ["Albert Einstein", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Egypt", "Yemen", "Qatar"],
};

// Get Random Property
let allKeys = Object.keys(words);

// Random Numbers Depend On Keys Length
let randomPropNum = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNum];//Keys Of Object

// Random Numbers Depend On Words
let randomPropValue = words[randomPropName];//Value Of Keys

// Get Object Value "WORD" Index
let randomValueNum = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueWord = randomPropValue[randomValueNum];

// Set Category Info
document.querySelector(".category span").innerHTML = randomPropName;

// console.log(Math.random());
// console.log(allKeys.length);
// console.log(Math.random() * allKeys.length);
// console.log(Math.random() * randomPropValue.length);
// console.log(randomPropValue);
// console.log(randomValueWord);
//*----------------------------------------------
// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters_guess");

//  Convert choosen word to array
let lettersAndSpace = Array.from(randomValueWord);

// create spans depend on words
lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // if Letter is SPACE
    if (letter === " ") {
        // Add Class To Span
        emptySpan.className = "with_space";
    }

    // Append Span To Guess Container
    lettersGuessContainer.appendChild(emptySpan);
    
})
// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters_guess span");

// Set Wrong Attempts
let worngAttempts = 0;

// Select The Draw Element:
let TheDraw = document.querySelector(".hangman_draw");


// Handle Letters On Clicking
document.addEventListener("click", (e) => {
    //* Set Chose Status
    let theStatus = false;
    //* theStatus in the event to reset it to FALSE if it became TRUE

    if (e.target.className === "letter_box") {
        e.target.classList.add("clicked");

        // Get Clicked Letter
        let clickedLetter = e.target.innerHTML.toLowerCase();
        // console.log(clickedLetter);

        let chosenWord = Array.from(randomValueWord.toLowerCase());

        // Loop On ChosenWord To Compare With clickedLetter
        chosenWord.forEach((wordLetter, wordIndex) => {
            // If clickedLetter = One Of ChosenWord Letter
            if (clickedLetter == wordLetter) {

                // Set Status To True
                theStatus = true;
                // Loop On All guess Spans
                guessSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = wordLetter;
                        let spansArray = Array.from(span.innerHTML);
                        spansValue.push(spansArray)
                    };
                    if (spansValue.length === chosenWord.length) {
                        WinGame();
                    }
                });
            };
        });
        //*--------------- Out chosenWord Loop
        // If Letter Is Wrong
        if (theStatus !== true) {
            // Increas Wrong Attempts
            worngAttempts++;

            // Add Wrong Class To Element
            TheDraw.classList.add(`wrong-${worngAttempts}`);

            // Play Fail Sound
            document.getElementById("fail").play();

            if (worngAttempts === 8) {
                endGame();
            }
        } else {
            // Play Success Sound
            document.getElementById("success").play();
            
        }
    }
});

// End Game Function:
function endGame () {
    // Creat Pop Up
    let div = document.createElement("div");
    // Creat Pop Up
    let txt = document.createTextNode(`Game Over, The word is ${randomValueWord}`);
    // Append Text To Div
    div.appendChild(txt);
    // Add Class On Div
    div.className = "popup";
    // Append To Body
    document.body.appendChild(div);
    lettersContainer.classList.add("finished");
};

// Win Game Function:
function WinGame () {
    // Creat Pop Up
    let div = document.createElement("div");
    // Creat Pop Up
    let txt = document.createTextNode(`Congratulations`);
    // Append Text To Div
    div.appendChild(txt);
    // Add Class On Div
    div.className = "popup";
    // Append To Body
    document.body.appendChild(div);
    lettersContainer.classList.add("win");
};
// console.log(randomValueWord);