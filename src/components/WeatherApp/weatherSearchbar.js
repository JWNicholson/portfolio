import React from 'react';




const weatherSearchbar = props => {
    return (
        <div className="wthrApp-searchBox-ctnr"
                data-id="wthrApp-searchBox-ctnr">
                    <form action="onSubmit={props.getWeather}">
                    <input 
                      className="wthrApp-searchBox-input"
                      type="text" 
                      name="city"
                      data-id="wthrApp-searchBox-in-city"
                   />
                   <input 
                        className="wthrApp-searchBox-input"
                        type="text"
                        name="country"
                        data-id="wthrApp-searchBox-in-country"
                   />
                   <button data-id="wthrApp-searchBox-in-btn">Get Weather</button>
                   </form>
           </div>
    )
}

export default weatherSearchbar;

