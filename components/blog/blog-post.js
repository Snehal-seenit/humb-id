/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BlogPagination from "./blog-pagination";

export default function BlogPost() {
	return (
		<div className="col-xl-12 col-lg-7">
			<div className="row">
				<div className="col-xl-4 col-lg-12 col-md-6">
					<div className="fugu-blog-card wow fadeInUpX" data-wow-delay="0s">
						<div className="fugu-blog-thumb">
							<Link href={"blogs/blockchain-transforming-healthcar"}>
								<img src="/id/images/all-img/Blog1.jpg" alt="" />
							</Link>
						</div>
						<div className="fugu-blog-content">
							{/* <div className="fugu-blog-meta">
								<ul>
									<li>
										<Link href={"/"}>Article</Link>
									</li>
									<li>
										<Link href={"/"}>August 26, 2022</Link>
									</li>
								</ul>
							</div> */}
							<h5>
								<Link href={"blogs/blockchain-transforming-healthcar"}>
								How Blockchain is Transforming Healthcare:								</Link>
							</h5>
							{/* <p>
								You may be fascinated by blockchain technology, hearing about all those
								ground-breaking...
							</p> */}
							<Link href={"blogs/blockchain-transforming-healthcar"} legacyBehavior>
								<a className="fugu-icon-btn">
									{/* Read More <img src="/images/svg/arrow-black-right.svg" alt="" /> */}
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-12 col-md-6">
					<div className="fugu-blog-card wow fadeInUpX" data-wow-delay=".10s">
						<div className="fugu-blog-thumb">
							<Link href={"blogs/healthcare-and-cryptoworld"}>
								<img src="/id/images/all-img/Blog2.jpg" alt="" />
							</Link>
						</div>
						<div className="fugu-blog-content">
							{/* <div className="fugu-blog-meta">
								<ul>
									<li>
										<Link href={"/"}>Article</Link>
									</li>
									<li>
										<Link href={"/"}>August 26, 2022</Link>
									</li>
								</ul>
							</div> */}
							<h5>
								<Link href={"blogs/healthcare-and-cryptoworld"}>
								Market Analysis: Opportunities in the Healthcare & Crypto World
								</Link>
							</h5>
							{/* <p>
								An NFT marketplace is an online platform based on blockchain that allows selling and
								buying...
							</p> */}
							<Link href={"blogs/healthcare-and-cryptoworld"} legacyBehavior>
								<a className="fugu-icon-btn">
									{/* Read More <img src="/images/svg/arrow-black-right.svg" alt="" /> */}
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-12 col-md-6">
					<div className="fugu-blog-card wow fadeInUpX" data-wow-delay=".20s">
						<div className="fugu-blog-thumb">
							<Link href={"blogs/humb-revolution"}>
								<img src="/id/images/all-img/Blog3.jpg" alt="" />
							</Link>
						</div>
						<div className="fugu-blog-content">
							{/* <div className="fugu-blog-meta">
								<ul>
									<li>
										<Link href={"/"}>Article</Link>
									</li>
									<li>
										<Link href={"/"}>August 26, 2022</Link>
									</li>
								</ul>
							</div> */}
							<h5>
								<Link href={"blogs/humb-revolution"}>
								HUMB Revolution: The First Healthcare-Focused Crypto Exchange
								</Link>
							</h5>
							{/* <p>
								The work of people responsible for consulting & analysis, the intermediaries between
								ideas...
							</p> */}
							<Link href={"blogs/humb-revolution"} legacyBehavior>
								<a className="fugu-icon-btn">
									{/* Read More <img src="/images/svg/arrow-black-right.svg" alt="" /> */}
								</a>
							</Link>
						</div>
					</div>
				</div>
				{/* <div className="col-xl-6 col-lg-12 col-md-6">
					<div className="fugu-blog-card wow fadeInUpX" data-wow-delay=".30s">
						<div className="fugu-blog-thumb">
							<Link href={"/single-blog-light"}>
								<img src="/images/all-img/blog/blog4.png" alt="" />
							</Link>
						</div>
						<div className="fugu-blog-content">
							<div className="fugu-blog-meta">
								<ul>
									<li>
										<Link href={"/"}>Article</Link>
									</li>
									<li>
										<Link href={"/"}>August 26, 2022</Link>
									</li>
								</ul>
							</div>
							<h5>
								<Link href={"/single-blog-light"}>
									Bridges between blockchains for the connecting the DeFi space one place
								</Link>
							</h5>
							<p>
								The blockchain space has been fortunate with a creativity burst that resulted in
								impressive...
							</p>
							<Link href={"/single-blog-light"} legacyBehavior>
								<a className="fugu-icon-btn">
									Read More <img src="/images/svg/arrow-black-right.svg" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div> */}
				{/* <div className="col-xl-6 col-lg-12 col-md-6">
					<div className="fugu-blog-card wow fadeInUpX" data-wow-delay=".40s">
						<div className="fugu-blog-thumb">
							<Link href={"/single-blog-light"}>
								<img src="/images/all-img/blog/blog5.png" alt="" />
							</Link>
						</div>
						<div className="fugu-blog-content">
							<div className="fugu-blog-meta">
								<ul>
									<li>
										<Link href={"/"}>Article</Link>
									</li>
									<li>
										<Link href={"/"}>August 26, 2022</Link>
									</li>
								</ul>
							</div>
							<h5>
								<Link href={"/single-blog-light"}>
									How to deploy a hyperledger fabric for network on kubernetes networks?
								</Link>
							</h5>
							<p>
								Enterprise-className companies need secure and efficient solutions that can fluently
								scale...
							</p>
							<Link href={"/single-blog-light"} legacyBehavior>
								<a className="fugu-icon-btn">
									Read More <img src="/images/svg/arrow-black-right.svg" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div> */}
				{/* <div className="col-xl-6 col-lg-12 col-md-6">
					<div className="fugu-blog-card wow fadeInUpX" data-wow-delay=".50s">
						<div className="fugu-blog-thumb">
							<Link href={"/single-blog-light"}>
								<img src="/images/all-img/blog/blog6.png" alt="" />
							</Link>
						</div>
						<div className="fugu-blog-content">
							<div className="fugu-blog-meta">
								<ul>
									<li>
										<Link href={"/"}>Article</Link>
									</li>
									<li>
										<Link href={"/"}>August 26, 2022</Link>
									</li>
								</ul>
							</div>
							<h5>
								<Link href={"/single-blog-light"}>
									Let's meet our blockchain projects - interview with solutions Consultant
								</Link>
							</h5>
							<p>
								Watch the interview our solutions Consultant Agnieszka Hołownia-Niedzielska who works...
							</p>
							<Link href={"/single-blog-light"} legacyBehavior>
								<a className="fugu-icon-btn">
									Read More <img src="/images/svg/arrow-black-right.svg" alt="" />
								</a>
							</Link>
						</div>
					</div>
				</div> */}
			</div>
			{/* <BlogPagination /> */}
		</div>
	);
}
