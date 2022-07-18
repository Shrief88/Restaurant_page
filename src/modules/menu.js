function menuPage(){
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');


    createMeal('Hamburger:','$2.49','Buns, patty, tomato, onions, lettuce, and our secret family recipe.',menu)
    createMeal('Cheeseburger:','$2.99','Similar to our hamburger, but with cheese.',menu);

    content.appendChild(menu);

    


}


function createMeal(name,price,description,menu){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('itemInfo');

    const itemName = document.createElement('p');
    itemName.classList.add('itemName');
    itemName.innerHTML = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.innerHTML = price;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);
    menuItem.appendChild(itemInfo);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.innerHTML = description;

    menuItem.appendChild(itemDescription);
    menu.appendChild(menuItem)
}

export default menuPage;