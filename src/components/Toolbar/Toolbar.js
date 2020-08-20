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
                    <li><a href="/">Projects</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;