import './style.css';
import createNavbar from './modules/navbar';
import homePage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';



init();

function init(){
    createNavbar();
    contactPage();
}

function clearPageContent(){
    const content = document.querySelector('#content');
    content.innerHTML='';
}

const displayController = (()=>{
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const contactButton = document.querySelector('#contantButton');

    homeButton.addEventListener('click',()=>{
        clearPageContent();
        homePage();
    })

    menuButton.addEventListener('click',()=>{
        clearPageContent();
        menuPage();
    })

    contactPage.addEventListener('click',()=>{
        clearPageContent();
        contactPage();
    })


})()


