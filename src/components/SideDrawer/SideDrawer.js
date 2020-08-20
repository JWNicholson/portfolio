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
                <li><a href="/">Projects</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;

