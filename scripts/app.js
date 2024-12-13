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
const API_BASE_URL = "https://api.esv.org/v3/passage/text/";
const DEFAULT_TRANSLATION = "ESV"; // Currently only ESV is supported
const API_KEY = "627fcad2f869abd15c665a6db9003912e36a1d85"; // Replace with your ESV API key

/**
 * Fetch Bible verse(s) using the ESV API.
 * 
 * @param {string} verseInput - The passage(s) to query (e.g., "John 3:16" or "John 3:16-18").
 * @param {string} [translation=DEFAULT_TRANSLATION] - The Bible translation (currently only ESV).
 * @returns {Promise<string|null>} The formatted passage text or null on failure.
 */
async function fetchBibleVerse(verseInput, translation = DEFAULT_TRANSLATION) {
  if (translation !== "ESV") {
    console.error(`Translation ${translation} is not supported yet.`);
    return null;
  }

  try {
    const url = `${API_BASE_URL}?q=${encodeURIComponent(verseInput)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Token ${API_KEY}`, // Pass API key in the Authorization header
      },
    });

    if (!response.ok) {
      console.error("Error fetching Bible verse:", response.statusText);
      return null;
    }

    const data = await response.json();

    // Extract and return passage text
    if (data.passages && data.passages.length > 0) {
      return data.passages.join("\n"); // Combine multiple passages if provided
    } else {
      console.error("No passages found for the query.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching Bible verse:", error);
    return null;
  }
}

/**
 * Event listener for the search form.
 */
document.getElementById("search-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const verseInput = document.getElementById("verse-input").value.trim();
  const verseDisplay = document.getElementById("verse-display");

  if (!verseInput) {
    verseDisplay.textContent = "Please enter a valid Bible verse.";
    return;
  }

  // Fetch Bible verse
  const verseText = await fetchBibleVerse(verseInput);

  if (verseText) {
    verseDisplay.textContent = verseText;
  } else {
    verseDisplay.textContent = "Error fetching verse. Please try again.";
  }
});