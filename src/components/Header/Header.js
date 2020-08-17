import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Header () {
	const [
		isVisible,
		setIsVisible
	] = useState(true);
	const [
		isSmallScreen,
		setIsSmallScreen
	] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 700px)');
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = (mediaQuery) => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		}
		else {
			setIsSmallScreen(false);
		}
	};

	const toggleNav = () => {
		setIsVisible(!isVisible);
	};

	return (
		<header className="Header">
			<h1 className="Logo">
				John Nicholson <br />
				<small>Full Stack Devleoper</small>
			</h1>

			<CSSTransition in={!isSmallScreen || isVisible} timeout={350} classNames="NavAnimation" unmountOnExit>
				<nav className="Nav">
					<a href="/">Home</a>
					<a href="/">Articles</a>
					<a href="/">About</a>
				</nav>
			</CSSTransition>
			<button onClick={toggleNav} className="Burger">
				<svg viewBox="0 0 100 80" width="40" height="40">
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
				</svg>
			</button>
		</header>
	);
}
