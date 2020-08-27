import React from 'react';

const ApodContentCard = (props) => {
	return (
		<div className="main-nasa-apod-wrapper">
            <div className="nasa-h1-ctnr">
            <h1>NASA's Astronomy Picture Of The Day</h1>
            </div>
			<div className="nasa-img-ctnr content-card">
				<h2 className="nasa-img-title">{props.title}</h2>
				{/* check if url prop exists. If no, render message instead */}
				{props.url ? (
                    <div className="apod-img-ctnr">
					<img src={props.url} alt="NASA astronomy pic of the day" />
                    </div>
				) : (
					<p className="nasa-error-msg">
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
