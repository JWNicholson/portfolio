import React, { useState, useEffect } from 'react';



const Clock = props => {
    const [time, setTime] = useState(new Date())
    const [day, setDay] = useState(new Date().getDay())

    let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    //set the time with js Date()
    const timeChange = () => {
        //setTime(d);
        // setDay(new Date()[.getDay()])
    }

    useEffect(() => {
        const movement = setInterval(() => {
            timeChange()
        },1000)//interval milli seconds
        return () => clearInterval(movement)
    })

    return (
        <>
        <div className="clock-ctnr">
            <h2 className="clock" data-cy='clockGreeting'>Time is {time.toLocaleTimeString()}</h2>
           
            
        </div>

        <div>
            <p>Date: {days[d.getDay()]}</p>
        </div>
        </>
    )
}

export default Clock;