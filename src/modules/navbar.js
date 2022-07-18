function createNavbar (){
    const navber = document.querySelector('#navbar');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML="Lord of the Fried";
    navber.appendChild(title);
    
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    const homeButton = document.createElement('div');
    homeButton.classList.add('button');
    homeButton.setAttribute("id","homeButton");
    homeButton.innerHTML= "Home";
    buttons.appendChild(homeButton);
    
    const menuButton = document.createElement('div');
    menuButton.classList.add('button');
    menuButton.setAttribute("id","menuButton");
    menuButton.innerHTML= "Menu";
    buttons.appendChild(menuButton);
    
    const contactButton = document.createElement('div');
    contactButton.classList.add('button');
    contactButton.setAttribute("id","contactButton");
    contactButton.innerHTML= "Contact";
    buttons.appendChild(contactButton);
    
    navber.appendChild(buttons);
};

export default createNavbar;







