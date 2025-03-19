// // Theme Toggle Functionality
// document.addEventListener('DOMContentLoaded', function () {
//     const themeToggle = document.getElementById('theme-toggle');
//     const themeIcon = themeToggle.querySelector('i');
//     const themeText = themeToggle.querySelector('span');
//     const color = document.getElementById("brand-color");
//     const mode = document.getElementsByClassName("mode-changer");
//     const role = document.getElementsByClassName("testimonial-role");
//     const viewProjectbtn = document.getElementsByClassName("btnViewProject");
//     const container = document.getElementById("about-container");

//     const offcanvasNav = document.getElementById("offcanvasNav"); // Offcanvas container
//     const offcanvasLinks = offcanvasNav.querySelectorAll(".nav-link"); // Offcanvas nav links
//     const offcanvasToggler = document.querySelector(".navbar-toggler"); // Offcanvas toggler button
//     const offcanvasIcon = document.querySelector(".navbar-toggler-icon"); // Bootstrap toggler icon
//     const offcanvasCloseBtn = document.querySelector(".offcanvas .btn-close"); // Offcanvas close button


//     let isDarkMode = false;

//     // Check for saved theme preference
//     if (localStorage.getItem('theme') === 'dark') {
//         document.body.setAttribute('data-theme', 'dark');
//         themeIcon.classList.replace('fa-sun', 'fa-moon');
//         themeText.textContent = 'Dark';
//         isDarkMode = true;
//     }

//     // Handle theme toggle click
//     themeToggle.addEventListener('click', function () {
//         isDarkMode = !isDarkMode;

//         if (isDarkMode) {
//             document.body.setAttribute('data-theme', 'dark');
//             themeIcon.classList.replace('fa-sun', 'fa-moon');
//             themeText.textContent = 'Dark';
//             localStorage.setItem('theme', 'dark');
//             color.classList.replace('text-primary', 'text-warning');

//             container.classList.remove('bg-body-tertiary');

//             for (let i = 0; i < mode.length; i++) {
//                 mode[i].classList.replace('text-dark', 'text-light');
//             }

//             for (let i = 0; i < role.length; i++) {
//                 role[i].classList.replace('text-muted', 'text-light');
//             }

//             for (let i = 0; i < viewProjectbtn.length; i++) {
//                 viewProjectbtn[i].classList.replace('btn-outline-dark', 'btn-outline-warning');
//             }

//             document.body.classList.toggle("dark-mode");

//             // Dark mode styles
//             offcanvasNav.classList.add("bg-dark", "text-light");
//             offcanvasLinks.forEach(link => link.classList.add("text-light"));

//             // Change navbar toggler button color for visibility
//             offcanvasToggler.classList.add("border", "border-light");
//             offcanvasIcon.style.filter = "invert(1)"; // Makes the default toggler icon white

//             // Change the offcanvas close button color
//             offcanvasCloseBtn.classList.add("btn-close-white"); // Bootstrap's built-in white close button


//         } else {
//             document.body.setAttribute('data-theme', 'light');
//             themeIcon.classList.replace('fa-moon', 'fa-sun');
//             themeText.textContent = 'Light';
//             localStorage.setItem('theme', 'light');
//             color.classList.replace('text-warning', 'text-primary');

//             container.classList.add('bg-body-tertiary');

//             for (let i = 0; i < mode.length; i++) {
//                 mode[i].classList.replace('text-light', 'text-dark');
//             }

//             for (let i = 0; i < role.length; i++) {
//                 role[i].classList.replace('text-light', 'text-muted');
//             }

//             for (let i = 0; i < viewProjectbtn.length; i++) {
//                 viewProjectbtn[i].classList.replace('btn-outline-warning', 'btn-outline-dark');
//             }

//             document.body.classList.toggle("dark-mode");

//             // Light mode styles (reset back)
//             offcanvasNav.classList.remove("bg-dark", "text-light");
//             offcanvasLinks.forEach(link => link.classList.remove("text-light"));

//             // Restore navbar toggler button color
//             offcanvasToggler.classList.remove("border", "border-light");
//             offcanvasIcon.style.filter = "none"; // Restores default color

//             // Restore the offcanvas close button color
//             offcanvasCloseBtn.classList.remove("btn-close-white");
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('span');
    const color = document.getElementById("brand-color");
    const mode = document.getElementsByClassName("mode-changer");
    const role = document.getElementsByClassName("testimonial-role");
    const viewProjectbtn = document.getElementsByClassName("btnViewProject");
    const container = document.getElementById("about-container");
    const offcanvasNav = document.getElementById("offcanvasNav");
    const offcanvasLinks = offcanvasNav.querySelectorAll(".nav-link");
    const offcanvasToggler = document.querySelector(".navbar-toggler");
    const offcanvasIcon = document.querySelector(".navbar-toggler-icon");
    const offcanvasCloseBtn = document.querySelector(".offcanvas .btn-close");

    let isDarkMode = localStorage.getItem('theme') === 'dark';

    function applyDarkMode() {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
        document.body.classList.add("dark-mode");

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

        // Apply offcanvas dark mode styles
        offcanvasNav.classList.add("bg-dark", "text-light");
        offcanvasLinks.forEach(link => link.classList.add("text-light"));
        offcanvasToggler.classList.add("border", "border-light");
        offcanvasIcon.style.filter = "invert(1)";
        offcanvasCloseBtn.classList.add("btn-close-white");

        document.body.classList.add("dark-mode");

        // Scroll Bar
        document.documentElement.style.setProperty('--scrollbar-thumb', 'rgba(255, 208, 0, 0.99)'); // Yellow
        document.documentElement.style.setProperty('--scrollbar-track', '#333'); // Dark

    }

    function applyLightMode() {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeText.textContent = 'Light';
        localStorage.setItem('theme', 'light');
        document.body.classList.remove("dark-mode");

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

        // Reset offcanvas styles
        offcanvasNav.classList.remove("bg-dark", "text-light");
        offcanvasLinks.forEach(link => link.classList.remove("text-light"));
        offcanvasToggler.classList.remove("border", "border-light");
        offcanvasIcon.style.filter = "none";
        offcanvasCloseBtn.classList.remove("btn-close-white");

        document.body.classList.remove("dark-mode");

        // Scroll Bar
        document.documentElement.style.setProperty('--scrollbar-thumb', 'rgb(32, 139, 201)'); // Blue
        document.documentElement.style.setProperty('--scrollbar-track', '#f1f1f1'); // Light gray
    }

    // Check and apply saved theme on page load
    if (isDarkMode) {
        applyDarkMode();
    } else {
        applyLightMode();
    }

    // Toggle button event listener
    themeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        if (isDarkMode) {
            applyDarkMode();
        } else {
            applyLightMode();
        }
    });

});
