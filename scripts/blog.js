document.addEventListener('DOMContentLoaded', () => {

    // Update blogPosts here (blog.js) and tags.html
    const blogPosts = [
        {
            title: 'Blog Post 1',
            tag: 'Bible',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/assets/images/elephant.jpg',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 2',
            tag: 'Books',
            content: 'Vivamus lacinia odio vitae vestibulum vestibulum.',
            image: '/assets/images/elephant.jpg', 
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 3',
            tag: 'Christianity',
            content: 'Cras ultricies ligula sed magna dictum porta.',
            image: '/assets/images/elephant.jpg',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 4',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: '/assets/images/elephant.jpg',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 5',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: '/assets/images/elephant.jpg',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 6',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: '/assets/images/elephant.jpg',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 7',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: 'https://via.placeholder.com/350x200',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 8',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: 'https://via.placeholder.com/350x200',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 9',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: 'https://via.placeholder.com/350x200',
            url: '/blog/placeholder.html'
        },
        {
            title: 'Blog Post 10',
            tag: 'Technology',
            content: 'Curabitur aliquet quam id dui posuere blandit.',
            image: 'https://via.placeholder.com/350x200',
            url: '/blog/placeholder.html'
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
            const card = `
                <div class="col-md-4 mb-4">
                    <div class="card blog-card">
                        <img src="${post.image}" class="card-img-top" alt="${post.title}">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.content}</p>
                            <a href="${post.url}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            blogContainer.innerHTML += card;
        });
    };

    const filterPosts = () => {
        const searchText = searchBar.value.toLowerCase();
        const selectedTag = tagFilter.value;

        const filteredPosts = blogPosts.filter(post => {
            const matchesText = post.title.toLowerCase().includes(searchText);
            const matchesTag = !selectedTag || post.tag === selectedTag;
            return matchesText && matchesTag;
        });

        blogContainer.innerHTML = '';
        renderPosts(filteredPosts);
    };

    searchBar.addEventListener('input', filterPosts);
    tagFilter.addEventListener('change', filterPosts);


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




    window.addEventListener('scroll', handleScroll); // for infinite scrolling

    // Initial load
    loadMorePosts();


});





// Load the centralized blog-sidebar.html file dynamically and insert its content into the placeholder (<div id="blogSidebar"></div>) in each blog page
document.addEventListener('DOMContentLoaded', () => {
    const blogSidebar = document.getElementById('blogSidebar');
    if (blogSidebar) {
        fetch('/blog/blog-sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch tags.html');
                }
                return response.text();
            })
            .then(html => {
                blogSidebar.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading tags:', error);
            });
    }
});


// Load the centralized author-box-jw.html file dynamically and insert its content into the placeholder (<div id="authorBoxJW"></div>) in each blog page
document.addEventListener('DOMContentLoaded', () => {
    const authorBoxJW = document.getElementById('authorBoxJW');
    if (authorBoxJW) {
        fetch('/blog/author-box-jw.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch tags.html');
                }
                return response.text();
            })
            .then(html => {
                authorBoxJW.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading tags:', error);
            });
    }
});