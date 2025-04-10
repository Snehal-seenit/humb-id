/* eslint-disable react/no-unescaped-entities */
import React from 'react';
export default function CommingSoon() {
	return (
		<div className="section bg-black">
			<div className="container">
				<div className="fugu-error-content wow fadeInUpX">
					
					<h2>We are comming soon</h2>
					
					
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
