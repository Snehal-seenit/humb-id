import React from "react";
import WhitepaperPost from "./whitepaper-post";
import WhitepaperSidebarSection from "./whitepaper-sidebar-section";

export default function WhitepaperSection() {
	return (
		<div className="fugu-blog-section fugu-section-padding">
			<div className="container">
				<div className="row">
					<WhitepaperPost />
					<WhitepaperSidebarSection />
				</div>
			</div>
		</div>
	);
}
