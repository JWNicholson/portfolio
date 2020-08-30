import React from 'react';

const WeatherCard = (props) => {
	return (
		<div className="weather-card-wrapper">
			<div className="weather-card-header">
				<h3>Weather Card Header</h3>
			</div>

			<div className="weather-searchBar">searchBar</div>

			<div className="weather-conditions-table">
				<h4>Current Conditions For {props.name}, {props.country}</h4>

				<div className="weather-table-data-wrapper">
    <div className="weather-icon-ctnr">
        <p>weather icon</p>
        <p>"${props.weather_icon}"</p></div>

					<div className="weather-conditions-ctnr">
						<h4>Current Weather Conditions</h4>
						<p>Temp F&deg; - {props.temp}</p>
						<p>Feels like - {props.feels}&deg;</p>
                        <p>High - {props.high_temp}&deg;</p>
                        <p>Low - {props.low_temp}&deg;</p>
                        <p>Humidity - {props.humidity}%</p>
                        {/* <p>Pressure - {props.pressure}</p> */}
                        <p>Wind - {props.wind}mph</p>
                        <p>Visibility - {props.visibility}ft</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
