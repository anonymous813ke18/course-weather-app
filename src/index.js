import "./style.css";
import { displayData } from "./dom/domManager.js";
import { fetchData } from "./modules/dataManager.js";
import { switchSvg } from "./modules/helper.js";
import { switchBtn } from "./dom/switchBtn.js";

const search = document.querySelector('#search');
const searchBtn = document.querySelector('.search-btn');
let farenheit = false;

searchBtn.addEventListener('click', async () => {
    const location = search.value;

    if (location === '') 
        return;

    try {
        switchSvg(searchBtn);
        let data = await fetchData(location, farenheit);
        displayData(data, farenheit);
        switchBtn(search.value, farenheit);
    } catch (error) {
        console.error(error);
    }
})