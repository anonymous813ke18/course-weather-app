import { fetchData } from "../modules/dataManager.js";
import { displayData } from "./domManager.js";

function switchBtn (location, farenheit) {
    const btn = document.createElement('button');
    btn.classList.add('toggle-btn');
    btn.textContent = '℃ / ℉';
    btn.setAttribute('data-location', location);
    document.body.appendChild(btn);

    btn.addEventListener('click',async () => {
        if (farenheit)
            farenheit = false;
        else
            farenheit = true;

        try {
            let data = await fetchData(btn.dataset.location, farenheit);
            displayData(data, farenheit);
            switchBtn(btn.dataset.location, farenheit);
        } catch (error) {
            console.error(error);
        }
    })
}

export { switchBtn }