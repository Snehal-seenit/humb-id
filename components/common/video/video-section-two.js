/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionTwo() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="section bg-warning-400 fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-1 order-lg-2">
						<div className="fugu-video-thumb wow fadeInUpX" data-wow-delay=".20s">
							<img src="/images/all-img/video-thumb.png" alt="" />
							<div className="fugu-popup">
								<img src="/images/all-img/video-btn.png" alt="" />
								<div className="fugu-play-btn" onClick={() => setOpen(true)}>
									<img src="/images/all-img/play-btn.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Why Choose Us?</h2>
							{/* <p>
								You can easily buy, sell, store, and transfer cryptocurrency in one place. Get the right
								to buy or sell stocks at a specific date for a specific price. No commissions here
								either.
							</p> */}
							<div className="fugu-icon-list">
								<ul>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										<p className="mb-0">Low Trading Fees</p>
										<small className="fw-normal">Maximize your profits with the lowest transaction costs.</small>
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										<p className="mb-0">Fast & Secure</p>
										<small className="fw-normal">Instant trade execution with bank-level security.</small>
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										<p className="mb-0">User-Friendly Interface</p>
										<small className="fw-normal">Designed for beginners & professionals.</small>
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										<p className="mb-0">Powerful Trading Tools</p>
										<small className="fw-normal">Real-time market data, advanced charts & analytics.</small>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="fugu-btn-wrap"><a class="fugu-btn" href="https://app.humb.io">Explore Trading Features</a></div>
			
			
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
