// Writing data
const writings = [
    {id: 101, title: "The Dead", author: "James Joyce", year: 1914, category: "Prose", image: "/assets/images/writing/dubliners.webp", url: "/writing/prose/the-dead.html", tags: ["Irish", "Modernist"]},
    {id: 102, title: "Bullet in the Brain", author: "Tobias Wolff", year: 1995, category: "Prose", image: "/assets/images/writing/new-yorker-19950925.webp", url: "/writing/prose/bullet-in-the-brain.html", tags: ["American", "Contemporary"]},
    {id: 103, title: "Trust", author: "Hernan Diaz", year: 2022, category: "Prose", image: "/assets/images/writing/trust.jpg", url: "/writing/prose/trust.html", tags: ["American", "Contemporary", "Fiction", "Finance"]},
    {id: 104, title: "Things in Nature Merely Grow", author: "Yiyun Li", year: 2025, category: "Prose", image: "/assets/images/writing/things-in-nature-merely-grow.jpg", url: "/writing/prose/things-in-nature-merely-grow.html", tags: ["Asian American", "Chinese American", "Contemporary", "Loss", "Memoir", "Nonfiction"]},
    
    {id: 201, title: "Although the wind ...", author: "Izumi Shikibu", year: 1000, category: "Poetry", image: "/assets/images/writing/although-the-wind.png", url: "/writing/poetry/although-the-wind.html", tags: ["Japanese", "Medieval"]},
    {id: 202, title: "The Phoenix and the Turtle", author: "William Shakespeare", year: 1601, category: "Poetry", image: "/assets/images/writing/the-phoenix-and-the-turtle.webp", url: "/writing/poetry/the-phoenix-and-the-turtle.html", tags: ["English", "Renaissance"]},
    {id: 203, title: "Sonnet 19", author: "William Shakespeare", year: 1609, category: "Poetry", image: "/assets/images/writing/sonnet-19.webp", url: "/writing/poetry/sonnet-19-devouring-time-blunt-thou-the-lions-paws.html", tags: ["English", "Renaissance", "Sonnet"]},
    {id: 204, title: "Sonnet 29", author: "William Shakespeare", year: 1609, category: "Poetry", image: "/assets/images/writing/sonnet-29.png", url: "/writing/poetry/sonnet-29-when-in-disgrace-with-fortune-and-mens-eyes.html", tags: ["English", "Renaissance","Sonnet"]},
    {id: 205, title: "On My First Son", author: "Ben Jonson", year: 1616, category: "Poetry", image: "/assets/images/writing/ben-jonson.jpg", url: "/writing/poetry/on-my-first-son.html", tags: ["English", "Elegy", "Renaissance"]},
    {id: 206, title: "The Flea", author: "John Donne", year: 1633, category: "Poetry", image: "/assets/images/writing/john-donne.jpg", url: "/writing/poetry/the-flea.html", tags: ["English", "Metaphysical"]},
    {id: 207, title: "When I Consider How My Light Is Spent", author: "John Milton", year: 1673, category: "Poetry", image: "/assets/images/writing/john-milton.jpg", url: "/writing/poetry/when-i-consider-how-my-light-is-spent.html", tags: ["English", "Sonnet"]},
    {id: 208, title: "Elegy Written in a Country Churchyard", author: "Thomas Gray", year: 1751, category: "Poetry", image: "/assets/images/writing/elegy-written-in-a-country-churchyard-2.png", url: "/writing/poetry/elegy-written-in-a-country-churchyard.html", tags: ["English", "Elegy"]},
    {id: 209, title: "The Tyger", author: "William Blake", year: 1794, category: "Poetry", image: "/assets/images/writing/the-tyger.webp", url: "/writing/poetry/the-tyger.html", tags: ["English", "Romantic"]},
    {id: 210, title: "Lines Composed a Few Miles above Tintern Abbey", author: "William Wordsworth", year: 1798, category: "Poetry", image: "/assets/images/writing/tintern-abbey.png", url: "/writing/poetry/lines-composed-a-few-miles-above-tintern-abbey.html", tags: ["English", "Romantic"]},
    {id: 211, title: "I Wandered Lonely as a Cloud", author: "William Wordsworth", year: 1815, category: "Poetry", image: "/assets/images/writing/i-wandered-lonely-as-a-cloud-2.png", url: "/writing/poetry/i-wandered-lonely-as-a-cloud.html", tags: ["English", "Romantic"]},
    {id: 212, title: "On First Looking into Chapman's Homer", author: "John Keats", year: 1816, category: "Poetry", image: "/assets/images/writing/on-first-looking-into-chapmans-homer.png", url: "/writing/poetry/on-first-looking-into-chapmans-homer.html", tags: ["English", "Romantic", "Sonnet"]},
    {id: 213, title: "Ozymandias", author: "Percy Bysshe Shelley", year: 1818, category: "Poetry", image: "/assets/images/writing/ozymandias.jpg", url: "/writing/poetry/ozymandias.html", tags: ["English", "Romantic"]},
    {id: 214, title: "Ode on a Grecian Urn", author: "John Keats", year: 1820, category: "Poetry", image: "/assets/images/writing/ode-on-a-grecian-urn.png", url: "/writing/poetry/ode-on-a-grecian-urn.html", tags: ["English", "Ode", "Romantic"]},
    {id: 215, title: "Bright Star", author: "John Keats", year: 1838, category: "Poetry", image: "/assets/images/writing/john-keats.jpg", url: "/writing/poetry/bright-star.html", tags: ["English", "Romantic", "Sonnet"]},
    {id: 216, title: "Ulysses", author: "Alfred, Lord Tennyson", year: 1842, category: "Poetry", image: "/assets/images/writing/ulysses.png", url: "/writing/poetry/ulysses.html", tags: ["English", "Victorian"]},
    {id: 217, title: "Tears, Idle Tears", author: "Alfred, Lord Tennyson", year: 1847, category: "Poetry", image: "/assets/images/writing/tears-idle-tears.jpg", url: "/writing/poetry/tears-idle-tears.html", tags: ["English", "Victorian"]},
    {id: 218, title: "The Eagle", author: "Alfred, Lord Tennyson", year: 1851, category: "Poetry", image: "/assets/images/writing/the-eagle.webp", url: "/writing/poetry/the-eagle.html", tags: ["English", "Victorian"]},
    {id: 219, title: "When Lilacs Last in the Dooryard Bloom’d", author: "Walt Whitman", year: 1865, category: "Poetry", image: "/assets/images/writing/walt-whitman.jpg", url: "/writing/poetry/when-lilacs-last-in-the-dooryard-bloomd.html", tags: ["American", "Elegy", "Free Verse"]},
    {id: 220, title: "\"I loved you first: but afterwards your love\"", author: "Christina Rossetti", year: 1881, category: "Poetry", image: "/assets/images/writing/i-loved-you-first.webp", url: "/writing/poetry/i-loved-you-first-but-afterwards-your-love.html", tags: ["English", "Romantic", "Sonnet"]},
    {id: 221, title: "Because I could not stop for Death –", author: "Emily Dickinson", year: 1890, category: "Poetry", image: "/assets/images/writing/emily-dickinson.png", url: "/writing/poetry/because-i-could-not-stop-for-death.html", tags: ["American"]},
    {id: 222, title: "Song of Myself", author: "Walt Whitman", year: 1892, category: "Poetry", image: "/assets/images/writing/song-of-myself-2.png", url: "/writing/poetry/song-of-myself.html", tags: ["American", "Epic", "Free Verse"]},
    {id: 223, title: "Luke Havergal", author: "Edwin Arlington Robinson", year: 1897, category: "Poetry", image: "/assets/images/writing/luke-havergal.png", url: "/writing/poetry/luke-havergal.html", tags: ["American"]},
    {id: 224, title: "No Second Troy", author: "William Butler Yeats", year: 1910, category: "Poetry", image: "/assets/images/writing/no-second-troy.webp", url: "/writing/poetry/no-second-troy.html", tags: ["Irish", "Modernist"]},
    {id: 225, title: "The Love Song of J. Alfred Prufrock", author: "T. S. Eliot", year: 1915, category: "Poetry", image: "/assets/images/writing/the-love-song-of-j-alfred-prufrock.webp", url: "/writing/poetry/the-love-song-of-j-alfred-prufrock.html", tags: ["American", "Modernist"]},
    {id: 226, title: "The Road Not Taken", author: "Robert Frost", year: 1915, category: "Poetry", image: "/assets/images/writing/the-road-not-taken-2.png", url: "/writing/poetry/the-road-not-taken.html", tags: ["American"]},
    {id: 227, title: "The Windhover", author: "Gerard Manley Hopkins", year: 1918, category: "Poetry", image: "/assets/images/writing/the-windhover.webp", url: "/writing/poetry/the-windhover.html", tags: ["English", "Victorian", "Religious"]},
    {id: 228, title: "Carrion Comfort", author: "Gerard Manley Hopkins", year: 1918, category: "Poetry", image: "/assets/images/writing/carrion-comfort.webp", url: "/writing/poetry/carrion-comfort.html", tags: ["English", "Victorian", "Religious"]},
    {id: 229, title: "The Second Coming", author: "William Butler Yeats", year: 1920, category: "Poetry", image: "/assets/images/writing/the-second-coming-2.png", url: "/writing/poetry/the-second-coming.html", tags: ["Irish", "Modernist"]},
    {id: 230, title: "Stopping by Woods on a Snowy Evening", author: "Robert Frost", year: 1923, category: "Poetry", image: "/assets/images/writing/stopping-by-woods-on-a-snowy-evening.webp", url: "/writing/poetry/stopping-by-woods-on-a-snowy-evening.html", tags: ["American"]},
    {id: 231, title: "This Is Just To Say", author: "William Carlos Williams", year: 1934, category: "Poetry", image: "/assets/images/writing/this-is-just-to-say.webp", url: "/writing/poetry/this-is-just-to-say.html", tags: ["American", "Modernist"]},
    {id: 232, title: "Do not go gentle into that good night", author: "Dylan Thomas", year: 1951, category: "Poetry", image: "/assets/images/writing/dylan-thomas.jpg", url: "/writing/poetry/do-not-go-gentle-into-that-good-night.html", tags: ["Welsh", "Villanelle"]},
    {id: 233, title: "Blackberry-Picking", author: "Seamus Heaney", year: 1966, category: "Poetry", image: "/assets/images/writing/blackberry-picking.webp", url: "/writing/poetry/blackberry-picking.html", tags: ["Irish"]},
    {id: 234, title: "Eating Alone", author: "Li-Young Lee", year: 1986, category: "Poetry", image: "/assets/images/writing/eating-alone.png", url: "/writing/poetry/eating-alone.html", tags: ["Asian American", "Chinese American"]},
    {id: 235, title: "Missed Time", author: "Ha Jin", year: 2000, category: "Poetry", image: "/assets/images/writing/missed-time.webp", url: "/writing/poetry/missed-time.html", tags: ["Asian American", "Chinese American", "Misty Poets"]},
    {id: 236, title: "Ramallah", author: "Bei Dao", year: 2006, category: "Poetry", image: "/assets/images/writing/bei-dao.webp", url: "/writing/poetry/ramallah.html", tags: ["Asian American", "Chinese American", "Contemporary", "Misty Poets"]},
    {id: 237, title: "Triage of Two Cultures", author: "Kaveh Danesh", year: 2019, category: "Poetry", image: "/assets/images/writing/triage-of-two-cultures.webp", url: "/writing/poetry/triage-of-two-cultures.html", tags: ["Iranian American", "Contemporary", "Medicine"]},
    {id: 238, title: "To Make a Living", author: "Michelle Tong", year: 2020, category: "Poetry", image: "/assets/images/writing/to-make-a-living.webp", url: "/writing/poetry/to-make-a-living.html", tags: ["Asian American", "Chinese American", "Contemporary", "Medicine"]},
    {id: 239, title: "The Child Who Follows the Child Who Dies", author: "Matt Poindexter", year: 2024, category: "Poetry", image: "/assets/images/writing/the-child-who-follows-the-child-who-dies.png", url: "/writing/poetry/the-child-who-follows-the-child-who-dies.html", tags: ["American", "Contemporary", "Loss"]},
    
    {id: 301, title: "Be Thou My Vision", author: "Author Unknown", year: 1912, category: "Song", image: "/assets/images/writing/be-thou-my-vision.webp", url: "/writing/song/be-thou-my-vision.html", tags: ["Irish", "Hymn", "Lorica"]},
    {id: 302, title: "Awake, my soul, and with the sun", author: "Thomas Ken", year: 1674, category: "Song", image: "/assets/images/writing/awake-my-soul-and-with-the-sun.webp", url: "/writing/song/awake-my-soul-and-with-the-sun.html", tags: ["English", "Anglican", "Doxology", "Hymn", "Morning Hymn"]},
    {id: 303, title: "For Christmas Day", author: "Charles Wesley", year: 1739, category: "Song", image: "/assets/images/writing/for-christmas-day-3.png", url: "/writing/song/for-christmas-day.html", tags: ["English", "Anglican", "Christmas", "Christmas Carol", "Hymn", "Methodist"]},
    {id: 401, title: "Strasbourg Liturgy", author: "John Calvin & Martin Bucer", year: 1545, category: "Theology", image: "/assets/images/writing/strasbourg-liturgy.png", url: "/writing/theology/strasbourg-liturgy.html", tags: ["French", "Calvinist", "Liturgy", "Reformed"]},
    {id: 402, title: "Westminster Shorter Catechism", author: "Westminster Assembly", year: 1647, category: "Theology", image: "/assets/images/writing/westminster-abbey-john-coney-1814.jpg", url: "/writing/theology/westminster-shorter-catechism.html", tags: ["English", "Catechism", "Reformed"]},
    {id: 403, title: "An Unpublished Essay on the Trinity", author: "Jonathan Edwards", year: 1903, category: "Theology", image: "/assets/images/writing/sun-rays-rainbow.webp", url: "/writing/theology/an-unpublished-essay-on-the-trinity.html", tags: ["American", "Reformed", "Trinity", "Unpublished"]},
    {id: 404, title: "The Valley of Vision", author: "Arthur Bennett", year: 1975, category: "Theology", image: "/assets/images/writing/the-valley-of-vision.jpg", url: "/writing/theology/the-valley-of-vision.html", tags: ["English", "Prayer", "Puritan", "Reformed"]},
    
    {id: 501, title: "A (Mother)Ship", author: "JW", year: 2013, category: "Original", image: "/assets/images/writing/a-mothership.webp", url: "/writing/original/a-mothership.html", tags: ["American", "Contemporary"]},
    {id: 502, title: "Lord, Sovereign and Gracious, Eternal and Merciful", author: "JW", year: 2024, category: "Original", image: "/assets/images/writing/lord-sovereign-gracious.webp", url: "/writing/original/lord-sovereign-gracious.html", tags: ["American", "Contemporary", "Prayer", "Reformed"]},
    
    {id: 601, title: "Shakespeare's Sonnets", author: "Folger Shakespeare Library", year: 2006, category: "Other", image: "/writing/other/shakespeares-sonnets-folger/cover.jpg", url: "/writing/other/shakespeares-sonnets-folger/Son.html", tags: ["English", "Renaissance", "Sonnet"]},
    {id: 602, title: "Finding My Footing: My Unlikely Path to Becoming a Runner", author: "Cara E. Bigony", year: 2014, category: "Other", image: "/assets/images/writing/finding-my-footing.png", url: "/writing/other/finding-my-footing.html", tags: ["American", "Essay"]},
    {id: 603, title: "What Do Students at Elite Colleges Really Want?", author: "Francesca Mari", year: 2024, category: "Other", image: "/assets/images/writing/what-do-students-at-elite-colleges-really-want.webp", url: "/writing/other/what-do-students-at-elite-colleges-really-want.html", tags: ["American", "Newspaper", "NYT"]},
];

