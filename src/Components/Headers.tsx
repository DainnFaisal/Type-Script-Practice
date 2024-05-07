import React from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheets/Headers.css'
import image1 from '../Assets/cloud.png'

function Headers() {
      return (
            <>
                  <nav className="nav-bar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="nav-bar collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                          <img src={image1} alt='clouds-img' width="9%" style={{ marginRight: '10px' }} />

                                          <li className="nav-item dropdown">
                                                <li className="set-links2 nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                      Check Weather
                                                </li>
                                                <ul className="dropdown-menu">
                                                      <li><Link to="/CurrentWeather" className="dropdown-item"> Current Weather </Link></li>
                                                      <li><Link to="/ForeCastWeather" className="dropdown-item"> ForeCast Weather </Link></li>
                                                </ul>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
            </>
      )
}

export default Headers