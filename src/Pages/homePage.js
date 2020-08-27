import React from 'react';

import GOLimg from '../assets/jwn-game-of-life.jpg';
import MilkyWay from '../assets/MilkyWaySaltFlat.jpg'

import { FaReact, FaHtml5, FaCss3, FaSass, FaNode, FaPython } from 'react-icons/fa';

export default function homePage () {
	return (
		<section className="home-page-ctnr row">
			<section className="about-me">
				<div className="profile-img-ctnr">
					<img
						src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"
						alt="my img placeholder"
					/>
				</div>
				<div className="my-info">
					<h3>About Me</h3>
					<p>
						Spiff up your work with our random beer Lorem Ipsum generator. Designs can be incomplete without
						text to fill them and normal placeholder text (filler text) can be boring. Give your designs
						that extra buzz by using something thats been around as long as people have. Beer!
					</p>

					<div className="skills-section">
						<h4>Skills</h4>
						<div className="skill-badges-cntr">
							<div className="skill-badge react">
								<FaReact size={42} />
							</div>
							<div className="skill-badge html5">
								<FaHtml5 size={42} />
							</div>
							<div className="skill-badge css3">
								<FaCss3 size={42} />
							</div>
							<div className="skill-badge sass">
								<FaSass size={42} />
							</div>
							<div className="skill-badge node">
								<FaNode size={42} />
							</div>
							<div className="skill-badge express">
								<em>Express JS</em>
							</div>
							<div className="skill-badge python">
								<FaPython size={42} />
							</div>
							<div className="skill-badge mysql">MySql</div>
						</div>
					</div>
				</div>
			</section>

			<section className="home-page-main-content">
				<section className="content-card">
					<h2>John Conway's Game Of Life</h2>
					<img src={GOLimg} alt="game of life jwns version" />

					<div className="card-content-ctnr">
						<p>
							The Game Of Life is a simulation developed in 1970 by mathematician John Conway. It applies
							rules to create Cellular Automation. Cellular Automation is a grid of cells that cycle
							through different states. It is "Turing Complete".Turing Complete means it can manipulate
							data-manipulation rule sets.
						</p>

						<a href="/gameoflife" className="card-btn">
							Check it out
						</a>
					</div>
				</section>

				<section className="content-card">
					<h2>NASA's Astronomy Picture Of The Day</h2>
					<img
						src={MilkyWay}
						alt="nasa pic of day"
					/>

					<p>
						This was a fun project built with ReactJS hooks, the moment plugin, and the Axios API promised based client.
					</p>
					<p>
						One the important things I learned during this project was the importance of React's Effect hook for handling side effects. Without it, an API request can enter an infinite loop. My request rate to NASA's servers hit the maximum very fast, locking me out. I fixed that by using useEffect() in addition to using an API key. Having an API key raises the amount of requests you can make.
					</p>
					<a href="/nasapic" className="card-btn">
						Check it out
					</a>
				</section>

				<section className="content-card">
					<h2>Something Good Here</h2>
					<img
						src="https://images.unsplash.com/photo-1542317426-11e12eff91bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
						alt="autumn trees"
					/>

					<p>
						Now and then, a gentle Honey Brown pees on a crazy Sierra Nevada. The pit viper is plowed.
						Furthermore, a fat Home brew beams with joy, and the miller inside the colt 45 avoids contact
						with a tanked Rolling Rock. For example, a Hoptoberfest around a malt indicates that a tornado
						brew falls in love with a wasted hops. Sometimes the gratifying stein ruminates, but a
						Hefeweizen always gives lectures on morality to a Hops Alligator Ale about a booze!
					</p>
					<a href="/weather" className="card-btn">
						Check it out
					</a>
				</section>
			</section>
		</section>
	);
}
