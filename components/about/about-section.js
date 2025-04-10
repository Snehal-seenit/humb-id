/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Swiper-related components (client-side only)
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), {
	ssr: false,
});
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), {
	ssr: false,
});

// Import Swiper modules
import { EffectCards } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

export default function AboutSection() {
	return (
		<div data-testid="header">
			<div className="fugu-about-section">
				<div className="container">
					<div className="row">
						{/* Left - Swiper card image effect */}
						<div className="col-xl-5 col-lg-6">
							<div className="fugu-about-thumb pe-0">
								<Swiper
									effect="cards"
									grabCursor={true}
									modules={[EffectCards]}
									className="mySwiper"
									aria-label="About section image slides"
								>
									{[1, 2, 3].map((num) => (
										<SwiperSlide key={num}>
											<img
												src={`/images/all-img/about/about-thumb${num}.png`}
												alt={`About Slide ${num}`}
												loading="lazy"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>

						{/* Right - Text content */}
						<div className="col-xl-7 col-lg-6 col-md-11 d-flex align-items-center">
							<div className="fugu-default-content">
								<h2>
									Empowering Indonesia’s Crypto Traders with a Next-Gen Exchange
								</h2>
								<p>
									At HUMB, we're not just building a crypto exchange; we're building a community. We believe that success in the crypto world should be shared, and that's why we've created a platform that puts traders first. We're driven by a vision of a more equitable and transparent financial future, and we're committed to empowering our users every step of the way.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
