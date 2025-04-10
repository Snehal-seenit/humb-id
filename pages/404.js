import React from 'react'; // Import React (needed if not using React 17+ with the new JSX Transform)
import Link from 'next/link'; // Import Link from next/link

export default function ErrorPage() {
	return (
		<div className="section">
			<div className="container">
				<div className="fugu-error-content wow fadeInUpX">
					<h1>404</h1>
					<h2>Oops, this page is not found</h2>
					<p>
						The page you're looking for can't be found. Double-check the URL and try again. We invite you to
						visit our homepage.
					</p>
					{/* Replace <a> with <Link> */}
					<Link href="/">
						<a className="fugu-btn small-btn">Go To Homepage</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "six", footer: "one" } };
}
