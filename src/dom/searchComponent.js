import { switchSvg } from '../modules/helper.js';
import { fetchData } from '../modules/dataManager.js';
import { switchBtn } from './switchBtn.js';
import { displayData } from './domManager.js';

function createSearchSection (farenheit) {
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search-div');

    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('name', 'search');
    searchBar.setAttribute('id', 'search');
    searchBar.setAttribute('class', 'search-bar');
    searchBar.setAttribute('placeholder', 'Type a Location...');
    searchDiv.appendChild(searchBar);

    const searchBtn = document.createElement('button');
    searchBtn.classList.add('search-btn');
    searchBtn.addEventListener('click', async () => {
        const location = searchBar.value;
        
        if (location === '') 
            return;

        try {
            switchSvg(searchBtn);
            let data = await fetchData(location, farenheit);
            displayData(data, farenheit);
            switchBtn(searchBar.value);
        } catch (error) {
            console.error(error);
        }
    })

    const searchSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    searchSvg.setAttribute('width', '25');
    searchSvg.setAttribute('height', '30');
    searchSvg.setAttribute('viewBox', '0 0 195 120');
    searchSvg.classList.add('search-svg');

    const searchSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    searchSvgPath.setAttribute('d', 'M21.824 77.611L.302 128.104c-1.414 3.319 2.405 6.511 6.196 5.177L184.72 70.566c3.56-1.252 3.56-6.287 0-7.539L6.497.311C2.706-1.023-1.113 2.168.301 5.488L21.823 55.98a27.57 27.57 0 0 1 .001 21.631z');
    searchSvg.appendChild(searchSvgPath);

    searchBtn.appendChild(searchSvg);
    searchDiv.appendChild(searchBtn);

    return searchDiv
}

export { createSearchSection }