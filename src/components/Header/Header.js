import React, { Component} from 'react';

import Nav from '../Nav/Nav';

export default class Header extends Component {
    render () {
        return(
            <>
            <header className="App-header">
                <Nav />
            </header>
        </>
        )
    }
}