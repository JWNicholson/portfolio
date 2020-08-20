import React from 'react';

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                <DrawerToggleBtn click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo" a href="/">John Nicholson</div>
            <div className="spacer"></div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact Me</a></li>
                    <li className="dropdown">
                        <button className="dropdown-btn">Projects</button>
                           <div className="dropdown-content">
                           <a href="/">NASA Pic Of The Day</a>
                           <a href="/">Game Of Life</a>
                           <a href="/">Prisoner Skills</a>
                           <a href="/">Labs Project</a>
                           <a href="/">Weather App</a>
                           </div>
                            
                            
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;