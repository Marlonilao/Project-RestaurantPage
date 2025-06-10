import function1 from './home.js';
import function2 from './menu.js';
import function3 from './contact.js';
const content = document.getElementById('content');
console.log('Project: Restaurant Page');

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    content.innerHTML = "";
    function1();
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    function2();
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    content.innerHTML = "";
    function3();
})


function1();

