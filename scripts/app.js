// Generate navigation bar (at top of page)

// To add more pages, create a new HTML file in the root directory;
// then add the new page to the 'pages' array below;
// the navigation bar and site directory will automatically update.
const pages = [
    { name: "Home", url: "index.html" },
    // { name: "About", url: "about.html" },
    { name: "Contact", url: "contact.html" },
    { name: "Passage Search", url: "bible.html" },
    { name: "Bible Memory", url: "bible-memory.html" },
    { name: "Wikipedia", url: "wikipedia.html" },
    { name: "Books", url: "books.html" },
    { name: "Medicine", url: "medicine.html" },
    { name: "Writing", url: "writing.html" },
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