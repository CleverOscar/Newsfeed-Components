// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const header = document.querySelector('.header');
console.log(header);

function menuMaker(arrayObj){
  let menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu');

  let menuList = document.createElement('ul');

  arrayObj.forEach(function(item) {
    let menuListItem = document.createElement('li');
    menuListItem.textContent = item;
    
    menuList.appendChild(menuListItem)
  })

  menuWrapper.appendChild(menuList);

  let menuBttn = document.querySelector('.menu-button');

  menuBttn.addEventListener('click', (event)=>{
    menuWrapper.classList.toggle('menu--open')
  })

  return menuWrapper;
}

console.log(header.appendChild(menuMaker(menuItems)))


