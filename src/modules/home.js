function homePage(){
    const content = document.querySelector('#content');

    const p1 = document.createElement('p');
    p1.innerHTML = "Welcome to";
    p1.classList.add('welcomeText');
    content.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerHTML = "Lord of the Fried";
    p2.classList.add('title');
    content.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = "Best Restaurant";
    p3.classList.add('welcomeText');
    content.appendChild(p3);
}

export default homePage;