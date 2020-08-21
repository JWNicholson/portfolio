import React from 'react';

const sideDrawer = props => {
    let drawerClass = 'side-drawer';

    if (props.show) {
        drawerClass = 'side-drawer open'
    };

    return(
        <nav className={drawerClass}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact Me</a></li>
                <li>
                    <button className="side-drawer-dropdown-btn">Projects</button>
                </li>
                {/* <li><a href="/">Projects</a></li> */}
                {/* <li><h3>Projects</h3>
                    <ul>
                        <li><a href="/nasapic">NASA Pic Of The Day</a></li>
                        <li><a href="/gameoflife">Game Of Life</a></li>
                        <li><a href="weather">Weather App</a></li>
                    </ul> 
                </li>*/}

              
            </ul>
        </nav>
    );
};

export default sideDrawer;

