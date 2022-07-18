import './style.css';
import createNavbar from './modules/navbar';
import homePage from './modules/home';
import menuPage from './modules/menu';



init();

function init(){
    createNavbar();
    menuPage();
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
})()


