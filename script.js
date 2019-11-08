const photo = document.getElementById('benPhoto');

const addDarkMode = () => {
    document.querySelector('h1').style.color = '#fff';
    document.querySelector('h2').style.color = '#fff';
    document.querySelector('p').style.color = '#fff';
    document.querySelector('.aboutUSPs').style.color = '#fff';
    document.getElementById('circle').style.clipPath = 'circle(100%)';
};

const revertDarkMode = () => {
    document.querySelector('h1').style.color = '#352D39';
    document.querySelector('h2').style.color = '#F9AC52';
    document.querySelector('p').style.color = '#352D39';
    document.querySelector('.aboutUSPs').style.color = '#352D39';
    document.getElementById('circle').style.clipPath = 'circle(5% at 0% 0%)';
};

photo.onmousedown = addDarkMode;
photo.onmouseup = revertDarkMode;