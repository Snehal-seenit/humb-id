import React from 'react';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
	return (
		<div className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						
                        <div className="fugu-default-content">
                        <h2>Our Vision & Mission</h2>
							<p>
                            <b>HUMB’s vision</b> is to bridge the gap between crypto world and traditional healthcare using blockchain technology, unlocking new opportunities for innovation, investment, and growth within the healthcare industry.
                            </p>
                            <p>
                            <b>Our mission</b> is to empower stakeholders across the healthcare ecosystem, from entrepreneurs and investors to healthcare providers and patients, by providing a secure, efficient, and transparent platform for healthcare tokenization, trading, and financing. We envision a ecosystem where every Doctor and every Patient can become a trader on HUMB and we will help and support the healthcare community in this endeavour.
                            </p>
						</div>
					</div>
					<div className="col-lg-5 d-flex align-items-center">
                    <div className="fugu-about-thumb pe-0">
                    <img
								className="wow fadeInLeft"
								data-wow-delay=".10s"
								src="/images/all-img/image of mission and vision-01.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
