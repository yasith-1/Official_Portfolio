
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');
    const color = document.getElementById("brand-color");
    const cardTitle = document.querySelectorAll(".card-title");
    const cardText = document.querySelectorAll(".card-text");
    const viewProjectbtn = document.querySelectorAll(".btnViewProject");
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
            color.classList.replace('text-primary','text-warning');

            for (let i = 0; i < cardTitle.length; i++) {
                cardTitle[i].classList.replace('text-dark','text-light');
            }

            for (let i = 0; i < cardText.length; i++) {
                cardText[i].classList.replace('text-dark','text-light');
            }

            for (let i = 0; i < viewProjectbtn.length; i++) {
                viewProjectbtn[i].classList.replace('btn-outline-dark','btn-outline-warning');
            }
            
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'light');
            color.classList.replace('text-warning','text-primary');

            for (let i = 0; i < cardTitle.length; i++) {
                cardTitle[i].classList.replace('text-light','text-dark');
            }

            for (let i = 0; i < cardText.length; i++) {
                cardText[i].classList.replace('text-light','text-dark');
            }

            for (let i = 0; i < viewProjectbtn.length; i++) {
                viewProjectbtn[i].classList.replace('btn-outline-warning','btn-outline-dark');
            }
        }
    });
});