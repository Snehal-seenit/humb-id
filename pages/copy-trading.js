/* eslint-disable react/no-unescaped-entities */
export default function CopyTrading() {
	return (
		<div className="section bg-black">
			<div className="container">
				<div className="fugu-error-content wow fadeInUpX">
					<h2>Coming Soon</h2> 
					<p>
                        HUMB COPYTRADING
					</p>
					
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
