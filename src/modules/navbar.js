function createNavbar (){
    const navber = document.querySelector('#navbar');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML="Lord of the Fried";
    navber.appendChild(title);
    
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    const Homebutton = document.createElement('div');
    Homebutton.classList.add('button');
    Homebutton.innerHTML= "Home";
    buttons.appendChild(Homebutton);
    
    const Menubutton = document.createElement('div');
    Menubutton.classList.add('button');
    Menubutton.innerHTML= "Menu";
    buttons.appendChild(Menubutton);
    
    const Contactbutton = document.createElement('div');
    Contactbutton.classList.add('button');
    Contactbutton.innerHTML= "Contact";
    buttons.appendChild(Contactbutton);
    
    navber.appendChild(buttons);
};

export default createNavbar;







