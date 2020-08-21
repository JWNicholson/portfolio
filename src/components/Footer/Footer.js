import React from 'react';

import Clock from '../Clock/Clock';

import { 
    FaLinkedin, 
    FaGithubSquare, 
    FaBehanceSquare ,
    FaHome,
    FaEnvelope
    } from 'react-icons/fa'


export default function Footer () {
    let newDate = new Date().getFullYear();
   
    return (
        
        <footer>
            <section className="main-footer">
                {/* <div className="main-footer-item">
                    <h2>John Nicholson</h2>
                    <h4>Full Stack Developer</h4>
                </div> */}

                <div className="main-footer-item">
                   
                  

                     <div className="footer-about-links">
                     <a href="/" className="fa-icon"><FaHome />  Home</a>
                     {/* <a href="/">Projects</a>
                     <a href="/">Blog</a> */}
                     </div>
                </div>
                <div className="main-footer-item">
                   <a href="/"> <h2 className="main-footer-title">
                        Contact Me &#160;&#160; <FaEnvelope />
                    </h2></a>
                    
                    
                </div>

                <div className="main-footer-item">
                <p className="footer-clock"><Clock /></p>
                </div>
            </section>

            <section className="social-footer">
                <ul className="social-list">
                    <li className="social-links">
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