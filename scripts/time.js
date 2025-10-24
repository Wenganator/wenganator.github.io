// Functions that depend on user's local time


// Determines day or night and applies corresponding background
// Depends on .content div in HTML and CSS (see styles/style.css)
// Include time.js in HTML pages that require this functionality
document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');
    const now = new Date();
    const hour = now.getHours();

    // Define your "day" and "night" ranges
    const isDaytime = hour >= 6 && hour < 18;  // 6am–6pm = day

    // Add the appropriate class
    if (isDaytime) {
        contentDiv.classList.add('daytime');
    } else {
        contentDiv.classList.add('nighttime');
    }
});

// Button to toggle between day and night themes manually
const button = document.getElementById('toggle-theme');
const contentDiv = document.querySelector('.content');

button.addEventListener('click', () => {
    contentDiv.classList.toggle('daytime');
    contentDiv.classList.toggle('nighttime');
});