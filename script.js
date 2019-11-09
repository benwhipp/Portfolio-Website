const photo = document.getElementById('benPhoto');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const hamburgerIcon = document.getElementById('hamburger-icon');
let isDarkMode = false;

const addDarkMode = () => {
    document.querySelector('h1').style.color = '#fff';
    document.querySelector('h2').style.color = '#fff';
    document.querySelector('p').style.color = '#fff';
    document.getElementById('aboutUSPs').style.color = '#fff';
    document.getElementById('circle').style.clipPath = 'circle(100%)';
    document.getElementById('circle').style.opacity = 1;
    document.querySelector('nav').style.background = '#352D39';
    document.querySelector('body').style.color = '#fff';
    document.getElementById('projects').style.background = '#6E6362';
    darkModeToggle.style.background = '#6E6362';
    document.getElementById('hamburger-icon').style.fill = '#fff';
    const changeAboutH2s = () => {
        document.getElementById('aboutUSPs').querySelectorAll('h2').forEach(el => {
            el.style.color = '#fff';
        });
    }
    changeAboutH2s();
    isDarkMode = true;
};

const revertDarkMode = () => {
    document.querySelector('h1').style.color = '#352D39';
    document.querySelector('h2').style.color = '#F9AC52';
    document.querySelector('p').style.color = '#352D39';
    document.getElementById('aboutUSPs').style.color = '#352D39';
    document.getElementById('circle').style.clipPath = 'circle(5% at 0% 0%)';
    document.getElementById('circle').style.opacity = 0;
    document.querySelector('nav').style.background = '#fff';
    document.querySelector('body').style.color = '#352D39';
    document.getElementById('projects').style.background = '#f8f8f8';
    darkModeToggle.style.background = '#352D39';
    document.getElementById('hamburger-icon').style.fill = '#352D39';
    const changeAboutH2s = () => {
        document.getElementById('aboutUSPs').querySelectorAll('h2').forEach(el => {
            el.style.color = '#352D39';
        });
    }
    changeAboutH2s();
    isDarkMode = false;
};

const changeMode = () => {
    if (!isDarkMode) {
        addDarkMode();
    } else {
        revertDarkMode();
    }
};

darkModeToggle.addEventListener('click', changeMode);

let isHamburgerOpen = false;
const openHamburger = () => {
    hamburgerIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>';
    document.getElementById('nav-buttons').style.display = 'flex';
    isHamburgerOpen = true;
}
const closeHamburger = () => {
    hamburgerIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>';
    document.getElementById('nav-buttons').style.display = 'none';
    isHamburgerOpen = false;
}
const hamburgerToggle = () => {
    if (!isHamburgerOpen) {
        openHamburger();
    } else {
        closeHamburger();
    }
}
hamburgerIcon.addEventListener('click', hamburgerToggle);