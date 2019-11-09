const photo = document.getElementById('benPhoto');
const darkModeToggle = document.getElementById('dark-mode-toggle');
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