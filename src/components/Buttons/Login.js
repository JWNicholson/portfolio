import React, { useState } from 'react';

export default function Login() {
    
    const [color, setColor] = useState('#f6511dff');
    const [toggle, setToggle] = useState(false);

     //onClick function to change button background:color and provide True or False to toggle button text
     const toggleBtn=()=> {
         setToggle(!toggle)
         if(toggle === false){
             setColor('#693009')
         }else{
             setColor('#f6511dff')
         }
     }

    return (
        <div>
            <div className="nav-item login-btn-ctnr">
                <button className="login-btn" data-cy="loginbtn"
                style={{background:color}}
                onClick={toggleBtn}
                >
                    {toggle ? 'Log out' : 'Log in'}
                </button>
            </div>
        </div>
    )
}
