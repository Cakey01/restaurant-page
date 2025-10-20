import { displayHomepage } from './homepage.js';
import { displayMenu } from './menu.js';
import { displayAbout } from './about.js';
import './styles.css';
import './homepage.css';
import './menu.css';
import './about.css';

function resetDisplay() {
    const display = document.getElementById('content');
    display.innerHTML = '';
}

function clickedNav(button) {
    resetDisplay();
    if (button.id === 'home') {
        displayHomepage();
    } else if (button.id === 'menu') {
        displayMenu();
    } else if (button.id === 'about') {
        displayAbout();
    }
}

function displayController() {
    displayHomepage();

    const navs = document.querySelectorAll('button');

    navs.forEach(button => {
        button.addEventListener('click', () => clickedNav(button));
    });
}

displayController();