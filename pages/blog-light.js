import React from 'react'; // Import React to resolve JSX scope issue
import BlogInnerSection from "../components/blog-light/blog-inner-section";

export default function BlogLight() {
	return <BlogInnerSection />;
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
