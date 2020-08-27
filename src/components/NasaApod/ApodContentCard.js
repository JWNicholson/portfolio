import React from 'react';

const ApodContentCard = (props) => {
	return (
		<div className="main-nasa-wrapper">
			<div className="nasa-img-ctnr">
				<h2>{props.title}</h2>
				{/* check if url prop exists. If no, render message instead */}
				{props.url ? (
					<img src={props.url} alt="NASA astronomy pic of the day" />
				) : (
					<p>
						<strong>
							<em>Couldn't find anything. Try again later.</em>
						</strong>
					</p>
				)}

				<div className="nasa-image-copyright">
					{/* check if copyright element exists if no, render nothing here */}
					{props.copyright ? <p>&copy; {props.copyright}</p> : ''}
				</div>

				<div className="image-date">
					{/* props date */}
					<h4>Date: {props.date}</h4>
				</div>
			</div>{' '}
			{/** end nasa-img-ctnr */}
			<div className="explanation-text-ctnr">
				{/* props explanation text */}
				<p className="explanation-text">{props.explanation}</p>
			</div>
		</div>
	);
};

export default ApodContentCard;
