import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './Components/Headers';
import CurrentWeather from './Components/CurrentWeather';
import ForeCastWeather from './Components/ForeCastWeather';
import Register from './Components/Register';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Headers />
          <Routes>
            <Route path='/CurrentWeather' Component={CurrentWeather} />
            <Route path='/ForeCastWeather' Component={ForeCastWeather} />
            <Route path='/Register' Component={Register} />
            <Route path='/Login' Component={Login} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
