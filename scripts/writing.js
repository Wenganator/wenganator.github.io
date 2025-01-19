// Theme selector buttons
// See writing.css for styling of the buttons
// See theme-buttons.html for HTML code inserted into each subpage of writing.html


// 
// Scripts for buttons to change theme
const changeTheme = (theme) => {
    const root = document.documentElement;
    
    // Save the selected theme to localStorage
    localStorage.setItem('selectedTheme', theme);

    // Apply the theme
    if (theme === "light") {
    root.style.setProperty("--background-color", "#f8f9fa");
    root.style.setProperty("--text-color", "#212529");
    } else if (theme === "dark") {
    root.style.setProperty("--background-color", "#212529");
    root.style.setProperty("--text-color", "#f8f9fa");
    } else if (theme === "ocean") {
    root.style.setProperty("--background-color", "#1b3b6f");
    root.style.setProperty("--text-color", "#d4f1f9");
    } else if (theme === "sepia") {
    root.style.setProperty("--background-color", "#f4ecd8");
    root.style.setProperty("--text-color", "#5e503f");
    } else if (theme === "persian-green") {
    root.style.setProperty("--background-color", "#2a9d8f");
    root.style.setProperty("--text-color", "#ffffff");
    } else if (theme === "lavender") {
    root.style.setProperty("--background-color", "#e6e6fa");
    root.style.setProperty("--text-color", "#4b0082");
    } else if (theme === "neon") {
    root.style.setProperty("--background-color", "#0f0f0f");
    root.style.setProperty("--text-color", "#39ff14");
    }
};

// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }
});




// 
// Load buttons into each subpage of writing.html
// Function to dynamically load the buttons
async function loadThemeButtons() {
    const container = document.getElementById('theme-buttons-container');
    if (container) {
        try {
            const response = await fetch('/theme-buttons.html'); // Update the path as needed
            if (response.ok) {
                const buttonsHtml = await response.text();
                container.innerHTML = buttonsHtml;
            } else {
                console.error('Failed to load theme buttons:', response.statusText);
            }
        } catch (error) {
            console.error('Error loading theme buttons:', error);
        }
    }
}

// Call the function to load the buttons
loadThemeButtons();