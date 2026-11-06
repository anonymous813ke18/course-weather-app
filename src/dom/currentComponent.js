import { weatherBgImage, weatherIcon } from "../modules/assets.js";

function createCurrentWeatherSection (moment, data, degreeSymbol) {
    const weather = data.days[0].conditions.split(',')[0];

    const firstDiv = document.createElement('div');
    firstDiv.classList.add('first-div');
    firstDiv.style.backgroundImage = `url(${weatherBgImage[moment][weather]})`;

    // Displaying the location and the current time of the location
    const now = new Date();

    const localTime = now.toLocaleTimeString('en-GB', {
        timeZone: data.timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const location = document.createElement('h3');
    location.textContent = `${data.resolvedAddress} - ${localTime}`;
    firstDiv.appendChild(location);

    // Displaying the current date
    const date = new Date(data.days[0].datetime + "T00:00:00");
    const formattedDate = date.toLocaleDateString('en-US', {
         weekday: 'long',
         month: 'long',
         day: 'numeric',
         year: 'numeric',
    })

    const datePara = document.createElement('p');
    datePara.textContent = formattedDate;
    firstDiv.appendChild(datePara);

    // Displaying today's temperature and conditions of the selected location
    const todayTemp = document.createElement('h1');
    todayTemp.textContent = `${data.days[0].temp} ${degreeSymbol}`;
    firstDiv.appendChild(todayTemp);

    const currentCondition = document.createElement('p');
    currentCondition.textContent = data.days[0].conditions;
    firstDiv.appendChild(currentCondition);

    const conditionImg = document.createElement('img');
    conditionImg.src = weatherIcon[moment][weather];
    firstDiv.appendChild(conditionImg);

    return firstDiv
}

export { createCurrentWeatherSection }