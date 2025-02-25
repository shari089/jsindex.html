var health = 5;
var chosenWord = ""; 
var words = [ 
    "BLAZE", "BRAIN", "CLOUD", "DREAM", "EIGHT", "FLUTE", "GRASP", "HUMOR", "CRATE", "DANCE",
    "KNOBS", "LATCH", "MOUNT", "NIGHT", "OCEAN", "PLUMB", "GUILT", "RANCH", "ROACH", "TANGO",
    "URBAN", "VOTER", "WALTZ", "XENON", "YOUTH", "ZEBRA", "BRISK", "CHALK", "DEPTH", "EAGER",
    "FANCY", "GLIDE", "LOVED", "INBOX", "TEARS", "KNEAD", "LUNCH", "MIRTH", "NOBLE", "HATED",
    "PRISM", "QUAKE", "RUMOR", "SHINY", "THUMB", "ABUSE", "SHAME", "WOVEN", "FOUND", "YACHT"
];

function setupGame() {
    chosenWord = words[Math.floor(Math.random() * 50)]; 
    console.log("Chosen Word: ", chosenWord);
    alert(chosenWord); // tangal lng to
}

function checkWord() {
    if (health <= 0) return;
    let answer = prompt("Enter a word: ").toUpperCase();

    if (answer == "" || answer.length != 5) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    let box0 = document.getElementById(r-${5-health}-0);
    let box1 = document.getElementById(r-${5-health}-1);
    let box2 = document.getElementById(r-${5-health}-2);
    let box3 = document.getElementById(r-${5-health}-3);
    let box4 = document.getElementById(r-${5-health}-4);

    box0.innerText = answer[0];
    box1.innerText = answer[1];
    box2.innerText = answer[2];
    box3.innerText = answer[3];
    box4.innerText = answer[4];

    // Row 1
    if (answer[0] == chosenWord[0]) {
        box0.style.backgroundColor = #6AAA64;
    } 
    else if (answer[0] == chosenWord[1] || answer[0] == chosenWord[2] || 
        answer[0] == chosenWord[3] || answer[0] == chosenWord[4] ) {
        box0.style.backgroundColor = #C9B458;
    } 
    else {
        box0.style.backgroundColor = #787C7E;
    }

    // Row 2
    if (answer[1] == chosenWord[1]) {
        box1.style.backgroundColor = #6AAA64;
    } 
    else if (answer[1] == chosenWord[0] || answer[1] == chosenWord[2] || 
        answer[1] == chosenWord[3] || answer[1] == chosenWord[4]) {
        box1.style.backgroundColor = #C9B458;
    } 
    else {
        box1.style.backgroundColor = #787C7E;
    }

    // Row 3
    if (answer[2] == chosenWord[2]) {
        box2.style.backgroundColor = #6AAA64;
    } else if (answer[2] == chosenWord[0] || answer[2] == chosenWord[1] || 
        answer[2] == chosenWord[3] || answer[2] == chosenWord[4]) {
        box2.style.backgroundColor = #C9B458;
    }
    else {
        box2.style.backgroundColor = #787C7E;
    }

    // Row 4
    if (answer[3] == chosenWord[3]) {
        box3.style.backgroundColor = #6AAA64;
    } 
    else if (answer[3] == chosenWord[0] || answer[3] == chosenWord[1] || 
        answer[3] == chosenWord[2] || answer[3] == chosenWord[4]) {
        box3.style.backgroundColor = #C9B458;
    } else {
        box3.style.backgroundColor = #787C7E;
    }

    // Row 5
    if (answer[4] == chosenWord[4]) {
        box4.style.backgroundColor = #6AAA64;
    } 
    else if (answer[4] == chosenWord[0] || answer[4] == chosenWord[1] || 
        answer[4] == chosenWord[2] || answer[4] == chosenWord[3]) {
        box4.style.backgroundColor = #C9B458;
    } 
    else {
        box4.style.backgroundColor = #787C7E;
    }

    health--;

    if (answer == chosenWord) {
        alert("Congrats! You guessed it correctly.");
        return;
    }

    if (health == 0) {
        alert(Nice try! The word was ${chosenWord}.\n\nReload the page to try again!);
    }
}
