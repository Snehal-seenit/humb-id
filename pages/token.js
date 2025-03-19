import Head from "next/head";

import Breadcrumb from "../components/token/breadcrumb";
export default function Token() {
	return (
		<>
			<Head>
				<title>HUMB - Token</title>
			</Head>
			<Breadcrumb />
			<div className="fugu-about-section">
			<div className="container m-auto text-left">
			<div className="row">
			<div className="col-lg-6">
			<h2>Tokenomics (Token Distribution)</h2>
			<div>
				<h6><b>1) Future Profit and Staking Rewards (6%)</b></h6><span>Allocated for rewarding stakers and generating future profits.</span>
				<h6><b>2) Profit Share (14%)</b></h6><span>A significant portion dedicated to sharing profits, possibly for stakeholders or revenue distribution.</span>
				<h6><b>3) Reserve Pool (15%)</b></h6><span>This is meant for investments in healthcare-related projects and tokens.</span>
				<h6><b>4) Investors (15%)</b></h6><span>Reserved for investors backing the project.</span>
				<h6><b>5) Management (10%)</b></h6><span>Allocated to the team managing HUMB.</span>
				<h6><b>6) Community Development (10%)</b></h6><span>To support and grow the HUMB community.</span>
				<h6><b>7) Launchpad Subsidies (6%)</b></h6><span> Used to support the launch and adoption of the token.</span>
				<h6><b>8) Advisors (8%)</b></h6><span>Set aside for advisory teams helping in project strategy.</span>
				<h6><b>9) Influencer Marketing (8%)</b></h6><span>Used to promote HUMB through influencers.</span>
				<h6><b>10) Listing Partners (8%)</b></h6><span> Allocated for exchange listings and strategic partnerships.</span>
				<p>The token price at launch is $0.25 per HUMB, and the total supply is 5 billion tokens.</p>
			
			</div>
			</div>
			<div className="col-lg-6">
				<img src="/images/all-img/humb-token.png" alt="token-img" />
			</div>
			</div>

				</div>
				</div>
		</>
	);
}
