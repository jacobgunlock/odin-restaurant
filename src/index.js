import displayHome from "./home";
import displayReserve from "./reserve";
import displayMenu from "./styles/menu";

displayHome();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', (e) => {
     displayHome();
});
const reserveBtn = document.getElementById('reserve');
reserveBtn.addEventListener('click', (e) => {
    displayReserve();
});
const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', (e) => {
    displayMenu();
});
