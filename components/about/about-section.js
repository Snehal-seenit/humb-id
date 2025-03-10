/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
	return (
		<div className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-7 col-lg-6">
						<div className="fugu-about-thumb">
							<img
								className="wow fadeInLeft"
								data-wow-delay=".10s"
								src="/images/all-img/about/about-thumb1.png"
								alt=""
							/>
							<div className="fugu-about-thumb2">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".30s"
									src="/images/all-img/about/about-thumb2.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2>Empowering Indonesia’s Crypto Traders with a Next-Gen Exchange</h2>
							<p>
								At HUMB, we're not just building a crypto exchange; we're building a community. We believe that success in the crypto world should be shared, and that's why we've created a platform that puts traders first. We're driven by a vision of a more equitable and transparent financial future, and we're committed to empowering our users every step of the way.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
