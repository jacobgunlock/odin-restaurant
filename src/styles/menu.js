function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(menuItem('Hotdog', '$2.49'));
    menu.appendChild(menuItem('Hotdog', '$2.49'));
    return menu;
}



function menuItem(name, price) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    const itemImg = document.createElement('img');
    itemImg.src = `/dist/assets/${name.toLowerCase()}.jpg`;
    itemImg.alt = name;

    item.appendChild(itemImg);
    item.appendChild(itemName);
    item.appendChild(itemPrice);

    return item;
}

function displayMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(createMenu());
}

export default displayMenu;