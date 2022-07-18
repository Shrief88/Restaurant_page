function menuPage(){
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    createMeal('Hamburger:','$2.49','Buns, patty, tomato, onions, lettuce, and our secret family recipe.',"images/hamburger.png", menu);

    createMeal('Cheeseburger:','$2.99','Similar to our hamburger, but with cheese.','images/cheeseburger.png',menu);

    createMeal('Double Cheeseburger:','$3.49','Similar to our cheeseburger, but with an extra patty.','images/double-cheeseburger.png',menu);

    createMeal('Steak:','$11.99','A juicy steak made just how you like it.','./images/steak.png',menu);

    createMeal('BBQ Ribs:','$8.99','Barbecue ribs with your choice of a add-ons.','./images/ribs.png',menu);

    createMeal('Grilled Cheese Sandwich:','$4.99','A toasted and grilled cheese sandwich, dipped in our special sauce.','./images/grilled-cheese.png',menu);
    content.appendChild(menu);
}


function createMeal(name,price,description,image,menu){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const img = document.createElement('img');
    img.setAttribute('src',image);

    menuItem.appendChild(img);

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('itemInfo');

    const basicInfo = document.createElement('div');
    basicInfo.classList.add('basicInfo');

    const itemName = document.createElement('p');
    itemName.classList.add('itemName');
    itemName.innerHTML = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.innerHTML = price;

    basicInfo.appendChild(itemName);
    basicInfo.appendChild(itemPrice);

    basicInfo.setAttribute('style',"padding-bottom:10px");
    basicInfo.setAttribute('style','border-bottom :dashed red');
    basicInfo.style['padding-bottom'] = "10px";

    itemInfo.appendChild(basicInfo);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.innerHTML = description;

    itemInfo.appendChild(itemDescription);

    menuItem.appendChild(itemInfo);

    

    menu.appendChild(menuItem)
}

export default menuPage;