import { weatherIcon } from '../modules/assets.js';

function createForecastSection(data, moment, degreeSymbol) {
    const thirdDiv = document.createElement('div');
    thirdDiv.classList.add('third-div');

    const forecastHeading = document.createElement('h3');
    forecastHeading.textContent = 'Forecast for 5 days';
    thirdDiv.appendChild(forecastHeading);

    const forecastDivContainer = document.createElement('div');
    forecastDivContainer.classList.add('forecast-div-container');

    data.days.forEach((day, index) => {
        if (index >= 5) return;

        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-div');

        const date = new Date(day.datetime + 'T00:00:00');
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
        });
        const datePara = document.createElement('p');
        datePara.textContent = formattedDate;
        forecastDiv.appendChild(datePara);

        const conditionImg = document.createElement('img');
        conditionImg.src = weatherIcon[moment][day.conditions.split(',')[0]];
        forecastDiv.appendChild(conditionImg);

        const conditionPara = document.createElement('p');
        conditionPara.textContent = day.conditions;
        forecastDiv.appendChild(conditionPara);

        const tempPara = document.createElement('p');
        tempPara.textContent = `${day.tempmax} ${degreeSymbol} - ${day.tempmin} ${degreeSymbol}`;
        forecastDiv.appendChild(tempPara);

        forecastDivContainer.appendChild(forecastDiv);
    });

    thirdDiv.appendChild(forecastDivContainer);

    return thirdDiv;
}

export { createForecastSection };
