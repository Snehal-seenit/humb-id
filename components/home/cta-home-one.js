/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function CtaHomeOne() {
	return (
		<div className="fugu-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-default-content large-content">
							<h2>Download Mobile app</h2>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="fugu-cta-app-btn-wrap">
							<Link href="https://apps.apple.com/us/app/humb/id6737500757" legacyBehavior>
								<a className="fugu-app-btn wow fadeInUpX" data-wow-delay="0s" target="_blank" 
    rel="noopener noreferrer">
									<img src="/images/all-img/app-store.png" alt="" />
								</a>
							</Link>
							<Link href="https://play.google.com/store/apps/details?id=com.humb.humbnow&pcampaignid=web_share" legacyBehavior>
								<a className="fugu-app-btn wow fadeInUpX" data-wow-delay=".20s" target="_blank" 
    rel="noopener noreferrer">
									<img src="/images/all-img/play-store.png" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
