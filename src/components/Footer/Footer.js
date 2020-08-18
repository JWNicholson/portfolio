import React from 'react';

import Clock from '../Clock/Clock';


export default function Footer () {
    let newDate = new Date().getFullYear();
   
    return (
        
        <footer>
            <section className="main-footer">
                <div className="main-footer-item">
                    <h2>John Nicholson</h2>
                    <h4>Full Stack Developer</h4>
                </div>

                <div className="main-footer-item">
                    <h2 className="main-footer-title">
                        About Me
                    </h2>
                    {/* <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul> */}

                     <div className="footer-about-links">
                     <a href="/">Home</a>
                     <a href="/">Projects</a>
                     <a href="/">Blog</a>
                     </div>
                </div>
                <div className="main-footer-item">
                    <h2 className="main-footer-title">
                        Contact Me
                    </h2>
                    <ul>
                        <li>Email</li>
                        <li className="footer-clock"><Clock /></li>
                    </ul>
                </div>
            </section>

            <section className="social-footer">
                <ul className="social-list">
                    <li>
                        <a href="/">Linked In</a>
                        <a href="/">Git Hub</a>
                        <a href="/">Behance</a>
                    </li>
                </ul>
            </section>

            <section className="legal-footer">
                <ul className="footer-legal-list">
                    <li>&copy; {newDate} John Nicholson</li>
                </ul>
            </section>
        </footer>
    )
}