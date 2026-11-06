async function fetchData(location, farenheit) {
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
        let response;
        if (farenheit)
            response = await fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,conditions,icon,precipprob,windspeed,pressure&include=days`,
            );
        else
            response = await fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime,tempmax,tempmin,temp,feelslike,humidity,conditions,icon,precipprob,windspeed,pressure&include=days`,
            );
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export { fetchData };
