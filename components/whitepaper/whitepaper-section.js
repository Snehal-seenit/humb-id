import React from "react";

import WhitepaperPost from "./whitepaper-post";
export default function WhitepaperSection() {
	return (
		<div className="fugu-blog-section fugu-section-padding">
			<div className="container">
				<div className="row">
					<WhitepaperPost />
					{/* <WhitepaperSidebarSection /> */}
				</div>
			</div>
		</div>
	);
}
