let fullText = ""; // Variable to store the full text of the passage

// Function to handle the search logic
async function searchPassage() {
    const translation = document.getElementById("translation").value; // Get selected translation
    const book = document.getElementById("book").value; // Get selected book
    const chapter = document.getElementById("chapter").value; // Get chapter number
    const verseStart = document.getElementById("verse-start").value; // Get starting verse
    const verseEnd = document.getElementById("verse-end").value; // Get ending verse (optional)

    if (!chapter || !verseStart) {
        alert("Please enter both chapter and starting verse.");
        return;
    }

    try {
        // Construct the file path dynamically based on the input
        const response = await fetch(`./assets/json/bible/${getTestament(book)}/${book}/${translation}.json`);
        const data = await response.json(); // Parse the JSON data

        // Adjust for NASB uppercase book names
        const normalizedBookName = translation === "NASB" ? book.toUpperCase() : book;

        // Find the specific chapter data
        const chapterData = data.text.find(
            ch => ch.name === `${normalizedBookName} ${chapter}`
        );

        if (!chapterData) {
            throw new Error("Passage not found."); // Handle invalid passage
        }

        let verses = chapterData.text; // Extract the verses

        // Combine lines for KJV verses based on the "ID" field
        if (translation === "KJV" || "NASB") {
            const combinedVerses = {};
            verses.forEach(line => {
                const id = line.ID;
                if (!combinedVerses[id]) {
                    combinedVerses[id] = line.text;
                } else {
                    combinedVerses[id] += " " + line.text;
                }
            });
            verses = Object.values(combinedVerses).map((text, index) => ({
                text,
                verse: index + 1,
            }));
        }

        // Filter verses based on the range provided
        const startIndex = parseInt(verseStart) - 1;
        const endIndex = verseEnd ? parseInt(verseEnd) : startIndex + 1;
        verses = verses.slice(startIndex, endIndex);

        // Store the full text for later use
        fullText = verses.map(v => v.text).join(" ");

        // Display the passage dynamically with first letters visible
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = verses
            .map(v =>
                v.text
                    .split(" ")
                    .map(
                        word =>
                            word
                                ? `<span>${word[0]}<span class='hidden-part'>${word.slice(
                                    1
                                )}</span></span>`
                                : "" // Ignore empty strings
                    )
                    .join(" ")
            )
            .join("\n");


            
        // After the passage is processed, initialize the progressive reveal function
        initializeProgressiveReveal(fullText);
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Function to determine the testament based on the book name
function getTestament(book) {
    const oldTestament = [
        "Genesis",
        "Exodus",
        "Leviticus",
        "Numbers",
        "Deuteronomy",
        "Joshua",
        "Judges",
        "Ruth",
        "1 Samuel",
        "2 Samuel",
        "1 Kings",
        "2 Kings",
        "1 Chronicles",
        "2 Chronicles",
        "Ezra",
        "Nehemiah",
        "Esther",
        "Job",
        "Psalms",
        "Proverbs",
        "Ecclesiastes",
        "Song of Solomon",
        "Isaiah",
        "Jeremiah",
        "Lamentations",
        "Ezekiel",
        "Daniel",
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah",
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah",
        "Haggai",
        "Zechariah",
        "Malachi",
    ];
    
    // Return "OT" if the book is in the Old Testament list, otherwise "NT"
    return oldTestament.includes(book) ? "OT" : "NT";
}

// Function to reveal the full text of the passage
function revealFullText() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = fullText;
}


// Function to handle custom user-input text
function processCustomText() {
    const customText = document.getElementById("custom-text").value.trim(); // Get the custom input text

    if (!customText) {
        alert("Please enter some text to process.");
        return;
    }

    // Format the custom text to show only the first letters with hover functionality
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = customText
        .split("\n") // Handle multiple lines
        .map(line =>
            line
                .split(" ") // Split line into words
                .map(
                    word =>
                        word
                            ? `<span>${word[0]}<span class='hidden-part'>${word.slice(
                                  1
                              )}</span></span>`
                            : "" // Ignore empty strings
                )
                .join(" ") // Join words back together
        )
        .join("\n"); // Add line breaks between lines

    // Store the full custom text for "reveal full text" functionality
    fullText = customText;
}




// Functions below for Progressive Reveal section

let words = []; // Array to hold the individual words
let currentWordIndex = 0; // Index to track the current word

// Initialize the progressive reveal section
function initializeProgressiveReveal(text) {
    fullText = text; // Update the fullText with the given text
    words = fullText.split(" "); // Split the text into words
    currentWordIndex = 0; // Reset the index

    const revealOutputDiv = document.getElementById("progressive-reveal-output");
    revealOutputDiv.innerHTML = ""; // Clear any existing words
}

// Reveal the next word
function revealNextWord() {
    if (currentWordIndex < words.length) {
        const revealOutputDiv = document.getElementById("progressive-reveal-output");
        const span = document.createElement("span");
        span.textContent = words[currentWordIndex] + " ";
        revealOutputDiv.appendChild(span);
        currentWordIndex++;
    }
}

// Hide the most recently revealed word
function revealPreviousWord() {
    if (currentWordIndex > 0) {
        const revealOutputDiv = document.getElementById("progressive-reveal-output");
        revealOutputDiv.removeChild(revealOutputDiv.lastChild); // Remove the last span
        currentWordIndex--;
    }
}

// Reset the progressive reveal section
function resetProgressiveReveal() {
    initializeProgressiveReveal(fullText); // Re-initialize with the current text
}

// Keydown event listener for right arrow (next), left arrow (back), and R (reset)
// Could consider adding space bar as another trigger for next, but then user wouldn't be able to use space bar when typing into custom text section
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        event.preventDefault(); // Prevent default scrolling behavior
        revealNextWord();
    } else if (event.code === "ArrowLeft") {
        revealPreviousWord();
    } else if (event.code === "KeyR") {
        resetProgressiveReveal();
    }
});


// Custom text functionality - integrating custom text input into progressive reveal function
function useCustomText() {
    const customTextInput = document.getElementById("custom-text").value.trim();

    if (customTextInput) {
        fullText = customTextInput; // Update the full text with custom input
        document.getElementById("custom-output").textContent = fullText; // Update custom output

        currentWordIndex = 0; // Reset the progressive reveal index
        document.getElementById("progressive-reveal-output").textContent = ""; // Clear the progressive reveal area
        initializeProgressiveReveal(fullText); // Initialize progressive reveal with custom text
    }
}