import React, { useState,useEffect } from 'react';

import WeatherCard from '../components/WeatherApp/WeatherCard';

import axios from 'axios';

const API_KEY=process.env.REACT_APP_WTHR_KEY;
const API_URL=process.env.REACT_APP_WTHR_URL;


export default function WeatherPage() {
    //set initail weather state as an empty array,
    //because this API sends back an array
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}q=Louisville,us&appid=${API_KEY}`)
            .then((response) => {
                //console.log(response.data.title);
                setWeather(response.data);
            })
            .catch((error) => {
                console.log('weather .get error: ', error);
            })
    }, [])

    return (
      <WeatherCard />
    )
}
