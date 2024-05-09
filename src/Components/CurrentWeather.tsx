import React, { useState, useEffect } from 'react';
import '../StyleSheets/CurrentWeather.css'

const WeatherApp = () => {

  const [weatherData, setWeatherData] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');

  const API_KEY = 'b46c1c8bcb384915ba960121240705';

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${selectedCity}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  }, [selectedCity]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <>
      <div className='dropdown-select-cities'>

        <li className="nav-item dropdown">
          <li className="set-links4 nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select City
          </li>
          <ul className="dropdown-menu dropdown-cities">
            <h5 className='province'> Punjab: </h5>
            <li className="dropdown-item" onClick={() => handleCitySelect('Lahore')}> Lahore </li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Multan')}> Multan</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Faisalabad')}> Faisalabad</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Hyderabad')}> Hyderabad</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Islamabad')}> Islamabad </li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Murree')}> Murree </li>
            <h5 className='province'> KPK: </h5>
            <li className="dropdown-item" onClick={() => handleCitySelect('Swat')}> Swat</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Abbottabad')}>Abbottabad</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Naran')}>Naran</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Peshawar')}>Peshawar</li>
            <h5 className='province'> Sindh: </h5>
            <li className="dropdown-item" onClick={() => handleCitySelect('Karachi')}> Karachi </li>
            <h5 className='province'> Balochistan: </h5>
            <li className="dropdown-item" onClick={() => handleCitySelect('Quetta')}>Quetta</li>
            <h5 className='province'> Gilgit: </h5>
            <li className="dropdown-item" onClick={() => handleCitySelect('Hunza')}>Hunza</li>
            <li className="dropdown-item" onClick={() => handleCitySelect('Skardu')}>Skardu</li>

          </ul>
        </li>
      </div>

      <div className='container'>

        <div className='weather-box'>

          <h3 className='current-weather-heading'>Current Weather</h3>

          {weatherData && weatherData.location ? (
            <div>
              <p className='blue'> <b>Location:</b> {weatherData.location.name} </p>
              <p className='blue'> <b>Temperature:</b> {weatherData.current.temp_c}°C </p>
              <p className='blue'><b>Condition:</b> {weatherData.current.condition.text} </p>
              <img src={weatherData.current.condition.icon} alt="Weather Icon" width="50%" />
            </div>
          ) : (
            <>
              <p className='red'><i className="bi bi-exclamation-triangle"> "You haven't selected a city" </i> </p>
                <p className='blue'> Please select a city first! </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherApp;