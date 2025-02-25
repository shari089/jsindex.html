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
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log("Chosen Word: " + chosenWord);
}

function checkWord() {
    if (health <= 0) return;
    
    health--; 
    let rowIndex = 5 - health - 1; 

    let answer = prompt("Enter a word: ").toUpperCase();

    if (answer.length !== 5) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    let boxes = [];
    for (let i = 0; i < 5; i++) {
        boxes.push(document.getElementById(`r-${rowIndex}-${i}`));
        boxes[i].innerText = answer[i];
    }

    const animation_duration = 500;

    for (let i = 0; i < 5; i++) {
        if (answer[i] === chosenWord[i]) {
            boxes[i].style.backgroundColor = "#6AAA64"; 
        } else if (chosenWord.includes(answer[i])) {
            boxes[i].style.backgroundColor = "#C9B458"; 
        } else {
            boxes[i].style.backgroundColor = "#787C7E"; 
        }

        boxes.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    if (answer === chosenWord) {
        alert("Congrats! You guessed it correctly.");
        return;
    }

    if (health === 0) {
        alert(`Nice try! The word was ${chosenWord}.\n\nReload the page to try again!`);
    }
}
