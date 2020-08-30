import React from 'react';

const WeatherCard = (props) => {
    const icon_url = `http://openweathermap.org/img/wn/${props.weather_icon}@4x.png`
	return (
		<div className="weather-card-wrapper">
			<div className="weather-card-header">
				<h3>Weather Card Header</h3>
			</div>

			<div className="weather-searchBar">searchBar</div>

			<div className="weather-conditions-table">
				<div className="weather-conditions-table-title">
					<h4>
						Current Conditions For {props.name}, {props.country}
					</h4>
				</div>

				<div className="weather-table-data-wrapper">
					<div className="weather-icon-ctnr">
						<p>weather icon</p>
                        <img src={icon_url} alt="weather icon"/>
						{/* <p>"${props.weather_icon}"</p> */}
					</div>

					<div className="weather-conditions-ctnr">
						<div className="weather-conditions-temp-ctnr">
							<div className="cond-data-row">
								<div className="cond-tag">Temp - </div>
								<div className="cond-data">{Math.round(props.temp)}F&deg;</div>
							</div>

							<div className="cond-data-row">
								<div className="cond-tag">Feels like - </div>
								<div className="cond-data">{Math.round(props.feels)}F&deg;</div>
							</div>

							<div className="cond-data-row">
								<div className="cond-tag">High - </div>
								<div className="cond-data">{Math.round(props.high_temp)}F&deg;</div>
							</div>

							<div className="cond-data-row">
								<div className="cond-tag">Low - </div>
								<div className="cond-data">{Math.round(props.low_temp)}F&deg;</div>
							</div>
						</div>
						{/* end weather-conditions-temp-ctnr */}

						<div className="weather-conditions-atmos-ctnr">
							<div className="cond-data-row">
								<div className="cond-tag">Humidity - </div>
								<div className="cond-data">{Math.round(props.humidity)}%</div>
							</div>

							<div className="cond-data-row">
								<div className="cond-tag">Wind - </div>
								<div className="cond-data">{Math.round(props.wind)}mph</div>
							</div>

							<div className="cond-data-row">
								<div className="cond-tag">Visibility - </div>
								<div className="cond-data">{Math.round(props.visibility)}ft</div>
							</div>
						</div>
						{/* end weather-conditions-atmos-ctnr */}
					</div>
					{/* end weather-conditions-ctnr */}
				</div>
				{/* end-weather-table-data-wrapper */}
			</div>

			{/* end weather-condition-table */}
		</div>
		// end weather-card-wrapper
	);
};

export default WeatherCard;
