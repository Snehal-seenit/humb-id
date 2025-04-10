import React from 'react'; // Import React to resolve JSX scope issue
import Head from "next/head";
import AboutSection from "../components/about/about-section";
import Breadcrumb from "../components/about/breadcrumb";
import TeamSection from "../components/about/team-section";
import FaqSection from "../components/common/faq/faq-section";
import MissionVision from "../components/about/mission-vision";

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>HUMB - about us</title>
			</Head>
			<Breadcrumb />
			<AboutSection />
			<MissionVision />
			{/* Uncomment and use these components if needed */}
			{/* <FeatureOneSection /> */}
			{/* <VideoSectionThree /> */}
			{/* <CounterOneSection /> */}
			<FaqSection />
			<TeamSection />
			{/* <ClientSliderTwo /> */}
		</>
	);
}
