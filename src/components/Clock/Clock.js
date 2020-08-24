import React, { useState, useEffect } from 'react';



const Clock = props => {
    const [time, setTime] = useState(new Date())
    //const [day, setDay] = useState(new Date().getDay())

    let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year =  new Date().getFullYear();


    //set the time with js Date()
    const timeChange = () => {
        setTime(d);//works without thiis. ?refactor to eliminate timeCange()?
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

        <div className="date-ctnr">
        <h3>Today is {days[d.getDay()]}, {months[d.getMonth()]} {year}</h3>
        </div>
        </>
    )
}

export default Clock;