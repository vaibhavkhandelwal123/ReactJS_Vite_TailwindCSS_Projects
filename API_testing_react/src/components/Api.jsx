import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!city) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=47957598f67f16e7a6587f26e309b3b7`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className="border border-gray-400 p-2 rounded-lg w-full mb-2"
        />
        <button
          type="submit"
          className="border border-gray-800 bg-green-300 p-2 rounded-lg w-full"
        >
          Get Weather
        </button>
      </form>

      {loading && <p className="text-lg">Fetching weather data...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}

      {weatherData && !loading && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{weatherData.name}</h2>
          <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-lg">Min Temperature: {weatherData.main.temp_min}°C</p>
          <p className="text-lg">Description: {weatherData.weather[0].description}</p>
          <p className="text-lg">Feels like: {weatherData.main.feels_like}°C</p>
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Pressure: {weatherData.main.pressure} hPa</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
