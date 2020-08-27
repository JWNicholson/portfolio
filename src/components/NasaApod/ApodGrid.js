import React, { useState, useEffect } from 'react';
import ApodContentCard from './ApodContentCard';

import axios from 'axios';
const moment = require('moment');

const API_KEY = process.env.REACT_APP_NASA_KEY;
const API_URL = process.env.REACT_APP_NASA_URL;

let currDay = moment().format('YYYY-MM-DD');
//let otherDay = '2019-05-24';

export default function Grid () {
	//set initial data state as empty object
	const [
		nasaData,
		setNasaData
	] = useState({});
	console.log(currDay);
	// API query
	useEffect(() => {
		axios
			.get(`${API_URL}date=${currDay}&api_key=${API_KEY}`)
			.then((response) => {
                //console.log(response.data.title);
				setNasaData(response.data);
			})
			.catch((error) => {
				console.log('.get Error: ', error);
			});
	}, []); // [] keeps code from making an infinite loop

	return (
		<div>
			<ApodContentCard
				//use returned data here--
				key={nasaData.id}
				// nasaData.url
				url={nasaData.hdurl}
				//nasaData.title
				title={nasaData.title}
				//nasaData.date
				date={nasaData.date}
				//nasaData.text
				explanation={nasaData.explanation}
				//nasaData.copyright
				copyright={nasaData.copyright}
			/>
		</div>
	);
}
