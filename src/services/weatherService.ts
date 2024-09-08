import axios from 'axios';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'https://openweathermap.org/'; // Replace with your OpenWeather API key

export const fetchWeather = async (cityName: string) => {
    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                q: cityName,
                appid: API_KEY,
                units: 'metric' // Use metric for Celsius, change to 'imperial' for Fahrenheit
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather: ", error);
        return null;
    }
};
