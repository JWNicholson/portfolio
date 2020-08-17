import React, { Component } from 'react';

export default class Header extends Component {
	render () {
		return (
			<div>
				<header className="App-header">
					<navbar>
						<div className="logo-container">
							<a href="/">
								<h1 className="headerH1">John Nicholson</h1>
								<p>
									<small>Full Stack Developer</small>
								</p>
							</a>
						</div>
						<ul className="navlist">
							<li className="navlist-item">
								<a href="/">Home</a>
							</li>
							<li className="navlist-item">
								<a href="/">Projects</a>
							</li>
							<li className="navlist-item">
								<a href="/">Contact Me</a>
							</li>
						</ul>
					</navbar>
				</header>
			</div>
		);
	}
}
