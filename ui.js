function formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

async function updateWeather(weather) {
    const weatherInfo = document.getElementById('weatherInfo');
    if (!weatherInfo) return; // Exit if element not found

    weatherInfo.innerHTML = ''; // Clear previous results

    if (weather) {
        const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

        const div = document.createElement('div');
        div.className = 'result-item fade-in'; // Add fade-in class
        div.innerHTML = `
            <div>
                <p><strong>Temperature:</strong> ${weather.main.temp} °F</p>
                <p><strong>Humidity:</strong> ${weather.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${weather.wind.speed} km/h</p>
                <p><strong>Weather Description:</strong> ${weather.weather[0].description}</p>
            </div>
            <img src="${iconUrl}" alt="${weather.weather[0].description}">
        `;
        weatherInfo.appendChild(div);
    } else {
        weatherInfo.innerHTML = '<p>No weather information found</p>';
    }
}

async function updateZipCodeInfo(zipCodeInfo) {
    const zipInfoDiv = document.getElementById('zipInfo');
    if (!zipInfoDiv) return; // Exit if element not found

    zipInfoDiv.innerHTML = ''; // Clear previous results

    if (zipCodeInfo) {
        const div = document.createElement('div');
        div.className = 'result-item fade-in'; // Add fade-in class
        div.innerHTML = `
            <p><strong>City, State:</strong> ${zipCodeInfo.name}, ${zipCodeInfo.state}</p>
            <p><strong>County:</strong> ${zipCodeInfo.county}</p>
            <p><strong>Population:</strong> ${zipCodeInfo.population}</p>
            <p><strong>Racial Majority:</strong> ${zipCodeInfo.racial_majority}</p>
            <p><strong>Unemployment Rate:</strong> ${zipCodeInfo.unemployment_rate}</p>
            <p><strong>School Test Performance:</strong> ${zipCodeInfo.school_test_performance}</p>
            <p><strong>Time Zone:</strong> ${zipCodeInfo.time_zone}</p>
        `;
        zipInfoDiv.appendChild(div);
    } else {
        zipInfoDiv.innerHTML = '<p>No zip code information found</p>';
    }
}

async function updateIncomeInfo(incomeInfo) {
    const incomeInfoDiv = document.getElementById('incomeInfo');
    if (!incomeInfoDiv) return; // Exit if element not found

    incomeInfoDiv.innerHTML = ''; // Clear previous results

    if (incomeInfo) {
        const div = document.createElement('div');
        div.className = 'result-item fade-in'; // Add fade-in class
        div.innerHTML = `
            <p><strong>Median Household Income:</strong> ${formatCurrency(incomeInfo.houseHoldMedianIncome)}</p>
            <p><strong>Household Mean Income:</strong> ${formatCurrency(incomeInfo.houseHoldMeanIncome)}</p>
            <p><strong>Family Median Income:</strong> ${formatCurrency(incomeInfo.familyMedianIncome)}</p>
            <p><strong>Family Mean Income:</strong> ${formatCurrency(incomeInfo.familyMeanIncome)}</p>
            <p><strong>Number of Households:</strong> ${incomeInfo.numHouseholds.toLocaleString()}</p>
            <p><strong>Non-Family Household Median Income:</strong> ${formatCurrency(incomeInfo.nonFamilyHouseholdMedianIncome)}</p>
            <p><strong>Non-Family Household Mean Income:</strong> ${formatCurrency(incomeInfo.nonFamilyHouseholdMeanIncome)}</p>
            <p><strong>Family Percent Poverty:</strong> ${incomeInfo.familyPercentPoverty}%</p>
        `;
        incomeInfoDiv.appendChild(div);
    } else {
        incomeInfoDiv.innerHTML = '<p>No income information found</p>';
    }
}

export { updateWeather, updateZipCodeInfo, updateIncomeInfo };




