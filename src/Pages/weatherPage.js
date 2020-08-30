import React, { Component } from 'react';

import WeatherGrid from '../components/WeatherApp/WeatherGrid';

export default class WeatherPage extends Component {
    render() {
        return (
            <div className="weather-app-wrapper">
                <div className="weather-page-title-ctnr">
                <h1>Weather App</h1>
                </div>

                <WeatherGrid />
               
            </div>
        )
    }
}





