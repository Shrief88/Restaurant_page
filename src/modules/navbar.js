function createNavbar (){
    const navber = document.querySelector('#navbar');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML="Lord of the Fried";
    navber.appendChild(title);
    
    const buttons = document.createElement('ul');
    buttons.classList.add('buttons');

    createNavbarElement('homeButton','Home',buttons);
    createNavbarElement('menuButton','Menu',buttons);
    createNavbarElement('contactButton','contact',buttons);
    
    navber.appendChild(buttons);
};

export default createNavbar;

function createNavbarElement(idName,content,buttons){
    const button = document.createElement('li');
    button.classList.add('button');
    button.setAttribute("id",idName);
    button.innerHTML= content;
    buttons.appendChild(button);
}







