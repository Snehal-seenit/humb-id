import React from 'react';
import FaqAccordionFour from "../components/common/faq/faq-accordion-four";
import BreadcrumbSection from "../components/contact-us/breadcrumb-section";
import ContactFormSection from "../components/contact-us/contact-form-section";
import CommunicationSection from "./../components/contact-us/communication-section";

export default function ContactUs() {
	return (
		<div>
			<BreadcrumbSection />
			<ContactFormSection />
			{/* <CommunicationSection />
			<FaqAccordionFour /> */}
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
