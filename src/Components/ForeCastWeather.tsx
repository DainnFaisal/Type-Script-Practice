import React, { useState, useEffect } from 'react';
import '../StyleSheets/ForecastWeather.css'

const WeatherApp = () => {

      const [weatherData, setWeatherData] = useState<any>(null);

      const API_KEY = 'b46c1c8bcb384915ba960121240705';

      useEffect(() => {

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Lahore`)
                  .then(response => response.json())
                  .then(data => setWeatherData(data))
                  .catch(error => console.error(error));

      }, []);

      console.log(weatherData);

      // interface
      interface ForecastDay {
            date: string;
            day: {
                  condition: {
                        text: string;
                  };
            };
            astro: {
                  sunrise: string;
                  sunset: string;
            };
            date_epoch: number;
      }

      return (
            <>
                  <div className='container'>

                        <div className='forecast-box'>

                              <h3 className='forecast-weather-heading'>Weather Forecast</h3>

                              {weatherData ? (
                                    <div>
                                          <p className='blue'><b>Location:</b> {weatherData.location.name}</p>
                                          <p className='blue'><b>Temperature:</b> {weatherData.current.temp_c}°C</p>
                                          <p className='blue'><b>Condition:</b> {weatherData.current.condition.text}</p>
                                          <p className='blue'><b>Clouds:</b> {weatherData.current.cloud}</p>
                                          <img src={weatherData.current.condition.icon} alt="Weather Icon" width="50%" />

                                          {
                                                weatherData.forecast.forecastday.map((day: ForecastDay) => (
                                                      <div key={day.date_epoch}>

                                                            <p className='blue'><b>Date:</b> {day.date}</p>
                                                            <p className='blue'><b>Day:</b> {day.day.condition.text}</p>

                                                            <p className='blue'><b>Sunrise Time:</b> {day.astro.sunrise}</p>
                                                            <p className='blue'><b>Sunset Time:</b> {day.astro.sunset}</p>
                                                      </div>
                                                ))}
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