import React from 'react';
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ContentWithPhotoSection() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2 z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-apps-thumb" id="rotatetwo">
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/product_image3.png" 
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>HUMB Platform Features</h2>
							<div className="fugu-icon-list">
								<ul>
									<li>
										<img src="/images/svg/new_icons-06.png" alt="" />
										<p className="mb-0">HUMB Native Token</p>
										<small className="fw-normal"> Lower fees & exclusive rewards.</small>
									</li>
									<li>
										<img src="/images/svg/new_icons-07.png" alt="" />
										<p className="mb-0">HUMB Launchpad</p>
										<small className="fw-normal">Get early access to upcoming crypto projects.</small>
									</li>
									<li>
										<img src="/images/svg/new_icons-08.png" alt="" />
										<p className="mb-0">HUMB Secure Wallets</p>
										<small className="fw-normal">Store and manage your assets securely.</small>
									</li>
									<li>
										<img src="/images/svg/new_icons-09.png" alt="" />
										<p className="mb-0">HUMB Staking Program</p>
										<small className="fw-normal">Participate in our staking program to earn passive income on your holdings. By staking your HUMB tokens, but you also receive attractive rewards over time.</small>
									</li>
								</ul>
							</div>
							<div className="fugu-btn-wrap">
								<Link href="https://app.humb.io/" legacyBehavior >
									<a className="fugu-btn" target="_blank">Start Trading Today</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu-shape3">
				<img src="/images/shape/background_1.png" alt="" />
			</div>
		</div>
	);
}
