import React, { useState,useEffect } from 'react';

import WeatherCard from '../components/WeatherApp/WeatherCard';

import axios from 'axios';

//const WTHR_API_KEY=process.env.REACT_APP_WTHR_KEY;
const WTHR_API_URL=process.env.REACT_APP_WTHR_URL;


export default function WeatherPage() {
    //set initail weather state as an empty array,
    //because this API sends back an array
    const [weather, setWeather] = useState([]);



    useEffect(() => {
        
        axios
            .get(`${WTHR_API_URL}q=Louisville&appid=9a464594780d537398ba01d11636d00e`)
            .then((response) => {
               console.log(response)
                setWeather(response.data);
            })
            .catch((error) => {
                console.log('weather .get error: ', error);
            })
    }, [])

    return (
      <WeatherCard
        //use returned data here
      />
    )
}
