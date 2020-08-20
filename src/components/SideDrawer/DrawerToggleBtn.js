import React from 'react';

const drawerToggleBtn = props => (
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn-bar"></div>
        <div className="toggle-btn-bar"></div>
        <div className="toggle-btn-bar"></div>
    </button>

);

export default drawerToggleBtn;
