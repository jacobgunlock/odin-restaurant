function createReserve() {
    const reserve = document.createElement('div');
    reserve.classList.add('reserve');

    const photo = document.createElement('img');
    photo.src = '/dist/assets/restaurant.jpg'

    const phoneNum = document.createElement('p');
    phoneNum.textContent = 'Phone Number: 123-456-7890';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Road St, City State, 12345'

    const para = document.createElement('p');
    para.innerText = 'Make your reservation today!'

    const form = document.createElement('form');
    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Name')
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    const submit = document.createElement('button');
    submit.innerText = 'Submit';

    form.appendChild(name);
    form.appendChild(date);
    form.append(submit);

    reserve.appendChild(photo);
    reserve.appendChild(phoneNum);
    reserve.appendChild(address);
    reserve.appendChild(para);
    reserve.appendChild(form);

    return reserve;
}

function displayReserve() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(createReserve());
}

export default displayReserve;