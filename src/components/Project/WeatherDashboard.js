// src/components/Project/WeatherDashboard.js
import React from 'react';
import './Project.css';

const WeatherDashboard = () => {
  return (
    <div className="project animate__animated animate__delay-3s animate__fadeIn">
      <h2>Weather Dashboard</h2>
      <p>
        This is a Weather Dashboard application developed using React and OpenWeatherMap API. It allows users to search for current weather conditions and forecasts for various cities. Key features include:
      </p>
      <ul>
        <li>Search for current weather conditions by city</li>
        <li>Display weather data including temperature, humidity, and wind speed</li>
        <li>Responsive design for different screen sizes</li>
      </ul>
      <p>Technologies Used:</p>
      <ul>
        <li>React</li>
        <li>OpenWeatherMap API</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Bootstrap</li>
      </ul>
      <a href="https://github.com/hayasep/weather_dashboard" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <div className="project-image">
        <img src={`${process.env.PUBLIC_URL}/weather-dashboard-screenshot.png`} alt="Weather Dashboard Screenshot" />
      </div>
    </div>
  );
};

export default WeatherDashboard;
