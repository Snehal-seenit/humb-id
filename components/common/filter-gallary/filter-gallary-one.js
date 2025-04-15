/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FilterGalarryOne() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");

	useEffect(() => {
		// Initialize Isotope only once when component mounts
		isotope.current = new Isotope("#fugu--four-column", {
			itemSelector: ".collection-grid-item",
			resizable: false,
			masonry: {
				columnWidth: ".collection-grid-item",
				gutterWidth: 0,
			},
		});

		// Cleanup Isotope instance on component unmount
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		// Filter items when filterKey changes
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
		}
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key); // Update active filter key
	};

	return (
		<div className="fugu--portfolio-section fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>Explore the most unique artworks</h2>
						<p>
							NFTs are usually associated with non-physical art but in reality, there are several
							different types of NFTs and are explained in this guide.
						</p>
					</div>
				</div>

				<div className="fugu--portfolio-menu">
					<ul className="option-set clear-both">
						{/* Filter options with active state */}
						{["*", "video", "virtual", "domain", "music", "sports"].map((key) => (
							<li
								key={key}
								onClick={handleFilterKeyChange(key)}
								className={activeClass === key ? "active" : ""}
							>
								<span>
									<img
										src={`/images/all-img/v3/m-icon${key === "*" ? "1" : key.charAt(0).toUpperCase() + key.slice(1)}.png`}
										alt={key}
									/>
									{key === "*" ? "Artworks" : key.charAt(0).toUpperCase() + key.slice(1)}
								</span>
							</li>
						))}
					</ul>
				</div>

				<div className="fugu--portfolio-wrap" id="fugu--four-column">
					{/* Collection grid items */}
					{[
						{ category: "sports domain", img: "card5.jpg", title: "3D ZelenskiyNFT", mintPrice: "0.194 ETH" },
						{ category: "video marketing", img: "card6.jpg", title: "Scotch Noblemen Song", mintPrice: "0.194 ETH" },
						{ category: "marketing virtual video", img: "card7.jpg", title: "WarriorBatz Crow", mintPrice: "0.194 ETH" },
						{ category: "music marketing", img: "card8.jpg", title: "Axie Infinity Table Game", mintPrice: "0.194 ETH" },
						{ category: "virtual", img: "card9.jpg", title: "Doodle Genesis", mintPrice: "0.194 ETH" },
						{ category: "video music", img: "card10.jpg", title: "DAW World – 400 NFT", mintPrice: "0.194 ETH" },
						{ category: "virtual marketing", img: "card11.jpg", title: "Trippin’ App Tribe", mintPrice: "0.194 ETH" },
						{ category: "marketing music", img: "card12.jpg", title: "Eminem Song The Way", mintPrice: "0.194 ETH" },
					].map(({ category, img, title, mintPrice }, index) => (
						<div key={index} className={`collection-grid-item ${category}`}>
							<div className="fugu--card-wrap">
								<div className="fugu--card-thumb">
									<img src={`/images/all-img/v3/${img}`} alt={title} />
								</div>
								<div className="fugu--card-data">
									<h3>{title}</h3>
									<p>Pre-sale : 18 May 2023</p>
									<div className="fugu--card-footer">
										<div className="fugu--card-footer-data">
											<span>Mint Price:</span>
											<h4>{mintPrice}</h4>
										</div>
										<Link href={"#"} legacyBehavior>
											<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="fugu--portfolio-btn">
					<Link href={"#"} legacyBehavior>
						<a className="fugu--outline-btn">
							<span>View All NFTs</span>
						</a>
					</Link>
				</div>
			</div>

			<div className="fugu--shape2">
				<img src="/images/shape2/shape2.png" alt="Shape" />
			</div>
		</div>
	);
}
