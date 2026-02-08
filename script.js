// Theme Toggle Logic
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    // Save preference
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isLight = document.body.classList.contains('light-mode');
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        // Simple text/emoji swap or icon class swap
        icon.textContent = isLight ? '🌙' : '☀️';
    }
}

// Initialize Theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    updateThemeIcon();
});


// Navigation Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Smooth Scroll (Only needed for hash links in Home, but good to keep utility)
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
