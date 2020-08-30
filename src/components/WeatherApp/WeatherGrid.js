import React, { useState,useEffect } from 'react';

import WeatherCard from '../WeatherApp/WeatherCard';

import axios from 'axios';

const WTHR_API_KEY=process.env.REACT_APP_WTHR_KEY;
const WTHR_API_URL=process.env.REACT_APP_WTHR_URL;
const IMP = "imperial";
const MET = "metric";


export default function WeatherGrid() {
    //set initail weather state as an empty array,
    //because this API sends back an array
    const [weatherData, setWeatherData] = useState({})
    const [currMainData,setCurrMainData] = useState({})
    const [owSys,setOwSys] = useState({})
    const [weatherObj,setWeatherObj] = useState({})
    const [wind,setWind] = useState({})

    //let city = `q=${city}`

    useEffect(() => {
        
        axios
            .get(`${WTHR_API_URL}q=Louisville&units=${IMP}&appid=${WTHR_API_KEY}`)
            .then((response) => {
             console.log(response.data)
                setWeatherData(response.data)
                setCurrMainData(response.data.main)
                setOwSys(response.data.sys)
                setWeatherObj(response.data.weather[0])
                setWind(response.data.wind)
                
            })
            .catch((error) => {
                console.log('weather .get error: ', error);
            })
    }, [])

    //console.log(wind.speed);

    return (
      
     
      <WeatherCard
        //use returned data here
        key={weatherData.id}
        //city name -temporary until user input is functioning
        name={weatherData.name}

       //Visibility
       visibility={weatherData.visibility}

        //country={weatherData.sys.country}
        country={owSys.country}

        //weather icon
        weather_icon={weatherObj.icon}

        //current temperature
        temp={currMainData.temp}

        //feels like
        feels={currMainData.feels_like}

        //High
        high_temp={currMainData.temp_max}

        //Low
        low_temp={currMainData.temp_min}

        //Pressure
        pressure={currMainData.pressure}

        //Humidity
        humidity={currMainData.humidity}

        //wind
        wind={wind.speed}
       
      />
    )
}