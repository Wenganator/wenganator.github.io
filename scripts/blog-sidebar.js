document.addEventListener('DOMContentLoaded', () => {

    // Load the centralized blog-sidebar.html file dynamically and insert its content into the placeholder (<div id="blogSidebar"></div>) in each blog page
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

    // Load the centralized author-box-jw.html file dynamically and insert its content into the placeholder (<div id="authorBoxJW"></div>) in each blog page
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