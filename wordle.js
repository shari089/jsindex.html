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

    let rowIndex = 5 - health;  
    health--; 

    let answer = prompt("Enter a word: ").toUpperCase();

    if (answer.length !== 5) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    // Get each box manually (since loops aren't allowed)
    let box0 = document.getElementById(`r-${rowIndex}-0`);
    let box1 = document.getElementById(`r-${rowIndex}-1`);
    let box2 = document.getElementById(`r-${rowIndex}-2`);
    let box3 = document.getElementById(`r-${rowIndex}-3`);
    let box4 = document.getElementById(`r-${rowIndex}-4`);

    // Fill in the boxes with the guessed word
    box0.innerText = answer[0];
    box1.innerText = answer[1];
    box2.innerText = answer[2];
    box3.innerText = answer[3];
    box4.innerText = answer[4];

    // Set colors based on correctness
    setBoxColor(box0, answer[0], 0);
    setBoxColor(box1, answer[1], 1);
    setBoxColor(box2, answer[2], 2);
    setBoxColor(box3, answer[3], 3);
    setBoxColor(box4, answer[4], 4);

    // Check if player won
    if (answer === chosenWord) {
        alert("Congrats! You guessed it correctly.");
        return;
    }

    // Check if game over
    if (health === 0) {
        alert(`Nice try! The word was ${chosenWord}.\n\nReload the page to try again!`);
    }
}

// Helper function to set box colors based on correctness
function setBoxColor(box, letter, index) {
    const animation_duration = 500;

    if (letter === chosenWord[index]) {
        box.style.backgroundColor = "#6AAA64";  // Green (Correct letter, correct position)
    } else if (chosenWord.includes(letter)) {
        box.style.backgroundColor = "#C9B458";  // Yellow (Correct letter, wrong position)
    } else {
        box.style.backgroundColor = "#787C7E";  // Gray (Wrong letter)
    }

    // Add animation
    box.classList.add('animated');
    box.style.animationDelay = `${(index * animation_duration) / 2}ms`;
}
