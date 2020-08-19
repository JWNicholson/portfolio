import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';

import LoginBtn from '../Buttons/Login';

export default class Nav extends Component {
    render() {
        return (
<nav>
    <ul class="top-menu">
        <li class="logo"><a href="/">John Nicholson<br></br><small>Full Stack Devleoper</small></a></li>
        <li class="top-nav-item"><a href="/">Home</a></li>
        <li class="top-nav-item"><a href="/">Contact me</a></li>
        <li class="top-nav-item"><a href="/">Blog</a></li>
        <li class="top-nav-item has-submenu">
            <a tabindex="0">Projects</a>
            <ul class="top-nav-submenu">
                <li class="top-nav-subitem"><a href="/">Conway's Game Of Life</a></li>
                <li class="top-nav-subitem"><a href="/">NASA pic of the day</a></li>
                <li class="top-nav-subitem"><a href="/">Prisoner Skills</a></li>
            </ul>
        </li>
 
        <LoginBtn />
      
        <li class="toggle"><a href="/"><FaBars /></a></li>
    </ul>
</nav>
            
        )
    }
}
