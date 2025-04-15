import PropTypes from 'prop-types'; // For prop validation
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function SingleCardSliderTwo({ card }) {
	const [isDarke, setIsDarke] = useState(false);

	// Provide default values to avoid accessing undefined properties
	const {
		img = 'default-image', // Fallback image
		title = 'Untitled', // Default title
		eth = 0, // Default ETH value
		name = 'Anonymous', // Default name
		hart = 0, // Default heart count
	} = card || {}; // Use an empty object if card is undefined

	return (
		<div className="fugu--card-wrap fugu--card2">
			<div className="fugu--card-thumb">
				<img src={`/images/all-img/v4/${img}.jpg`} alt={title} />
			</div>
			<div className="fugu--card-data">
				<h3>{title}</h3>
				<p>
					<img src="/images/all-img/v4/daimond.png" alt="diamond" /> {eth} ETH
				</p>
				<div className="fugu--card-footer">
					<div className="fugu--card-footer-data">
						<h4>{name}</h4>
					</div>
					<button
						className={`fugu--btn btn-sm fugu--tigger ${isDarke ? "dark-btn" : ""}`}
						onClick={() => setIsDarke(!isDarke)}
						type="button"
					>
						<img className="black-heart" src="/images/svg2/heart-black.svg" alt="black heart" />
						<img className="red-heart" src="/images/svg2/heart-red.svg" alt="red heart" /> {hart}
					</button>
				</div>
			</div>
		</div>
	);
}

// Prop validation
SingleCardSliderTwo.propTypes = {
	card: PropTypes.shape({
		img: PropTypes.string,
		title: PropTypes.string,
		eth: PropTypes.number,
		name: PropTypes.string,
		hart: PropTypes.number,
	}).isRequired,
};
