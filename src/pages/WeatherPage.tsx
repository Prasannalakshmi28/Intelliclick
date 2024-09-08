import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}

const WeatherPage: React.FC<{ cityName: string }> = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeather(cityName);
      setWeatherData(data);
    };
    loadWeather();
  }, [cityName]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherPage;
