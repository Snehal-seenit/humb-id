/* eslint-disable @next/next/no-img-element */

export default function ContentWithPhotoSectionTwo() {
	return (
		<div className="section bg-warning-300 fugu-section-padding z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div
							className="fugu-apps-thumb fugu-apps-thumb2"
							id="rotatethree"
							style={{ transform: "rotate(0deg)" }}
						>
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/app_rateing.png"
								alt=""
							/>
						</div>
						<div className="fugu-btn-wrap mb-4">
								<a href="https://apps.apple.com/us/app/humb/id6737500757" className="fugu-app-btn wow fadeInUpX border" data-wow-delay="0s" target="_blank" rel="noopener noreferrer">
									<img src="/images/all-img/app-store.png" alt="" />
								</a>
								<a href="https://play.google.com/store/apps/details?id=com.humb.humbnow&pcampaignid=web_share" className="fugu-app-btn wow fadeInUpX border" data-wow-delay=".20s" target="_blank" rel="noopener noreferrer">
									<img src="/images/all-img/play-store.png" alt="" />
								</a>
								</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Get Started With HUMB in 3 Simple Steps! </h2>
							<small className="fw-normal">
								Become a better investor on the go, right in the app. Join a new generation of crypto
								investors. Easy interface to create an account.
							</small>
							<div className="fugu-icon-list">
								<ul>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/download.svg" alt="" />
										</div>
										<p className="mb-0">Download the HUMB App
										</p>
										<small className="fw-normal">Get the <b>HUMB Exchange</b> app from the official website and start your journey in <b>healthcare-focused crypto trading!</b></small>
									</li>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/link.svg" alt="" />
										</div>
										<p className="mb-0">Register & Create Your Account</p>
										<small className="fw-normal">Sign up in just a few clicks and become a part of the <b>next-gen blockchain revolution in healthcare!</b></small>
									</li>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/lightning-bolt.svg" alt="" />
										</div>
										<p className="mb-0">Complete KYC</p>
										<small className="fw-normal">Verify your identity quickly to ensure a <b>secure and seamless trading experience.</b></small>
									</li>
								</ul>
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
