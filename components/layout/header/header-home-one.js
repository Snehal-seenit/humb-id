import Link from "next/link";
import { useState } from "react";
import {
  DemoDropdownMenus,
  PagesDropdownMenus,
  WhitePaper,
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
      className={`site-header site-header--menu-right fugu-header-section ${
        scroll ? "sticky-menu" : ""
      }`}
      id="sticky-menu"
    >
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <Link href={"/"}>
              <span>
                <img
                  src="/images/logo/Logo (1).png"
                  alt="logo"
                  className="light-version-logo"
                  style={{ maxWidth: "180px" }}
                />
              </span>
            </Link>
          </div>
          <div className="menu-block-wrapper">
            <div
              className={`menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
              onClick={handleCloseMobileMenu}
            ></div>
            <nav
              className={`menu-block ${isMobileMenuOpen ? "active" : null}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div
                  className="mobile-menu-close"
                  onClick={handleCloseMobileMenu}
                >
                  &times;
                </div>
              </div>

              <Navbar>
                <NavItem
                  navItemText="Trading Features"
                  menuItems={DemoDropdownMenus}
                  handleCloseMobileMenu={handleCloseMobileMenu}
                />
                <NavItem
                  navItemText="Ecosystem"
                  menuItems={PagesDropdownMenus}
                  handleCloseMobileMenu={handleCloseMobileMenu}
                />
                <NavItem
                  navItemText="Resources"
                  menuItems={WhitePaper}
                  handleCloseMobileMenu={handleCloseMobileMenu}
                />
                <li
                  className="nav-item nav-item-has-children"
                  onClick={handleCloseMobileMenu}
                >
                  <Link href="/about-us">
                    <span className="nav-link-item drop-trigger">About HUMB</span>
                  </Link>
                </li>
                <li
                  className="nav-item nav-item-has-children"
                  onClick={handleCloseMobileMenu}
                >
                  <Link href="https://www.humb.support/" target="_blank">
                    <span className="nav-link-item drop-trigger">Support</span>
                  </Link>
                </li>
                <div className="nav-item nav-item-has-children d-block d-md-none">
                  <span className="fugu-btn fugu-header-btn m-4" href="https://app.humb.io/register">
                    Login / Sign Up
                  </span>
                </div>
              </Navbar>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <span
              className="fugu-btn fugu-header-btn"
              href="https://app.humb.io/register"
            >
              Login / Sign Up
            </span>
          </div>

          <div
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
