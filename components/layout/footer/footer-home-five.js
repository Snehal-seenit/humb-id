/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeFive() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
					<div className="row">
						<div className="col-lg-3">
							<div className="fugu--textarea">
								<div className="fugu--footer-logo">
									<img src="/images/logo/logo-white.svg" alt="Logo" className="light-version-logo" />
								</div>
								<p>
									Discover NFTs by category, track the latest drops, and follow the collections you
									love to enjoy it!
								</p>
								<div className="fugu--social-icon fugu--social-icon3">
									<ul>
										{[
											{ icon: "twitter", alt: "Twitter" },
											{ icon: "facebook", alt: "Facebook" },
											{ icon: "instagram", alt: "Instagram" },
											{ icon: "github", alt: "GitHub" },
										].map((social, idx) => (
											<li key={idx}>
												<Link href="#" passHref legacyBehavior>
													<span>
														<img src={`/images/social2/${social.icon}.svg`} alt={social.alt} />
													</span>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-2 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								Marketplace
								<ul>
									{["Create A Store", "Start Selling", "My Account", "Job", "List a Item"].map(
										(text, idx) => (
											<li key={idx}>
												<Link href="#" passHref legacyBehavior>
													<span>{text}</span>
												</Link>
											</li>
										)
									)}
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								Categories
								<ul>
									{["Art", "Digital Art", "Photography", "Games", "Music"].map((text, idx) => (
										<li key={idx}>
											<Link href="#" passHref legacyBehavior>
												<span>{text}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								Contact
							</div>
							<div className="fugu--info">
								<ul>
									<li>
										<Link href="#" passHref legacyBehavior>
											<span>
												<img src="/images/svg2/mail.svg" alt="Email" /> example@gmail.com
											</span>
										</Link>
									</li>
									<li>
										<Link href="#" passHref legacyBehavior>
											<span>
												<img src="/images/svg2/map.svg" alt="Map" /> 6391 Elgin St. Celina, New
												York City.
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="fugu--footer-bottom fugu--footer-bottom3">
					<div className="row">
						<div className="col-lg-6">
							<p>&copy; {new Date().getFullYear()}, All Rights Reserved by Mthemeus</p>
						</div>
						<div className="col-lg-6">
							<div className="fugu--footer-menu">
								<ul>
									{["Terms", "Privacy Policy"].map((text, idx) => (
										<li key={idx}>
											<Link href="#" passHref legacyBehavior>
												<span>{text}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}


