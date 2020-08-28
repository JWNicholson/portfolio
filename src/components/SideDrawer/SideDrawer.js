import React from 'react';

const sideDrawer = props => {
    let drawerClass = 'side-drawer';

    if (props.show) {
        drawerClass = 'side-drawer open'
    };

    return(
        <nav className={drawerClass} test-id="side-drawer">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact Me</a></li>
                <li>
                    <div className="side-drawer-dropdown" test-id="side-drawer-dropdown">
                    <button className="side-drawer-dropdown-btn">Projects</button>
                    <div className="side-drawer-dropdown-content">
                        <a href="/nasapic">NASA Pic Of The Day</a>
                        <a href="/gameoflife">Game Of Life</a>
                        <a href="/weather">Weather App</a>
                    </div>
                    </div>  
                </li>             
            </ul>
        </nav>
    );
};

export default sideDrawer;

