import thermometerSvg from '../images/icons/thermometer-simple-light.svg';
import cloudSvg from '../images/icons/cloud-rain-light.svg';
import dropSvg from '../images/icons/drop-light.svg';
import sunSvg from '../images/icons/sun-dim-light.svg';
import windSvg from '../images/icons/wind-light.svg';

import weatherClearMomentDay from '../images/backgrounds/Weather=Clear, Moment=Day.png';
import weatherClearMomentNight from '../images/backgrounds/Weather=Clear, Moment=Night.png';
import weatherCloudyMomentDay from '../images/backgrounds/Weather=Cloudy, Moment=Day.png';
import weatherCloudyMomentNight from '../images/backgrounds/Weather=Cloudy, Moment=Night.png';
import weatherFewCloudsMomentDay from '../images/backgrounds/Weather=Few Clouds, Moment=Day.png';
import weatherFewCloudsMomentNight from '../images/backgrounds/Weather=Few Clouds, Moment=Night.png';
import weatherRainMomentDay from '../images/backgrounds/Weather=Rain, Moment=Day.png';
import weatherRainMomentNight from '../images/backgrounds/Weather=Rain, Moment=Night.png';
import weatherSnowMomentDay from '../images/backgrounds/Weather=Snow, Moment=Day.png';
import weatherSnowMomentNight from '../images/backgrounds/Weather=Snow, Moment=Night.png';

import weatherCMomentDIcon from '../images/icons/Weather=Clear, Moment=Day.svg';
import weatherCMomentNIcon from '../images/icons/Weather=Clear, Moment=Night.svg';
import weatherClMomentDIcon from '../images/icons/Weather=Cloudy, Moment=Day.svg';
import weatherClMomentNIcon from '../images/icons/Weather=Cloudy, Moment=Night.svg';
import weatherFCMomentDIcon from '../images/icons/Weather=Few Clouds, Moment=Day.svg';
import weatherFCMomentNIcon from '../images/icons/Weather=Few Clouds, Moment=Night.svg';
import weatherRMomentDIcon from '../images/icons/Weather=Rain, Moment=Day.svg';
import weatherRMomentNIcon from '../images/icons/Weather=Rain, Moment=Night.svg';
import weatherSMomentDIcon from '../images/icons/Weather=Snow, Moment=Day.svg';

const weatherBgImage = {
    day: {
        Clear: weatherClearMomentDay,
        'Partially cloudy': weatherFewCloudsMomentDay,
        Overcast: weatherCloudyMomentDay,
        Rain: weatherRainMomentDay,
        Snow: weatherSnowMomentDay,
    },
    night: {
        Clear: weatherClearMomentNight,
        'Partially cloudy': weatherFewCloudsMomentNight,
        Overcast: weatherCloudyMomentNight,
        Rain: weatherRainMomentNight,
        Snow: weatherSnowMomentNight,
    },
};

const weatherIcon = {
    day: {
        Clear: weatherCMomentDIcon,
        'Partially cloudy': weatherFCMomentDIcon,
        Overcast: weatherClMomentDIcon,
        Rain: weatherRMomentDIcon,
        Snow: weatherSMomentDIcon,
    },
    night: {
        Clear: weatherCMomentNIcon,
        'Partially cloudy': weatherFCMomentNIcon,
        Overcast: weatherClMomentNIcon,
        Rain: weatherRMomentNIcon,
        Snow: weatherSMomentDIcon,
    },
};

const weatherDetailIcons = {
    thermometerSvg: thermometerSvg,
    cloudSvg: cloudSvg,
    dropSvg: dropSvg,
    sunSvg: sunSvg,
    windSvg: windSvg,
};

export { weatherBgImage, weatherIcon, weatherDetailIcons };
