import React from 'react';

import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaSass,
    FaNode,
    FaPython,
}from 'react-icons/fa'

export default function homePage() {
    return (
        <section className="home-page-ctnr row">
            <section className="about-me">
                
                <div className="profile-img-ctnr">
                
                <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="my img placeholder"/>
                </div>
                <div className="my-info">
                <h3>About Me</h3>
                <p>
                Spiff up your work with our random beer Lorem Ipsum generator. Designs can be incomplete without text to fill them and normal placeholder text (filler text) can be boring. Give your designs that extra buzz by using something thats been around as long as people have. Beer! 
                </p>
                
                <div className="skills-section">

                <h4>Skills</h4>
                <div className="skill-badges-cntr">
                    <div className="skill-badge react"><FaReact size={42}  /></div>
                    <div className="skill-badge html5"><FaHtml5 size={42}/></div>
                    <div className="skill-badge css3"><FaCss3 size={42}/></div>
                    <div className="skill-badge sass"><FaSass size={42}/></div>
                    <div className="skill-badge node"><FaNode size={42}/></div>
                    <div className="skill-badge express"><em>Express JS</em></div>
                    <div className="skill-badge python"><FaPython size={42}/></div>
                    <div className="skill-badge mysql">MySql</div>
                    
                   </div>
                   </div>
                  </div> 
            
            </section>

            <section className="home-page-main-content">

                <section className="content-card">
                <h2>Something Good Here</h2>
                <img src="https://images.unsplash.com/photo-1507049287156-210a14f80685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1865&q=80" alt="cloudy sunrise"/>

                <p>
                Now and then, a gentle Honey Brown pees on a crazy Sierra Nevada. The pit viper is plowed. Furthermore, a fat Home brew beams with joy, and the miller inside the colt 45 avoids contact with a tanked Rolling Rock. For example, a Hoptoberfest around a malt indicates that a tornado brew falls in love with a wasted hops. Sometimes the gratifying stein ruminates, but a Hefeweizen always gives lectures on morality to a Hops Alligator Ale about a booze!
                </p>
                <button><a href="/gameoflife">Check it out</a></button>
                </section>

                <section className="content-card">
                <h2>Something Good Here</h2>
                <img src="https://images.unsplash.com/photo-1541742410245-c2653591f8d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80" alt="overlook bench"/>

                <p>
                Now and then, a gentle Honey Brown pees on a crazy Sierra Nevada. The pit viper is plowed. Furthermore, a fat Home brew beams with joy, and the miller inside the colt 45 avoids contact with a tanked Rolling Rock. For example, a Hoptoberfest around a malt indicates that a tornado brew falls in love with a wasted hops. Sometimes the gratifying stein ruminates, but a Hefeweizen always gives lectures on morality to a Hops Alligator Ale about a booze!
                </p>
                <button><a href="/nasapic">Check it out</a></button>
                </section>

                <section className="content-card">
                <h2>Something Good Here</h2>
                <img src="https://images.unsplash.com/photo-1542317426-11e12eff91bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80" alt="autumn trees"/>

                <p>
                Now and then, a gentle Honey Brown pees on a crazy Sierra Nevada. The pit viper is plowed. Furthermore, a fat Home brew beams with joy, and the miller inside the colt 45 avoids contact with a tanked Rolling Rock. For example, a Hoptoberfest around a malt indicates that a tornado brew falls in love with a wasted hops. Sometimes the gratifying stein ruminates, but a Hefeweizen always gives lectures on morality to a Hops Alligator Ale about a booze!
                </p>
                <button><a href="/weather">Check it out</a></button>
                </section>
                
            </section>
        </section>
    )
}
