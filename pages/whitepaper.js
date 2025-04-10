// /* eslint-disable react/no-unescaped-entities */
// export default function Whitepaper() {
// 	return (
// 		<div className="section">
// 			<div className="container">
// 				<div className="fugu-error-content wow fadeInUpX">
// 					<h1>WhitePaper</h1>
					
// 					<p>
// 						The page you're looking for can't be found. Double-check the URL and try again. we invite you to
// 						visit our homepage.
// 					</p>
// 					<a className="fugu-btn small-btn" href="">
// 						Go To Homepage
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export async function getStaticProps() {
// 	return { props: { header: "onell      ", footer: "one" } };
// }

import React from 'react';
import WhitepaperSection from "../components/whitepaper/whitepaper-section";
import WhitepaperCrumbSection from "../components/whitepaper/whitepaperCrumb-section";

export default function Whitepaper() {
	return (
		<>
			<WhitepaperCrumbSection />
			<WhitepaperSection />
		</>
	);
}
