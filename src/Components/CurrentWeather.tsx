import React, { useState, useEffect } from 'react';
import '../StyleSheets/CurrentWeather.css'

const WeatherApp = () => {

  const [weatherData, setWeatherData] = useState<any>(null);

  const API_KEY = 'b46c1c8bcb384915ba960121240705';

  useEffect(() => {

    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Lahore`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));

  }, []);

  console.log(weatherData);

  return (
    <>
      <div className='container'>

        <div className='weather-box'>

          <h3 className='current-weather-heading'>Current Weather</h3>

          {weatherData ? (
            <div>
              <p className='blue'> <b>Location:</b> {weatherData.location.name}</p>
              <p className='blue'> <b>Temperature:</b> {weatherData.current.temp_c}°C</p>
              <p className='blue'><b>Condition:</b> {weatherData.current.condition.text}</p>
              <img src={weatherData.current.condition.icon} alt="Weather Icon" width="50%" />
            </div>

          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};


export default WeatherApp;