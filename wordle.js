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
    console.log("Chosen Word: " + chosenWord);
    alert(chosenWord);
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

    const animation_duration = 500;

    // Row 1
    if (answer[0] == chosenWord[0]) {
        box0.style.backgroundColor = "#6AAA64"; // Green
    } 
    else if (chosenWord.includes(answer[0])) {
        box0.style.backgroundColor = "#C9B458"; // Yellow
    } 
    else {
        box0.style.backgroundColor = "#787C7E"; // Gray
    }
    box0.classList.add('animated');
    box0.style.animationDelay = `${0 * animation_duration / 2}ms`;

    // Row 2
    if (answer[1] == chosenWord[1]) {
        box1.style.backgroundColor = "#6AAA64";
    } 
    else if (chosenWord.includes(answer[1])) {
        box1.style.backgroundColor = "#C9B458";
    } 
    else {
        box1.style.backgroundColor = "#787C7E";
    }
    box1.classList.add('animated');
    box1.style.animationDelay = `${1 * animation_duration / 2}ms`;

    // Row 3
    if (answer[2] == chosenWord[2]) {
        box2.style.backgroundColor = "#6AAA64";
    } 
    else if (chosenWord.includes(answer[2])) {
        box2.style.backgroundColor = "#C9B458";
    } 
    else {
        box2.style.backgroundColor = "#787C7E";
    }
    box2.classList.add('animated');
    box2.style.animationDelay = `${2 * animation_duration / 2}ms`;

    // Row 4
    if (answer[3] == chosenWord[3]) {
        box3.style.backgroundColor = "#6AAA64";
    } 
    else if (chosenWord.includes(answer[3])) {
        box3.style.backgroundColor = "#C9B458";
    } 
    else {
        box3.style.backgroundColor = "#787C7E";
    }
    box3.classList.add('animated');
    box3.style.animationDelay = `${3 * animation_duration / 2}ms`;

    // Row 5
    if (answer[4] == chosenWord[4]) {
        box4.style.backgroundColor = "#6AAA64";
    } 
    else if (chosenWord.includes(answer[4])) {
        box4.style.backgroundColor = "#C9B458";
    } 
    else {
        box4.style.backgroundColor = "#787C7E";
    }
    box4.classList.add('animated');
    box4.style.animationDelay = `${4 * animation_duration / 2}ms`;

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
