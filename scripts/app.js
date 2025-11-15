window.addEventListener('DOMContentLoaded', event => {

    // Define function for loading centralized HTML code into current HTML page
    async function loadComponent(id, url) {
        const response = await fetch(url);
        const text = await response.text();
        document.getElementById(id).innerHTML = text;


        // Dynamically generate navigation bar (at top of page)
        // To add more pages, create a new HTML file in the root directory; then add the new page to the 'pages' array below. The navigation bar will automatically update.
        // Update search.html with new pages
        const pages = [
            // { name: "Home", url: "/index.html" },
            // { name: "About", url: "/about.html" },
            { name: "Bible", group: true, children: [
                { name: "Passage Search", url: "/bible-search.html" },
                { name: "Memory Tools", url: "/bible-memory.html" },
                { name: "Verse Vault", url: "/verse-vault.html" },
                { name: "Bible Board", url: "/bible-board.html" },
            ]},
            { name: "Medicine", url: "/medicine.html" },
            { name: "Music", url: "/music.html" },
            { name: "Wikipedia", url: "/wikipedia.html" },
            { name: "Books", url: "/books.html" },
            { name: "Library", url: "/library.html" },
            { name: "Blog", url: "/blog.html" },
            { name: "Gallery", url: "/gallery.html" },
            { name: "Games", group: true, children: [
                { name: "Blind Rank", url: "/blind-rank.html" },
                { name: "Chess", url: "/chess.html" },
            ]},
            { name: "Tools", group: true, children: [
                { name: "Calculators", url: "/calculators.html" },
                { name: "Clock", url: "/clock.html" },
                { name: "File Viewer", url: "/file-viewer.html" },
                { name: "Mood Palette", url: "/mood-palette.html" },
                { name: "Notes App", url: "/notes.html" },
                { name: "Price Pilot", url: "/price-pilot.html" },
                { name: "Tier List Maker", url: "/tier-list.html" },
                { name: "Word Wizard", url: "/word-wizard.html" },
            ]},
            { name: "Contact", url: "/contact.html" },
            // Add more pages here
        ];
        
        // Generate navbar if loading the header code
        // The navbar generation logic is located inside the loadComponent() function so that it runs after the header.html content is loaded into the DOM
        if (id == 'header') {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                pages.forEach(page => {
                    const listItem = document.createElement('li');
                    if (page.group && page.children) {
                        // Create a dropdown for grouped tabs
                        listItem.classList.add('nav-item', 'dropdown');
                        const link = document.createElement('a');
                        link.classList.add('nav-link', 'dropdown-toggle');
                        link.href = "#";
                        link.setAttribute('data-bs-toggle', 'dropdown');
                        link.setAttribute('aria-expanded', 'false');
                        link.textContent = page.name;
                        listItem.appendChild(link);
        
                        // Create the dropdown menu
                        const dropdownMenu = document.createElement('ul');
                        dropdownMenu.classList.add('dropdown-menu');
                        page.children.forEach(child => {
                            const dropdownItem = document.createElement('li');
                            const childLink = document.createElement('a');
                            childLink.classList.add('dropdown-item');
                            childLink.href = child.url;
                            childLink.textContent = child.name;
                            dropdownItem.appendChild(childLink);
                            dropdownMenu.appendChild(dropdownItem);
                        });
                        listItem.appendChild(dropdownMenu);
                    } else {
                        // Create a regular nav item for non-grouped tabs
                        listItem.classList.add('nav-item');
                        const link = document.createElement('a');
                        link.classList.add('nav-link');
                        link.href = page.url;
                        link.textContent = page.name;
                        listItem.appendChild(link);
                    }
                    navbar.appendChild(listItem);
                });
            }
        }        
    }

    // Load centralized header (header.html) and footer (footer.html) into current HTML page
    loadComponent('header', '/header.html').then(() => {
        // Add hover functionality to dropdowns after the header is dynamically loaded
        document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                const bootstrapDropdown = bootstrap.Dropdown.getOrCreateInstance(dropdownToggle);
                bootstrapDropdown.show();
            });

            dropdown.addEventListener('mouseleave', () => {
                const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                const bootstrapDropdown = bootstrap.Dropdown.getOrCreateInstance(dropdownToggle);
                bootstrapDropdown.hide();
            });
        });
    });

    // Load footer
    loadComponent('footer', '/footer.html');
});