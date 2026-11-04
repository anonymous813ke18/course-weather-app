import "./style.css";

// const WEATHER_API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?unitGroup=metric&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,conditions,icon&include=days`;

const search = document.querySelector('#search');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', async () => {
    const location = search.value;

    if (location === '') 
        return;

    console.log('check')

    let data = await fetchData(location);
    console.log('check')
    displayData(data);
})

async function fetchData (location) {
    // return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,conditions,icon&include=days`)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         return data;
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })

    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,conditions,icon,precipprob,windspeed,pressure&include=days`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

function displayData (data) {
    const degreeCelciusSymbol = '°C';

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('first-div');

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
    todayTemp.textContent = `${data.days[0].temp} ${degreeCelciusSymbol}`;
    firstDiv.appendChild(todayTemp);

    const currentCondition = document.createElement('p');
    currentCondition.textContent = data.days[0].conditions;
    firstDiv.appendChild(currentCondition);

    gridContainer.appendChild(firstDiv);

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('second-div');

    // Displaying today's weather details
    const detailsHeading = document.createElement('h3');
    detailsHeading.textContent = "Today's weather details:";
    secondDiv.appendChild(detailsHeading);

    const thermalSensation = document.createElement('p');
    thermalSensation.textContent = 'Thermal Sensation: ' + data.days[0].feelslike;
    secondDiv.appendChild(thermalSensation);

    const rainProbability = document.createElement('p');
    rainProbability.textContent = 'Rain Probability: ' + data.days[0].precipprob;
    secondDiv.appendChild(rainProbability);

    const windSpeed = document.createElement('p');
    windSpeed.textContent = 'Wind Speed: ' + data.days[0].windspeed;
    secondDiv.appendChild(windSpeed);

    const airHumidity = document.createElement('p');
    airHumidity.textContent = 'Air Humidity: ' + data.days[0].humidity;
    secondDiv.appendChild(airHumidity);

    const pressure = document.createElement('p');
    pressure.textContent = 'Pressure: ' + data.days[0].pressure;
    secondDiv.appendChild(pressure);

    gridContainer.appendChild(secondDiv);

    const thirdDiv = document.createElement('div');
    thirdDiv.classList.add('third-div');

    const forecastHeading = document.createElement('h3');
    forecastHeading.textContent = 'Forecast for 5 days';
    thirdDiv.appendChild(forecastHeading);

    const forecastDivContainer = document.createElement('div');
    forecastDivContainer.classList.add('forecast-div-container'); 

    data.days.forEach((day, index) => {
        if (index >= 5)
            return;

        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-div');

        const date = new Date(day.datetime + "T00:00:00");
        const formattedDate = date.toLocaleDateString('en-US', {
             weekday: 'long',
        });
        const datePara = document.createElement('p');
        datePara.textContent = formattedDate;
        forecastDiv.appendChild(datePara);

        const conditionPara = document.createElement('p');
        conditionPara.textContent = day.conditions;
        forecastDiv.appendChild(conditionPara);

        const tempPara = document.createElement('p');
        tempPara.textContent = `${day.tempmax} ${degreeCelciusSymbol} - ${day.tempmin} ${degreeCelciusSymbol}`;
        forecastDiv.appendChild(tempPara);

        forecastDivContainer.appendChild(forecastDiv);
    });

    thirdDiv.appendChild(forecastDivContainer);
    gridContainer.appendChild(thirdDiv);

    document.body.replaceChildren();
    document.body.appendChild(gridContainer);
}