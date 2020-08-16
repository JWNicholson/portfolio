import React, { useState } from 'react';

const StartStop=()=>{
    const [color, setColor] = useState('green')
    const [toggle, setToggle] = useState(false);

    //onClick function to change button background:color and provide True or False to toggle button text
   const toggleBtn=()=> {
        setToggle(!toggle)
      if(toggle === false){
          //console.log('false')
          setColor('red')
      }else{
          setColor('green')
      }
   
       }
    
    return(
        <div className="power-btn-ctnr">
            <button className="power-btn data-cy=pwrbtn"
             style={{background:color}}
                onClick={toggleBtn}>   
                {toggle?'Stop': 'Start'}
            </button>
        </div>
    );

    }
export default StartStop;