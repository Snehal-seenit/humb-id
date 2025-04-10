import React from 'react'; // Import React to resolve JSX scope issue
import BlogInnerSection from "../components/blog-dark-sidebar/blog-inner-section";

export default function BlogDarkSidebar() {
	return <BlogInnerSection theme="dark" />;
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
