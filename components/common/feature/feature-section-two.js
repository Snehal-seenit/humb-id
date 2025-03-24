import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FeatureSectionTwo() {
	return (
		<div className="section bg-warning-400 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h2>Why Choose HUMB?</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon">
								
								<img src="/images/all-img/icons for website 2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Low Fees:</h4>
								<p>
									Trades get to keep more profits with ultra-low transaction fees.
								</p>
								{/* <Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link> */}
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon">
							<img src="/images/all-img/icons for website.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Fast and Secure Transactions: </h4>
								<p>
								Enjoy bank-level security with instant trade execution.
								</p>
								{/* <Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link> */}
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon.png" alt="" />

							</div>
							<div className="fugu-iconbox-data">
								<h4>User-Friendly Platform:</h4>
								<p>
									Designed for both novice and professional traders.
								</p>
								{/* <Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link> */}
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".40s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icons for humb website 22-01.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Real-Time Market Insights:</h4>
								<p>
								Get instant access to price updates & analytics.
								</p>
								{/* <Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
