import { checkDay } from '../modules/helper.js';
import { createForecastSection } from './forecastComponent.js';
import { createSearchSection } from './searchComponent.js';
import { createCurrentWeatherSection } from './currentComponent.js';
import { createDetailsSection } from './detailsComponent.js';

function displayData (data, farenheit) {
    const degreeSymbol = farenheit ? '℉' : '°C';
    const speedUnit = farenheit ? 'm/h' : 'km/h';
    const moment = checkDay(data.timezone) ? 'day' : 'night';

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    gridContainer.appendChild(createSearchSection(farenheit));
    gridContainer.appendChild(createCurrentWeatherSection(moment, data, degreeSymbol));
    gridContainer.appendChild(createDetailsSection(data, degreeSymbol, speedUnit));
    gridContainer.appendChild(createForecastSection(data, moment, degreeSymbol));

    document.body.replaceChildren();
    document.body.appendChild(gridContainer);
}

export { displayData }