function createNavbar (){
    const navber = document.querySelector('#navbar');

    const toggleButton = document.createElement('div');
    toggleButton.classList.add('toggleButton');
    addSpan(toggleButton);
    addSpan(toggleButton);
    addSpan(toggleButton);
    navber.appendChild(toggleButton);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML="Lord of the Fried";
    navber.appendChild(title);

    const navbarLinks = document.createElement('div');
    navbarLinks.classList.add('navbarLinks')
    
    const buttons = document.createElement('ul');
    buttons.classList.add('buttons');
    navbarLinks.appendChild(buttons);

    createNavbarElement('homeButton','Home',buttons);
    createNavbarElement('menuButton','Menu',buttons);
    createNavbarElement('contactButton','contact',buttons);
    
    navber.appendChild(navbarLinks);
};

export default createNavbar;

function createNavbarElement(idName,content,buttons){
    const button = document.createElement('li');
    button.classList.add('button');
    button.setAttribute("id",idName);
    button.innerHTML= content;
    buttons.appendChild(button);
}

function addSpan(toggleButton){
    const span = document.createElement('span');
    toggleButton.appendChild(span);
}