let favorites = JSON.parse(localStorage.getItem('writingFavorites') || '[]');
let readItems = JSON.parse(localStorage.getItem('writingRead') || '[]');
let darkMode = JSON.parse(localStorage.getItem('writingDarkMode') || 'false');
let activeCategories = [];
let activeTags = [];
let currentView = 'grid';
let showOnlyFavorites = false;
let showOnlyRead = false;
let showOnlyUnread = false;
let currentShareWriting = null;

// Initialize
function init() {
    renderCategoryTags();
    renderTagChips();
    renderView();
    updateStats();
    setupEventListeners();
    updateActiveFilters();
    initDarkMode();
}

// Initialize dark mode
function initDarkMode() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').textContent = '☀️';
    }
}

// Toggle dark mode
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('writingDarkMode', JSON.stringify(darkMode));
    
    const btn = document.getElementById('darkModeToggle');
    btn.textContent = darkMode ? '☀️' : '🌙';
}

// Render category filter tags
function renderCategoryTags() {
    const categories = [...new Set(writings.map(w => w.category))];
    const container = document.getElementById('categoryTags');
    container.innerHTML = categories.map(cat => 
        `<span class="tag-chip" data-category="${cat}">${cat}</span>`
    ).join('');
}

// Render tag chips
function renderTagChips() {
    const allTags = [...new Set(writings.flatMap(w => w.tags))].sort();
    const container = document.getElementById('tagChips');
    container.innerHTML = allTags.map(tag => 
        `<span class="tag-chip" data-tag="${tag}">${tag}</span>`
    ).join('');
}

