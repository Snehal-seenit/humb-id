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
			<h2>HUMB Tokens</h2>
			<p>After a very successful Beta Test program and Private Pre-Sale event in Q4 2024, HUMB’s Native Token will be listed for $0.25/HUMB (USD) with a total supply capped at 5B.</p>
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
