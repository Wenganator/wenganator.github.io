// Central list of pages

// To add more pages, create a new HTML file in the root directory;
// then add the new page to the 'pages' array below;
// the navigation bar and site directory will automatically update.
const pages = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "about.html" },
    { name: "Contact", url: "contact.html" },
    { name: "Bible", url: "bible.html"},
    // Add more pages here
  ];
  
  // Generate Navigation Menu
  const navbar = document.getElementById('navbar');
  pages.forEach(page => {
    const link = document.createElement('a');
    link.href = page.url;
    link.textContent = page.name;
    navbar.appendChild(link);
  });
  
  // Generate Site Directory
  const siteDirectory = document.getElementById('site-directory');
  const directoryList = document.createElement('ul');
  
  pages.forEach(page => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = page.url;
    link.textContent = page.name;
    listItem.appendChild(link);
    directoryList.appendChild(listItem);
  });
  
  siteDirectory.appendChild(directoryList);





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
  
    if (!verseText) {
      verseDisplay.textContent = "Verse not found. Please try again.";
      return;
    }
  
    // Process the verse text into the hover effect format.
    const formattedText = formatVerseText(verseText);
  
    // Display the processed text.
    verseDisplay.innerHTML = formattedText;
  });
  
  // Function to fetch a Bible verse (replace with actual API or static data)
  async function fetchBibleVerse(passage, translsation = "kjv") {
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
  function formatVerseText(text) {
    return text
      .split(" ")
      .map(word => {
        const firstLetter = word.charAt(0);
        const remainingLetters = word.slice(1);
        return `
          <span class="hidden-word">
            <span class="first-letter">${firstLetter}</span>
            <span class="full-word">${remainingLetters}</span>
          </span>
        `;
      })
      .join(" ");
  }