// Filter and sort writings
function getFilteredWritings() {
    let filtered = writings;

    // Favorites filter
    if (showOnlyFavorites) {
        filtered = filtered.filter(w => favorites.includes(w.id));
    }

    // Read filter
    if (showOnlyRead) {
        filtered = filtered.filter(w => readItems.includes(w.id));
    }

    // Unread filter
    if (showOnlyUnread) {
        filtered = filtered.filter(w => !readItems.includes(w.id));
    }

    // Category filter
    if (activeCategories.length > 0) {
        filtered = filtered.filter(w => activeCategories.includes(w.category));
    }

    // Tag filter
    if (activeTags.length > 0) {
        filtered = filtered.filter(w => 
            activeTags.some(tag => w.tags.includes(tag))
        );
    }

    // Search filter
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(w => 
            w.title.toLowerCase().includes(searchTerm) ||
            w.author.toLowerCase().includes(searchTerm) ||
            w.year.toString().includes(searchTerm)
        );
    }

    // Sort
    const sortBy = document.getElementById('sortSelect').value;
    filtered.sort((a, b) => {
        switch(sortBy) {
            case 'title-asc': return a.title.localeCompare(b.title);
            case 'title-desc': return b.title.localeCompare(a.title);
            case 'author-asc': return a.author.localeCompare(b.author);
            case 'author-desc': return b.author.localeCompare(a.author);
            case 'year-asc': return a.year - b.year;
            case 'year-desc': return b.year - a.year;
            default: return 0;
        }
    });

    return filtered;
}

