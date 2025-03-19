/* eslint-disable react/no-unescaped-entities */
export default function Construction() {
	return (
		<div className="section">
			<div className="container">
				<div className="fugu-error-content wow fadeInUpX">
					<h2>We Are Coming Soon!</h2>
					<p>
						We are currently working on something awesome. Stay tuned!
					</p>
					<a className="fugu-btn small-btn" href="https://app.humb.io/login">
                    Start Trading Now
					</a>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
