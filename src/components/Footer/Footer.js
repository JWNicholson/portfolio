import React from 'react';

import Clock from '../Clock/Clock';

import { 
    FaLinkedin, 
    FaGithubSquare, 
    FaBehanceSquare 
    } from 'react-icons/fa'


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
                    <p>Email</p>
                    
                </div>

                <div className="main-footer-irem">
                <p className="footer-clock"><Clock /></p>
                </div>
            </section>

            <section className="social-footer">
                <ul className="social-list">
                    <li>
                        <a href="/"><FaLinkedin /></a>
                        <a href="/"><FaGithubSquare /></a>
                        <a href="/"><FaBehanceSquare  /></a>
                    </li>
                </ul>
            </section>

            <section className="legal-footer">
                <div className="footer-legal-list">
                    <p>&copy; {newDate} John Nicholson</p>
                </div>
            </section>
        </footer>
    )
}