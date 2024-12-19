// JavaScript for bible.html

// Bible verse search form (bible.html)
// scripts/bible.js
document.getElementById("search-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const verseInput = document.getElementById("verse-input").value.trim();
    const verseDisplay = document.getElementById("verse-display");
  
    if (!verseInput) {
      verseDisplay.textContent = "Please enter a valid Bible verse.";
      return;
    }
  
    // Fetch the Bible verse using an API (like Bible API) or a static local JSON file.
    const verseText = await fetchBibleVerse(verseInput);
  
    // if (!verseText) {
    //   verseDisplay.textContent = "Verse not found. Please try again.";
    //   return;
    // }
  
    // Process the verse text into the hover effect format.
    const formattedText = formatVerseText(verseText);
  
    // Display the processed text.
    verseDisplay.innerHTML = formattedText;
  });
  
  // Function to fetch a Bible verse (replace with actual API or static data)
  async function fetchBibleVerse(passage, translation = "kjv") {
    const display = document.getElementById("verse-display");
  
    if (!passage) {
      display.textContent = "Please enter a valid passage.";
      return;
    }
  
    try {
      // Fetch the passage from the Bible API
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(passage)}?translation=${translation}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
  
      // Check if a valid passage is returned
      if (data.text) {
        display.textContent = data.text.trim();
      } else {
        display.textContent = "Error: Passage not found.";
      }
    } catch (error) {
      display.textContent = `Error fetching verse: ${error.message}`;
    }
  }


  // Function to format verse text
//   function formatVerseText(text) {
//     return text
//       .split(" ")
//       .map(word => {
//         const firstLetter = word.charAt(0);
//         const remainingLetters = word.slice(1);
//         return `
//           <span class="hidden-word">
//             <span class="first-letter">${firstLetter}</span>
//             <span class="full-word">${remainingLetters}</span>
//           </span>
//         `;
//       })
//       .join(" ");
//   }

  function formatVerseText(text) {
    const container = document.createElement("div"); // Create a container for the verse text
  
    text.split(" ").forEach(word => {
      const firstLetter = word.charAt(0); // Extract the first letter
      const remainingLetters = word.slice(1); // Extract the rest of the word
  
      // Create the wrapper for each word
      const wordSpan = document.createElement("span");
      wordSpan.classList.add("hidden-word");
  
      // Create the span for the first letter
      const firstLetterSpan = document.createElement("span");
      firstLetterSpan.classList.add("first-letter");
      firstLetterSpan.textContent = firstLetter;
  
      // Create the span for the remaining letters
      const fullWordSpan = document.createElement("span");
      fullWordSpan.classList.add("full-word");
      fullWordSpan.textContent = remainingLetters;
  
      // Append the first letter and full word to the word span
      wordSpan.appendChild(firstLetterSpan);
      wordSpan.appendChild(fullWordSpan);
  
      // Append the word span to the container
      container.appendChild(wordSpan);
  
      // Add a space after each word
      container.appendChild(document.createTextNode(" "));
    });
  
    return container; // Return the container with formatted text
  }
  




  // Handle form submission
    function handleSearch(event) {
        event.preventDefault();
        const passage = document.getElementById("verse-input").value;
        const translation = document.getElementById("translation-select").value;
        fetchBibleVerse(passage, translation);
    }  