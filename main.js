import { getWeather, getZipCodeInfo, getIncomeByZipCode } from './api.js';
import { updateWeather, updateZipCodeInfo, updateIncomeInfo } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    const searchButton = document.getElementById('searchButton');
    const zipInput = document.getElementById('zipInput');
    const page = document.body.getAttribute('data-page');

    if (searchButton && zipInput) {
        searchButton.addEventListener('click', async () => {
            const zipCode = zipInput.value;
            if (zipCode) {
                searchButton.classList.add('animate');
                setTimeout(() => searchButton.classList.remove('animate'), 600);

                try {
                    if (page === 'weather') {
                        const weather = await getWeather(zipCode);
                        updateWeather(weather);
                    } else if (page === 'zipcode') {
                        const zipCodeInfo = await getZipCodeInfo(zipCode);
                        updateZipCodeInfo(zipCodeInfo);
                    } else if (page === 'income') {
                        const incomeInfo = await getIncomeByZipCode(zipCode);
                        updateIncomeInfo(incomeInfo);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                alert('Please enter a zip code.');
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted successfully!');
        });
    }
});
