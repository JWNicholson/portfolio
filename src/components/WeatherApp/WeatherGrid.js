import React, { useState,useEffect } from 'react';

import WeatherCard from '../WeatherApp/WeatherCard';

import axios from 'axios';

const WTHR_API_KEY=process.env.REACT_APP_WTHR_KEY;
const WTHR_API_URL=process.env.REACT_APP_WTHR_URL;


export default function WeatherPage() {
    //set initail weather state as an empty array,
    //because this API sends back an array
    const [weather, setWeather] = useState({});

    //let city = `q=${city}`

    useEffect(() => {
        
        axios
            .get(`${WTHR_API_URL}q=Louisville&appid=${WTHR_API_KEY}`)
            .then((response) => {
             console.log(response.data)
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