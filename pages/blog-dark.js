import React from 'react'; // Import React to resolve JSX scope issue
import BlogDarkInnerSection from "../components/blog-dark/blog-dark-inner-section";

export default function BlogDark() {
	return <BlogDarkInnerSection />;
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
