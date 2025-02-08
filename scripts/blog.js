// blogPosts for blog.html and tags.html

// From newest to oldest posts (so newest posts will display at the top)
// TO-DO: Standardize sizing of images to e.g., 350x200?

// Tags: Bible, Books, Christianity, Cooking, Games, Medicine, Memory, Music, Sports, 
//       Technology, Theology, Worship, Writing, Miscellaneous
const blogPosts = [
    {
        title: 'Doxologies',
        tag: ['Bible', 'Christianity', 'Memory', 'Theology', 'Worship'],
        content: 'Doxologies and prayers from the Bible',
        image: '/assets/images/blog/doxologies.jpg',
        url: '/blog/doxologies.html'
    },
    {
        title: 'Worship Sets',
        tag: ['Christianity', 'Music', 'Theology', 'Worship'],
        content: 'Ideas for worship sets',
        image: '/assets/images/blog/worship-sets.webp',
        url: '/blog/worship-sets.html'
    },
    {
        title: 'Freebies', 
        tag: ['Games', 'Technology', 'Miscellaneous'],
        content: 'Freebies (or something close)',
        image: '/assets/images/blog/freebies.svg',
        url: '/blog/freebies.html'
    },
    {
        title: 'A Practical Guide to Antibiotics',
        tag: ['Medicine'],
        content: 'A practical guide to antibiotics by an internal medicine resident',
        image: '/assets/images/blog/antibiotics-teachIM.jpg',
        url: '/blog/antibiotics.html'
    },
    {
        title: 'Scripture Memorization',
        tag: ['Bible', 'Christianity', 'Memory', 'Theology', 'Worship'],
        content: 'A basic guide to Scripture memorization',
        image: '/assets/images/blog/scripture-memorization.webp',
        url: '/blog/scripture-memorization.html'
    },
    {
        title: 'Esordio',
        tag: ['Miscellaneous'],
        content: 'Welcome!',
        image: '/assets/images/writing-quill.png',
        url: '/blog/welcome.html'
    }
];


const blogContainer = document.getElementById('blogPosts');
const searchBar = document.getElementById('searchBar');
const tagFilter = document.getElementById('tagFilter');
const loading = document.createElement('div'); // Add loading dynamically if missing
loading.id = 'loading';
loading.className = 'text-center d-none';
loading.innerHTML = '<p>Loading...</p>';
blogContainer.parentNode.appendChild(loading);

let currentPage = 1; // for infinite scrolling
const postsPerPage = 3; // for infinite scrolling  // Change this value to control how many posts load at a time


