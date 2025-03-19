
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');
    const color = document.getElementById("brand-color");
    const mode = document.getElementsByClassName("mode-changer");
    const role = document.getElementsByClassName("testimonial-role");
    const viewProjectbtn = document.getElementsByClassName("btnViewProject");
    const container = document.getElementById("about-container");
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
            color.classList.replace('text-primary', 'text-warning');

            container.classList.remove('bg-body-tertiary');

            for (let i = 0; i < mode.length; i++) {
                mode[i].classList.replace('text-dark', 'text-light');
            }

            for (let i = 0; i < role.length; i++) {
                role[i].classList.replace('text-muted', 'text-light');
            }

            for (let i = 0; i < viewProjectbtn.length; i++) {
                viewProjectbtn[i].classList.replace('btn-outline-dark', 'btn-outline-warning');
            }

            document.body.classList.toggle("dark-mode");


        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'light');
            color.classList.replace('text-warning', 'text-primary');

            container.classList.add('bg-body-tertiary');

            for (let i = 0; i < mode.length; i++) {
                mode[i].classList.replace('text-light', 'text-dark');
            }

            for (let i = 0; i < role.length; i++) {
                role[i].classList.replace('text-light', 'text-muted');
            }

            for (let i = 0; i < viewProjectbtn.length; i++) {
                viewProjectbtn[i].classList.replace('btn-outline-warning', 'btn-outline-dark');
            }

            document.body.classList.toggle("dark-mode");
        }
    });
});