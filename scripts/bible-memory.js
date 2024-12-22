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