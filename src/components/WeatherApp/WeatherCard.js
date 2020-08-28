import React from 'react';

import WeatherSearchBar from './weatherSearchbar';

const Weather = (props) => {
	return (
		<div className="wthrApp-ctnr" data-id="wthrApp-ctnr">
			<h1 data-id="wthrApp-h1">Weather App</h1>

			<div className="wthrApp-card" data-id="wthrApp-card">
				{/* wthrApp-card header */}
				<div className="wthrApp-cardHeader" data-id="wthrApp-cardHeader" />
				{/* weather searchbox */}
				<WeatherSearchBar />

				{/* weather icon */}
				<div className="wthrApp-car-icon-ctnr" data-id="wthrApp-car-icon-ctnr" />

				{/* weather description */}
				<div className="wthrApp-car-desc-ctnr" data-id="wthrApp-car-desc-ctnr" />
			</div>
		</div>
	);
};

export default Weather;
