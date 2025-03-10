import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	WhitePaper,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

/* eslint-disable @next/next/no-img-element */
export default function HeaderHomeOne() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const scroll = useScroll();

	return (
		<header
			className={`site-header site-header--menu-right fugu-header-section ${scroll ? "sticky-menu" : ""}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							<img src="/images/logo/Logo (1).png" alt="logo" className="light-version-logo" />
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<NavItem navItemText="Trading Features" menuItems={DemoDropdownMenus} />
								<NavItem navItemText="Ecosystem" menuItems={PagesDropdownMenus} />
								{/* <NavItem navItemText="Resources" menuItems={ElementsMegaMenu} /> */}
								<NavItem navItemText="Resources" menuItems={WhitePaper} />
								{/* <NavItem navItemText="About Us" menuItems={BlogDropdownMenus} /> */}
								{/* <NavItem navItemText="Support" menuItems={ContactDropdownMenus} /> */}
								<li class="nav-item nav-item-has-children">
								<Link href="about-us" className="nav-link-item drop-trigger">About </Link>
									{/* <a href="#" class="nav-link-item drop-trigger">About Us</a> */}
								</li>
								<li class="nav-item nav-item-has-children">
									<Link href="https://humb.support" target="_blank" rel="noopener noreferrer" className="nav-link-item drop-trigger">Support</Link>
								</li>
								
							</Navbar>

							
						</nav>
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="fugu-btn fugu-header-btn" href="https://app.humb.io/">
							Login / Sign Up
						</a>
					</div>

					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
