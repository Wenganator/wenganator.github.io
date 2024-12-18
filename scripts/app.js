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

