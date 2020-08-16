import React, { useState } from 'react';

const StartStop=()=>{
   
    const [color, setColor] = useState('green')
    const [toggle, setToggle] = useState(false);

  
    
   const toggleBtn=()=> {
        setToggle(!toggle)
      if(toggle === false){
          console.log('false')
          setColor('red')

      }else{
          setColor('green')
      }
   
       }
    


    return(
        <div className="power-btn">
           
            <button 
             style={{background:color}}
                onClick={toggleBtn }>
                {toggle?'Stop': 'Start'}
                
             
            </button>
        </div>
    );

    }
export default StartStop;