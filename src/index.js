import './style.css';
import createNavbar from './modules/navbar';
import homePage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';



init();

function init(){
    createNavbar();
    homePage();
}

function clearPageContent(){
    const content = document.querySelector('#content');
    content.innerHTML='';
}

const displayController = (()=>{
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const contactButton = document.querySelector('#contactButton');
    const toggleButton = document.querySelector('.toggleButton');

    homeButton.addEventListener('click',()=>{
        clearPageContent();
        homePage();
    })

    menuButton.addEventListener('click',()=>{
        clearPageContent();
        menuPage();
    })

    contactButton.addEventListener('click',()=>{
        clearPageContent();
        contactPage();
    })

    toggleButton.addEventListener('click',()=>{
        const navbarLinks = document.querySelector('.navbarLinks');
        navbarLinks.classList.toggle('active');
    })


})()


