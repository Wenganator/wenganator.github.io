window.addEventListener('DOMContentLoaded', event => {

    // Define function for loading centralized HTML code into current HTML page
    async function loadComponent(id, url) {
        const response = await fetch(url);
        const text = await response.text();
        document.getElementById(id).innerHTML = text;


        // Dynamically generate navigation bar (at top of page)
        // To add more pages, create a new HTML file in the root directory; then add the new page to the 'pages' array below. The navigation bar will automatically update.
        const pages = [
            // { name: "Home", url: "index.html" },
            // { name: "About", url: "about.html" },
            { name: "Contact", url: "contact.html" },
            { name: "Passage Search", url: "bible-search.html" },
            { name: "Bible Memory", url: "bible-memory.html" },
            { name: "Wikipedia", url: "wikipedia.html" },
            { name: "Books", url: "books.html" },
            { name: "Medicine", url: "medicine.html" },
            { name: "Music", url: "music.html"},
            { name: "Writing", url: "writing.html" },
            // Add more pages here
        ];
        
        // Generate navbar if loading the header code
        // The navbar generation logic is located inside the loadComponent() function so that it runs after the header.html content is loaded into the DOM
        if (id == 'header') {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                pages.forEach(page => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('nav-item');
                    const link = document.createElement('a');
                    link.classList.add('nav-link');
                    link.href = page.url;
                    link.textContent = page.name;
                    listItem.appendChild(link);
                    navbar.appendChild(listItem);
                });
            }
        }
    }

    // Load centralized header (header.html) and footer (footer.html) into current HTML page
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');

});




// TO-DO
// Search bar

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const keyword = document.getElementById('searchInput').value.trim();
        if (keyword) {
            window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
        } else {
            alert('Please enter a search term.');
        }
    });
});