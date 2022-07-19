function contactPage(){
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  container.classList.add('container');
 

  createRow('images/phone.svg','01099436442',container);
  createRow('images/phone.svg','01098336553',container);
  createRow('images/location.svg','14 abbas el akkad st, nasr city',container);
  
  content.appendChild(container);
}

export default contactPage;

function createRow(iconSource,text,container){
    const info = document.createElement('div');
    info.classList.add('row');

    const icon = document.createElement('img');
    icon.setAttribute('src',iconSource);
    info.appendChild(icon);

    const infoDescripition = document.createElement('p');
    infoDescripition.innerHTML=text;
    info.appendChild(infoDescripition);

    container.appendChild(info);
}