// Render current view
function renderView() {
    if (currentView === 'grid') renderWritings();
    else if (currentView === 'list') renderList();
    else if (currentView === 'timeline') renderTimeline();
}

// Render writings in grid view
function renderWritings() {
    const filtered = getFilteredWritings();
    const container = document.getElementById('gridView');
    const noResults = document.getElementById('noResults');

    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    container.innerHTML = filtered.map(w => `
        <a href="${w.url}" class="writing-card ${readItems.includes(w.id) ? 'read' : ''}" data-id="${w.id}">
            <button class="favorite-btn ${favorites.includes(w.id) ? 'active' : ''}" 
                    onclick="event.preventDefault(); event.stopPropagation(); toggleFavorite(${w.id})">
                ${favorites.includes(w.id) ? '❤️' : '🤍'}
            </button>
            <button class="share-btn" onclick="event.preventDefault(); event.stopPropagation(); openShareModal(${w.id})">
                🔗
            </button>
            <img src="${w.image}" alt="${w.title}">
            <div class="card-content">
                <div class="card-title">${w.title}</div>
                <div class="card-author">${w.author} (${w.year})</div>
                <div class="card-tags">
                    <span class="card-tag" onclick="event.preventDefault(); event.stopPropagation(); filterByCategory('${w.category}')">${w.category}</span>
                    ${w.tags.map(tag => `<span class="card-tag" onclick="event.preventDefault(); event.stopPropagation(); filterByTag('${tag}')">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');

    // Mark as read when clicking (any mouse button)
    document.querySelectorAll('.writing-card').forEach(card => {
        const id = parseInt(card.dataset.id);
        card.addEventListener('mousedown', (e) => {
            // Mark as read for left, middle, or right click
            if (e.button === 0 || e.button === 1 || e.button === 2) {
                if (!readItems.includes(id)) {
                    readItems.push(id);
                    localStorage.setItem('writingRead', JSON.stringify(readItems));
                }
            }
        });
    });
}

// Render list view
function renderList() {
    const filtered = getFilteredWritings();
    const container = document.getElementById('listView');
    const noResults = document.getElementById('noResults');

    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    container.innerHTML = filtered.map(w => `
        <a href="${w.url}" class="list-item ${readItems.includes(w.id) ? 'read' : ''}" data-id="${w.id}">
            ${readItems.includes(w.id) ? '<div class="list-item-badge">✓ Read</div>' : ''}
            <img src="${w.image}" alt="${w.title}" class="list-item-image">
            <div class="list-item-content">
                <div class="list-item-title">${w.title}</div>
                <div class="list-item-author">${w.author}</div>
                <div class="list-item-meta">
                    <span class="list-item-year">${w.year}</span>
                    <span class="list-item-category" onclick="event.preventDefault(); event.stopPropagation(); filterByCategory('${w.category}');">${w.category}</span>
                    <div class="list-item-tags">
                        ${w.tags.map(tag => `<span class="list-item-tag" onclick="event.preventDefault(); event.stopPropagation(); filterByTag('${tag}');">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="list-item-actions">
                <button class="list-item-btn favorite ${favorites.includes(w.id) ? 'active' : ''}" 
                        onclick="event.preventDefault(); event.stopPropagation(); toggleFavorite(${w.id})"
                        title="${favorites.includes(w.id) ? 'Remove from favorites' : 'Add to favorites'}">
                    ${favorites.includes(w.id) ? '❤️' : '🤍'}
                </button>
                <button class="list-item-btn" 
                        onclick="event.preventDefault(); event.stopPropagation(); openShareModal(${w.id})"
                        title="Share">
                    🔗
                </button>
            </div>
        </a>
    `).join('');

    // Mark as read when clicking (any mouse button)
    document.querySelectorAll('.list-item').forEach(item => {
        const id = parseInt(item.dataset.id);
        item.addEventListener('mousedown', (e) => {
            // Mark as read for left, middle, or right click
            if (e.button === 0 || e.button === 1 || e.button === 2) {
                if (!readItems.includes(id)) {
                    readItems.push(id);
                    localStorage.setItem('writingRead', JSON.stringify(readItems));
                }
            }
        });
    });
}

// Navigate to writing and mark as read
function navigateToWriting(id) {
    if (!readItems.includes(id)) {
        readItems.push(id);
        localStorage.setItem('writingRead', JSON.stringify(readItems));
    }
    const writing = writings.find(w => w.id === id);
    if (writing) {
        window.location.href = writing.url;
    }
}

// Filter by tag (when clicking tag in card)
function filterByTag(tag) {
    if (!activeTags.includes(tag)) {
        activeTags.push(tag);
        updateActiveFilters();
        highlightActiveChips();
        renderView();
        updateStats();
    }
}

// Filter by category (when clicking category in card)
function filterByCategory(category) {
    if (!activeCategories.includes(category)) {
        activeCategories.push(category);
        updateActiveFilters();
        highlightActiveChips();
        renderView();
        updateStats();
    }
}

// Highlight active chips
function highlightActiveChips() {
    document.querySelectorAll('#categoryTags .tag-chip').forEach(chip => {
        const category = chip.dataset.category;
        chip.classList.toggle('active', activeCategories.includes(category));
    });

    document.querySelectorAll('#tagChips .tag-chip').forEach(chip => {
        const tag = chip.dataset.tag;
        chip.classList.toggle('active', activeTags.includes(tag));
    });
}

// Update active filters display
function updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    const filters = [];

    if (showOnlyFavorites) filters.push({type: 'favorites', label: 'Favorites Only'});
    if (showOnlyRead) filters.push({type: 'read', label: 'Read Only'});
    if (showOnlyUnread) filters.push({type: 'unread', label: 'Unread Only'});
    activeCategories.forEach(cat => filters.push({type: 'category', value: cat, label: cat}));
    activeTags.forEach(tag => filters.push({type: 'tag', value: tag, label: tag}));

    if (filters.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = '<strong>Active Filters:</strong> ' + filters.map(f => 
        `<span class="filter-badge">${f.label}<span class="close" onclick="removeFilter('${f.type}', '${f.value || ''}')">×</span></span>`
    ).join('');
}

// Remove filter
function removeFilter(type, value) {
    if (type === 'favorites') showOnlyFavorites = false;
    else if (type === 'read') showOnlyRead = false;
    else if (type === 'unread') showOnlyUnread = false;
    else if (type === 'category') activeCategories = activeCategories.filter(c => c !== value);
    else if (type === 'tag') activeTags = activeTags.filter(t => t !== value);

    updateActiveFilters();
    highlightActiveChips();
    if (currentView === 'grid') renderWritings();
    else renderTimeline();
    updateStats();
}

// Clear all filters
function clearAllFilters() {
    showOnlyFavorites = false;
    showOnlyRead = false;
    showOnlyUnread = false;
    activeCategories = [];
    activeTags = [];
    document.getElementById('searchBox').value = '';
    updateActiveFilters();
    highlightActiveChips();
    renderView();
    updateStats();
}

// Render timeline view
function renderTimeline() {
    const filtered = getFilteredWritings().sort((a, b) => a.year - b.year);
    const container = document.getElementById('timelineItems');

    const itemsHtml = filtered.map(w => `
        <div class="timeline-item" onclick="navigateToWriting(${w.id})">
            <div class="timeline-year">${w.year}</div>
            <div class="timeline-title">${w.title}</div>
            <div class="timeline-author">${w.author}</div>
            ${readItems.includes(w.id) ? '<div style="color: #28a745; margin-top: 5px;">✓ Read</div>' : ''}
        </div>
    `).join('');

    container.innerHTML = itemsHtml;

    // Set the timeline line width after items are rendered
    setTimeout(() => {
        const timelineContainer = document.querySelector('.timeline-container');
        const line = document.querySelector('.timeline-line');
        if (timelineContainer && line && container.scrollWidth > 0) {
            line.style.width = container.scrollWidth + 'px';
        }
    }, 0);
}

// Toggle favorite
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('writingFavorites', JSON.stringify(favorites));
    renderWritings();
    updateStats();
}

// Show only favorites
function toggleFavoritesFilter() {
    showOnlyFavorites = !showOnlyFavorites;
    showOnlyRead = false;
    updateActiveFilters();
    if (currentView === 'grid') renderWritings();
    else renderTimeline();
    updateStats();
}

// Show only read items
function toggleReadFilter() {
    showOnlyRead = !showOnlyRead;
    showOnlyFavorites = false;
    showOnlyUnread = false;
    updateActiveFilters();
    if (currentView === 'grid') renderWritings();
    else renderTimeline();
    updateStats();
}

// Show only unread items
function toggleUnreadFilter() {
    showOnlyUnread = !showOnlyUnread;
    showOnlyFavorites = false;
    showOnlyRead = false;
    updateActiveFilters();
    if (currentView === 'grid') renderWritings();
    else renderTimeline();
    updateStats();
}

// Clear all read items
function clearAllRead() {
    if (confirm('Are you sure you want to clear all read status? This cannot be undone.')) {
        readItems = [];
        localStorage.setItem('writingRead', JSON.stringify(readItems));
        renderWritings();
        updateStats();
    }
}

// Random writing
function showRandomWriting() {
    const btn = document.getElementById('randomBtn');
    btn.classList.add('shuffling');
    
    setTimeout(() => {
        const filtered = getFilteredWritings();
        if (filtered.length > 0) {
            const random = filtered[Math.floor(Math.random() * filtered.length)];
            navigateToWriting(random.id);
        }
        btn.classList.remove('shuffling');
    }, 500);
}

// Export favorites
function exportFavorites() {
    const favoriteWritings = writings.filter(w => favorites.includes(w.id));
    
    const exportData = {
        exportDate: new Date().toISOString(),
        totalFavorites: favoriteWritings.length,
        favorites: favoriteWritings.map(w => ({
            title: w.title,
            author: w.author,
            year: w.year,
            category: w.category,
            url: window.location.origin + w.url
        }))
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `writing-favorites-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Share modal
function openShareModal(id) {
    currentShareWriting = writings.find(w => w.id === id);
    if (!currentShareWriting) return;

    const shareUrl = window.location.origin + currentShareWriting.url;
    document.getElementById('shareLink').value = shareUrl;

    const modal = new bootstrap.Modal(document.getElementById('shareModal'));
    modal.show();
}

// Copy share link
function copyShareLink() {
    const input = document.getElementById('shareLink');
    input.select();
    document.execCommand('copy');
    
    const btn = document.getElementById('copyLinkBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = originalText, 2000);
}

// Social sharing
function shareToTwitter() {
    if (!currentShareWriting) return;
    const text = `Check out "${currentShareWriting.title}" by ${currentShareWriting.author}`;
    const url = window.location.origin + currentShareWriting.url;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareToFacebook() {
    if (!currentShareWriting) return;
    const url = window.location.origin + currentShareWriting.url;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareToWhatsApp() {
    if (!currentShareWriting) return;
    const text = `Check out "${currentShareWriting.title}" by ${currentShareWriting.author}`;
    const url = window.location.origin + currentShareWriting.url;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
}

function shareToEmail() {
    if (!currentShareWriting) return;
    const subject = `Recommended Reading: ${currentShareWriting.title}`;
    const body = `I thought you might enjoy "${currentShareWriting.title}" by ${currentShareWriting.author} (${currentShareWriting.year}).\n\nRead it here: ${window.location.origin + currentShareWriting.url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Update stats
function updateStats() {
    const filtered = getFilteredWritings();
    const authors = new Set(filtered.map(w => w.author));
    const years = filtered.map(w => w.year).sort((a, b) => a - b);
    const readPercentage = writings.length > 0 ? Math.round((readItems.length / writings.length) * 100) : 0;
    const unreadCount = writings.length - readItems.length;

    document.getElementById('totalWorks').textContent = filtered.length;
    document.getElementById('totalAuthors').textContent = authors.size;
    document.getElementById('favoriteCount').textContent = favorites.length;
    document.getElementById('readCount').textContent = readItems.length;
    document.getElementById('unreadCount').textContent = unreadCount;
    document.getElementById('readingProgress').textContent = readPercentage + '%';
}

// Card size change
function changeCardSize(size) {
    const grid = document.getElementById('gridView');
    grid.className = `writings-grid size-${size}`;
}

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchBox').addEventListener('input', () => {
        renderView();
        updateStats();
    });

    // Sort
    document.getElementById('sortSelect').addEventListener('change', () => {
        renderView();
    });

    // Category tags
    document.getElementById('categoryTags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-chip')) {
            const category = e.target.dataset.category;
            e.target.classList.toggle('active');
            
            if (activeCategories.includes(category)) {
                activeCategories = activeCategories.filter(c => c !== category);
            } else {
                activeCategories.push(category);
            }
            
            updateActiveFilters();
            renderView();
            updateStats();
        }
    });

    // Tag chips
    document.getElementById('tagChips').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-chip')) {
            const tag = e.target.dataset.tag;
            e.target.classList.toggle('active');
            
            if (activeTags.includes(tag)) {
                activeTags = activeTags.filter(t => t !== tag);
            } else {
                activeTags.push(tag);
            }
            
            updateActiveFilters();
            renderView();
            updateStats();
        }
    });

    // Random button
    document.getElementById('randomBtn').addEventListener('click', showRandomWriting);

    // Export button
    document.getElementById('exportBtn').addEventListener('click', exportFavorites);

    // Clear filters button
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);

    // Stats bar clicks
    document.getElementById('favoritesBtn').addEventListener('click', toggleFavoritesFilter);
    document.getElementById('readBtn').addEventListener('click', toggleReadFilter);
    document.getElementById('unreadBtn').addEventListener('click', toggleUnreadFilter);
    document.getElementById('totalWorksBtn').addEventListener('click', clearAllFilters);

    // Clear read button
    document.getElementById('clearReadBtn').addEventListener('click', clearAllRead);

    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    // View toggle
    document.getElementById('gridViewBtn').addEventListener('click', () => {
        currentView = 'grid';
        document.getElementById('gridView').style.display = 'grid';
        document.getElementById('listView').classList.remove('active');
        document.getElementById('timelineView').classList.remove('active');
        document.getElementById('gridViewBtn').classList.add('active');
        document.getElementById('listViewBtn').classList.remove('active');
        document.getElementById('timelineViewBtn').classList.remove('active');
        document.getElementById('cardSizeControl').style.display = 'flex';
        renderWritings();
    });

    document.getElementById('listViewBtn').addEventListener('click', () => {
        currentView = 'list';
        document.getElementById('gridView').style.display = 'none';
        document.getElementById('listView').classList.add('active');
        document.getElementById('timelineView').classList.remove('active');
        document.getElementById('gridViewBtn').classList.remove('active');
        document.getElementById('listViewBtn').classList.add('active');
        document.getElementById('timelineViewBtn').classList.remove('active');
        document.getElementById('cardSizeControl').style.display = 'none';
        renderList();
    });

    document.getElementById('timelineViewBtn').addEventListener('click', () => {
        currentView = 'timeline';
        document.getElementById('gridView').style.display = 'none';
        document.getElementById('listView').classList.remove('active');
        document.getElementById('timelineView').classList.add('active');
        document.getElementById('gridViewBtn').classList.remove('active');
        document.getElementById('listViewBtn').classList.remove('active');
        document.getElementById('timelineViewBtn').classList.add('active');
        document.getElementById('cardSizeControl').style.display = 'none';
        renderTimeline();
    });

    // Card size controls
    document.querySelectorAll('input[name="cardSize"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            changeCardSize(e.target.value);
        });
    });

    // Share modal
    document.getElementById('copyLinkBtn').addEventListener('click', copyShareLink);
    document.getElementById('shareTwitter').addEventListener('click', shareToTwitter);
    document.getElementById('shareFacebook').addEventListener('click', shareToFacebook);
    document.getElementById('shareWhatsApp').addEventListener('click', shareToWhatsApp);
    document.getElementById('shareEmail').addEventListener('click', shareToEmail);
}

// Initialize on load
init();
