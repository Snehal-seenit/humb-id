/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ClientSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: false,
		responsive: [
			{ breakpoint: 1199, settings: { slidesToShow: 4 } },
			{ breakpoint: 991, settings: { slidesToShow: 3 } },
			{ breakpoint: 767, settings: { slidesToShow: 2 } },
		],
	};

	return (
		<div className="fugu-client-section bg-gray-800">
			<div className="container">
				<div className="fugu-client-title text-white">
					<h5 style={{ color: "#DCDCDC" }}>Our Partners</h5>
				</div>

				<div className="fugu-client-slider">
					<Slider {...settings}>
						{[
							"WhiteBit - Exchange partner png logo",
							"Marquee Equity - Finance Partner png logo",
							"SeenIT - Technology Partner png logo",
							"Maticz - Development Partner png logo",
							"Changely - Swap partner png logo",
							"Fireblocks - Wallet Security Partner png logo",
							"Synaps - Regulatory partner png logo",
						].map((img, i) => (
							<div className="fugu-brand-logo" key={i}>
								<img src={`/images/all-img/${img}.png`} alt={img} />
							</div>
						))}
					</Slider>
				</div>

				<div style={{ color: "#fff", textAlign: "center" }}>
					<h4 style={{ color: "#DCDCDC", marginTop: "2rem" }}>Reimagine Crypto Trading</h4>
					<p style={{ color: "#A1A1AAC" }}>
						The Exchange That Shares Profits!
						<br />
						We’re the world’s first healthcare-focused crypto exchange distributing 14% profits with our
						registered HUMB traders like you. Trade confidently while earning passive rewards.
					</p>
				</div>
			</div>
		</div>
	);
}
