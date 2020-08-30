import React from 'react'




const WeatherCard = (props) => {
    return (
        <div className="weather-card-wrapper">
            <div className="weather-card-header">
                <h3>Weather Card Header   foo</h3>
            </div>

            <div className="weather-searchBar">
                searchBar
            </div>

            
            <div className="weather-conditions-table">
    <h4>Current Conditions For :the_City_you_searched</h4>

                <div className="weather-table-data-wrapper">
                <div className="weather-icon-ctnr">
                    weather icon
                </div>

                <div className="weather-conditions-ctnr">
                    weather conditions
                </div>
                </div>
            </div>



        </div>
    )
}


export default WeatherCard

