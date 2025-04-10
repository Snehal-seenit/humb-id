import React from 'react';
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function FaqSection() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content">
							<h2>Our Values:</h2>
							<p>HUMB: Trade. Earn. Share.</p>
							{/* <Link href={"/contact"} legacyBehavior>
								<a className="fugu-faq-btn">Don't find the answer? Contact us here</a>
							</Link> */}
							<img src="/images/all-img/token.png" alt="token-img" />
						</div>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4>Transparency:</h4>
								<p>
									We believe in open communication and complete transparency in our operations and profit-sharing model.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Community:</h4>
								<p>
								We're building a vibrant community of traders who support and learn from each other.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Innovation:</h4>
								<p>
								We're constantly innovating and improving our platform to provide the best possible trading experience.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Security:</h4>
								<p>
								We prioritize the security of our users' assets and data above all else.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Empowerment:</h4>
								<p>
								We're dedicated to empowering traders with the tools and resources they need to succeed.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
