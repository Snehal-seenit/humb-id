/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { EffectCards } from "swiper/modules"; // ✅ Correct import for Swiper 9+

// ✅ Dynamic import Swiper components to prevent SSR crash
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });

// ✅ Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

export default function AboutSection() {
	return (
		<div className="fugu--about-section">
			<div className="container">
				<div className="row">
					{/* Left section - Swiper Card Slider */}
					<div className="col-xl-4 col-lg-4">
						<div className="fugu--swiper-slider-wrap">
							<div className="fugu--swiper-slider">
								<Swiper
									effect={"cards"}
									grabCursor={true}
									modules={[EffectCards]}
									className="mySwiper"
								>
									{[
										{
											img: "/images/all-img/v4/card4.jpg",
											name: "Monkey Cowboy",
											price: "0.438 ETH",
											author: "By Cooper",
											likes: "10K",
											dark: true,
										},
										{
											img: "/images/all-img/v4/card2.jpg",
											name: "Attitude Ape",
											price: "0.438 ETH",
											author: "By Howard",
											likes: "Likes",
											dark: false,
										},
										{
											img: "/images/all-img/v4/card3.jpg",
											name: "Ape Mutant",
											price: "0.438 ETH",
											author: "0.194 ETH",
											likes: "2K",
											dark: true,
										},
										{
											img: "/images/all-img/v4/card1.jpg",
											name: "ApeSmilling",
											price: "0.438 ETH",
											author: "By Jenny",
											likes: "18K",
											dark: false,
										},
									].map((card, index) => (
										<SwiperSlide key={index}>
											<div className={`fugu--card-wrap fugu--card2`}>
												<div className="fugu--card-thumb">
													<img src={card.img} alt={card.name} />
												</div>
												<div className="fugu--card-data">
													<h3>{card.name}</h3>
													<p>
														<img src="/images/all-img/v4/daimond.png" alt="diamond" />{" "}
														{card.price}
													</p>
													<div className="fugu--card-footer">
														<div className="fugu--card-footer-data">
															<h4>{card.author}</h4>
														</div>
														<button
															className={`fugu--btn btn-sm fugu--tigger ${
																card.dark ? "dark-btn" : ""
															}`}
															type="button"
														>
															<img
																className="black-heart"
																src="/images/svg2/heart-black.svg"
																alt="like"
															/>
															<img
																className="red-heart"
																src="/images/svg2/heart-red.svg"
																alt="liked"
															/>
															{card.likes}
														</button>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
							<div className="fugu--double-star">
								<img src="/images/all-img/v4/double-star.png" alt="stars" />
							</div>
						</div>
					</div>

					{/* Right section - Text Content */}
					<div className="col-xl-5 offset-xl-2 col-lg-7 offset-lg-1 d-flex align-items-center">
						<div className="fugu--default-content content-black">
							<h2>A clear concept of an NFTs marketplace</h2>
							<p>
								NFT art is a digital asset that is collectable, unique, and non-transferrable,
								Cortes explained. Every NFT is unique in its creative design and cannot be
								duplicated, making them limited and rare. NFTs get their value because the
								transaction proves ownership of the art.
							</p>
							<div className="fugu--btn-wrap">
								<Link href="#" legacyBehavior>
									<a className="fugu--btn bg-orange">Explore More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
