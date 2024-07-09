const weatherApiKey = 'd354d22d1fdc9585f60e31bb1de88c80'; // Replace with your OpenWeatherMap API key
const rapidApiKey = 'fbbac5a04emsh6963942f2d39edap1936dbjsnc886cb4ebf6b'; // Replace with your RapidAPI key

async function getWeather(zipCode) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${weatherApiKey}&units=imperial`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('OpenWeatherMap API Error:', error);
        return null;
    }
}

async function getZipCodeInfo(zipCode) {
    try {
        const response = await fetch(`https://zip-code-master.p.rapidapi.com/detail/${zipCode}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'zip-code-master.p.rapidapi.com',
                'x-rapidapi-key': rapidApiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.summary;
    } catch (error) {
        console.error('Zip Code Information API Error:', error);
        return null;
    }
}

async function getIncomeByZipCode(zipCode) {
    try {
        const response = await fetch(`https://us-zip-code-to-income.p.rapidapi.com/?zip=${zipCode}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'us-zip-code-to-income.p.rapidapi.com',
                'x-rapidapi-key': rapidApiKey
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Income by Zip Code API Error:', error);
        return null;
    }
}

export { getWeather, getZipCodeInfo, getIncomeByZipCode };



