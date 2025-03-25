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
			<h2>Tokenomics</h2>
			<h3>(Token Distribution)</h3>
			<div>
				<h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>1) Future Profit and Staking Rewards (6%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>Allocated for rewarding stakers and generating future profits.</span><hr />
				<hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>2) Profit Share (14%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>A significant portion dedicated to sharing profits, possibly for stakeholders or revenue distribution.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>3) Reserve Pool (15%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>This is meant for investments in healthcare-related projects and tokens.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>4) Investors (15%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>Reserved for investors backing the project.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>5) Management (10%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>Allocated to the team managing HUMB.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>6) Community Development (10%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>To support and grow the HUMB community.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>7) Launchpad Subsidies (6%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}> Used to support the launch and adoption of the token.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>8) Advisors (8%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>Set aside for advisory teams helping in project strategy.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>9) Influencer Marketing (8%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}>Used to promote HUMB through influencers.</span>
				<hr /><hr /><h6 style={{margin:"1rem 0",marginBottom:"0"}}><b style={{color:"#DCDCDC"}}>10) Listing Partners (8%)</b></h6><span style={{color:"#A1A1AA", fontSize:"1rem"}}> Allocated for exchange listings and strategic partnerships.</span>
				<hr /><hr /><p><b>The token price at launch is $0.25 per HUMB, and the total supply is 5 billion tokens.</b></p>
			
			</div>
			</div>
			<div className="col-lg-6">
				<img src="/id/images/all-img/humb-token.png" alt="token-img" />
			</div>
			</div>

				</div>
				</div>
		</>
	);
}
