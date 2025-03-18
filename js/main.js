
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');
    let isDarkMode = false;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = 'Dark';
        isDarkMode = true;
    }

    // Handle theme toggle click
    themeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            themeText.textContent = 'Dark';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'light');
        }
    });
});