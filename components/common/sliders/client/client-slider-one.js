import React from 'react';
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";

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
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	return (
		<div className="fugu-client-section bg-gray-800">
			<div className="container">
				<div className="fugu-client-title text-white">
					<h5 style={{color:"#DCDCDC"}}>Our Partners</h5>
				</div>
				<div className="fugu-client-slider">
					<Slider {...settings}>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/WhiteBit - Exchange partner png logo.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
						<img src="/images/all-img/Marquee Equity - Finance Partner png logo.png" alt="" />

						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/SeenIT - Technology Partner png logo.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/Maticz - Development Partner png logo.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
						<img src="/images/all-img/Changely - Swap partner png logo.png" alt="" />
						</div>
						<div className="fugu-brand-logo">
							<img src="/images/all-img/Fireblocks - Wallet Security Partner png logo.png" alt="" />
						</div>
						<div className="fugu-brand-logo ml-0 ml-4">
							<img src="/images/all-img/Synaps - Regulatory partner png logo.png" alt="" />
						</div>
						
					</Slider>
				</div>
			<div style={{color:"#fff",textAlign:"center"}}>
			<h4 style={{color:"#DCDCDC",marginTop:"2rem"}}>Reimagine Crypto Trading</h4>
				<p style={{color:"#A1A1AAC"}}>The Exchange That Shares Profits!
We’re the world’s first healthcare-focused crypto exchange distributing 14% profits with our registered HUMB traders like you. Trade confidently while earning passive rewards.
</p>
			</div>
			</div>
		</div>
	);
}
