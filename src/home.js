function createHome() {
    const homepage = document.createElement('div');
    homepage.classList.add('home');
    homepage.appendChild(createParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus a ex laoreet pulvinar vitae molestie diam. Vestibulum lobortis sit amet libero vitae tempor. Ut egestas rhoncus massa, sed auctor felis blandit ac. Aliquam ultrices elit sed sapien vestibulum, ac efficitur ligula tincidunt. Aliquam vitae ligula tincidunt, pellentesque magna at, tincidunt libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lectus a ex laoreet pulvinar vitae molestie diam. Vestibulum lobortis sit amet libero vitae tempor. Ut egestas rhoncus massa, sed auctor felis blandit ac. Aliquam ultrices elit sed sapien vestibulum, ac efficitur ligula tincidunt. Aliquam vitae ligula tincidunt, pellentesque magna at, tincidunt libero.'));
    return homepage;
}

function createParagraph(text) {
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

function displayHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    content.appendChild(createHome());
}

export default displayHome;
