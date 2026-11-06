import { weatherDetailIcons } from '../modules/assets.js';

function createDetailsSection(data, degreeSymbol, speedUnit) {
    const secondDiv = document.createElement('div');
    secondDiv.classList.add('second-div');

    // Displaying today's weather details
    const detailsHeading = document.createElement('h3');
    detailsHeading.textContent = "Today's weather details:";
    secondDiv.appendChild(detailsHeading);

    const thermalSensation = document.createElement('div');
    thermalSensation.classList.add('weather-list');

    const thermalSensationSvg = document.createElement('img');
    thermalSensationSvg.src = weatherDetailIcons['thermometerSvg'];
    thermalSensation.appendChild(thermalSensationSvg);

    const thermalSensationPara1 = document.createElement('p');
    thermalSensationPara1.textContent = 'Thermal Sensation:';
    thermalSensation.appendChild(thermalSensationPara1);

    const thermalSensationPara2 = document.createElement('p');
    thermalSensationPara2.textContent =
        data.days[0].feelslike + ' ' + degreeSymbol;
    thermalSensation.appendChild(thermalSensationPara2);

    secondDiv.appendChild(thermalSensation);

    const rainProbability = document.createElement('div');
    rainProbability.classList.add('weather-list');

    const rainProbabilitySvg = document.createElement('img');
    rainProbabilitySvg.src = weatherDetailIcons['cloudSvg'];
    rainProbability.appendChild(rainProbabilitySvg);

    const rainProbabilityPara1 = document.createElement('p');
    rainProbabilityPara1.textContent = 'Rain Probability:';
    rainProbability.appendChild(rainProbabilityPara1);

    const rainProbabilityPara2 = document.createElement('p');
    rainProbabilityPara2.textContent = data.days[0].precipprob + ' %';
    rainProbability.appendChild(rainProbabilityPara2);

    secondDiv.appendChild(rainProbability);

    const windSpeed = document.createElement('div');
    windSpeed.classList.add('weather-list');

    const windSpeedSvg = document.createElement('img');
    windSpeedSvg.src = weatherDetailIcons['windSvg'];
    windSpeed.appendChild(windSpeedSvg);

    const windSpeedPara1 = document.createElement('p');
    windSpeedPara1.textContent = 'Wind Speed:';
    windSpeed.appendChild(windSpeedPara1);

    const windSpeedPara2 = document.createElement('p');
    windSpeedPara2.textContent = data.days[0].windspeed + ' ' + speedUnit;
    windSpeed.appendChild(windSpeedPara2);

    secondDiv.appendChild(windSpeed);

    const airHumidity = document.createElement('div');
    airHumidity.classList.add('weather-list');

    const airHumiditySvg = document.createElement('img');
    airHumiditySvg.src = weatherDetailIcons['dropSvg'];
    airHumidity.appendChild(airHumiditySvg);

    const airHumidityPara1 = document.createElement('p');
    airHumidityPara1.textContent = 'Air Humidity:';
    airHumidity.appendChild(airHumidityPara1);

    const airHumidityPara2 = document.createElement('p');
    airHumidityPara2.textContent = data.days[0].humidity + ' %';
    airHumidity.appendChild(airHumidityPara2);

    secondDiv.appendChild(airHumidity);

    const pressure = document.createElement('div');
    pressure.classList.add('weather-list');

    const pressureSvg = document.createElement('img');
    pressureSvg.src = weatherDetailIcons['sunSvg'];
    pressure.appendChild(pressureSvg);

    const pressurePara1 = document.createElement('p');
    pressurePara1.textContent = 'Pressure:';
    pressure.appendChild(pressurePara1);

    const pressurePara2 = document.createElement('p');
    pressurePara2.textContent = data.days[0].pressure;
    pressure.appendChild(pressurePara2);

    secondDiv.appendChild(pressure);

    return secondDiv;
}

export { createDetailsSection };
