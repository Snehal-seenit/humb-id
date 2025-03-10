import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FeatureSectionTwo() {
	return (
		<div className="section bg-warning-400 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h2>Why Choose Us?</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Low Fees:</h4>
								<p>
								Highlight competitive fee structures that benefit both casual and professional traders.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Fast and Secure Transactions: </h4>
								<p>
									Emphasize robust security measures and swift transaction processing times.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>User-Friendly Interface:</h4>
								<p>
									Showcase an intuitive platform design that caters to both beginners and seasoned traders.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".40s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon4.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Powerful Trading Tools:</h4>
								<p>
									Detail advanced charting tools, real-time market data, and customizable trading options.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
