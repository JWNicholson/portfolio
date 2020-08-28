import React, { Component } from 'react'

export default class WeatherPage extends Component {
    render() {
        return (
            <div className="wthrApp-ctnr" 
            data-id="wthrApp-ctnr">
                <h1 data-id="wthrApp-h1">Weather App</h1>
                <div className="wthrApp-card" data-id="wthrApp-card">

                    {/* wthrApp-card header */}
                    <div className="wthrApp-cardHeader"
                        data-id="wthrApp-cardHeader">

                    </div>
                    {/* weather searchbox */}
                    <div className="wthrApp-searchBox-ctnr"
                         data-id="wthrApp-searchBox-ctnr">
                             <input className="wthrApp-searchBox-input"
                                test-id="wthrApp-searchBox-input"
                                type="text" 
                            />
                    </div>

                    {/* weather icon */}

                    {/* weather description */}
                </div>
            </div>
        )
    }
}
