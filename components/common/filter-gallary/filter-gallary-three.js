/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FilterGallaryThree() {
  const isotope = useRef();
  const [activeClass, setActiveClass] = useState("*");
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope("#fugu-gallery-masonay2", {
        itemSelector: ".fugu-grid-item",
        masonry: {
          columnWidth: ".fugu-grid-item",
          gutterWidth: 0,
        },
        resizable: false,
      });
    }, 1000);

    // Cleanup function: ensure isotope is defined before calling destroy()
    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };

  const handleActiveClass = (key) => {
    if (key === activeClass) return "active";
  };

  return (
    <div className="section fugu-section-padding">
      <div className="container">
        <div className="fugu-gallery-menu">
          <ul id="watch-filter-gallery" className="option-set clear-both">
            <li onClick={handleFilterKeyChange("*")} className={handleActiveClass("*")}>
              All Projects (35)
            </li>
            <li onClick={handleFilterKeyChange("branding")} className={handleActiveClass("branding")}>
              Branding (10)
            </li>
            <li onClick={handleFilterKeyChange("commercial")} className={handleActiveClass("commercial")}>
              Commercial (08)
            </li>
            <li onClick={handleFilterKeyChange("digital")} className={handleActiveClass("digital")}>
              Digital Art (12)
            </li>
            <li onClick={handleFilterKeyChange("design")} className={handleActiveClass("design")}>
              UI/UX Design (05)
            </li>
          </ul>
        </div>
        <div className="fugu-gallery-wrap row" id="fugu-gallery-masonay2">
          {/* Your gallery items go here */}
        </div>
        <div className="fugu-portfolio-btn">
          <Link href={"#"} legacyBehavior>
            <a className="fugu-btn small-btn">View All</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