const renderPosts = (posts) => {
    posts.forEach(post => {
        const tagsHtml = post.tag.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('');
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card blog-card">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <div class="mb-2">${tagsHtml}</div>
                        <p class="card-text">${post.content}</p>
                        <a href="${post.url}" class="btn btn-primary">Read More</a>
                        <button class="btn btn-outline-secondary bookmark-btn" data-title="${post.title}">Bookmark</button>
                    </div>
                </div>
            </div>
        `;
        blogContainer.innerHTML += card;
    });

    // Remove all previous event listeners by re-selecting new buttons
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(button => {
        button.replaceWith(button.cloneNode(true)); // Removes existing event listeners
    });

    // Reattach event listeners for bookmark buttons
    const updatedBookmarkButtons = document.querySelectorAll('.bookmark-btn');
    updatedBookmarkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const postTitle = e.target.dataset.title;
            toggleBookmark(postTitle);
        });
    });

    // Update bookmark icons after rendering posts
    updateBookmarkIcons();
};



// Additional code for infinite scrolling
const loadMorePosts = () => {
    const start = (currentPage - 1) * postsPerPage; // Starting index
    const end = currentPage * postsPerPage; // Ending index
    const postsToRender = blogPosts.slice(start, end); // Slice the array to get posts
    renderPosts(postsToRender); // Render the sliced posts
    if (end >= blogPosts.length) {
        window.removeEventListener('scroll', handleScroll); // Stop scrolling if all posts are loaded
    }
    currentPage++; // Move to the next page
};

const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        loading.classList.remove('d-none');
        setTimeout(() => {
            loadMorePosts();
            loading.classList.add('d-none');
        }, 1000);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    
    const filterPosts = () => {
        const searchText = searchBar.value.toLowerCase();
        const selectedTag = tagFilter.value;
    
        const filteredPosts = blogPosts.filter(post => {
            const matchesText = post.title.toLowerCase().includes(searchText);
            const matchesTag = !selectedTag || post.tag.includes(selectedTag);
            return matchesText && matchesTag;
        });
    
        blogContainer.innerHTML = ''; // Clear all posts
        currentPage = 1; // Reset to the first page
        loadMoreFilteredPosts(filteredPosts); // Load the first batch of filtered posts
    };

    const loadMoreFilteredPosts = (filteredPosts) => {
        const start = (currentPage - 1) * postsPerPage;
        const end = currentPage * postsPerPage;
        const postsToRender = filteredPosts.slice(start, end);
        renderPosts(postsToRender);
    
        if (end >= filteredPosts.length) {
            window.removeEventListener('scroll', handleScroll);
        }
        currentPage++;
    };
    

    searchBar.addEventListener('input', filterPosts);
    tagFilter.addEventListener('change', filterPosts);


    window.addEventListener('scroll', handleScroll); // for infinite scrolling


    // Initial load
    loadMorePosts();
});






//
// Manage blog bookmarks
const getBookmarks = () => {
    // Retrieve bookmarks from local storage (default to an empty array if not found)
    return JSON.parse(localStorage.getItem('bookmarksBlog')) || [];
};

const saveBookmarks = (bookmarksBlog) => {
    // Save bookmarks array to local storage
    localStorage.setItem('bookmarksBlog', JSON.stringify(bookmarksBlog));
};

const toggleBookmark = (postTitle) => {
    const bookmarksBlog = JSON.parse(localStorage.getItem('bookmarksBlog')) || [];

    if (bookmarksBlog.includes(postTitle)) {
        // If already bookmarked, remove it
        const index = bookmarksBlog.indexOf(postTitle);
        bookmarksBlog.splice(index, 1);
        localStorage.setItem('bookmarksBlog', JSON.stringify(bookmarksBlog));
    } else {
        // If not bookmarked, add it
        bookmarksBlog.push(postTitle);
        localStorage.setItem('bookmarksBlog', JSON.stringify(bookmarksBlog));
    }

    // Update bookmark icons after toggling
    updateBookmarkIcons();
};

const updateBookmarkIcons = () => {
    const bookmarksBlog = JSON.parse(localStorage.getItem('bookmarksBlog')) || [];
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');

    bookmarkButtons.forEach(button => {
        const postTitle = button.dataset.title;

        if (bookmarksBlog.includes(postTitle)) {
            button.classList.add('btn-secondary');
            button.classList.remove('btn-outline-secondary');
            button.innerText = 'Bookmarked';
        } else {
            button.classList.add('btn-outline-secondary');
            button.classList.remove('btn-secondary');
            button.innerText = 'Bookmark';
        }
    });
};

// Display bookmarked posts
const viewBookmarks = () => {
    
    const bookmarksBlog = JSON.parse(localStorage.getItem('bookmarksBlog')) || [];

    // Disable infinite scroll
    // window.removeEventListener('scroll', handleScroll);

    if (bookmarksBlog.length === 0) {
        blogContainer.innerHTML = '<p>No bookmarks available.</p>';
        return;
    }

    const bookmarkedPosts = blogPosts.filter(post => bookmarksBlog.includes(post.title));
    blogContainer.innerHTML = ''; // Clear the container
    renderPosts(bookmarkedPosts); // Render only the bookmarked posts
};

// Back to all posts
const viewAllPosts = () => {
    blogContainer.innerHTML = ''; // Clear the container
    currentPage = 1; // Reset page count
    loadMorePosts(); // Reload all posts
    window.addEventListener('scroll', handleScroll); // Re-enable scrolling
};

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('viewBookmarksBtn').addEventListener('click', viewBookmarks);
    document.getElementById('viewAllPostsBtn').addEventListener('click', viewAllPosts);
});
