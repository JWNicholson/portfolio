import React, { useState, useEffect } from 'react';

const Clock = props => {
    const [time, setTime] = useState(new Date())

    //set the time with js Date()
    const timeChange = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const movement = setInterval(() => {
            timeChange()
        },1000)//interval milli seconds
        return () => clearInterval(movement)
    })

    return (
        <div className="clock">
            <h2 data-cy='clockGreeting'>Time is {time.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;