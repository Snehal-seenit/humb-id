/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BlogFiltering() {
  const isotope = useRef();
  const [activeClass, setActiveClass] = useState("*");
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope("#fugu--two-column", {
      itemSelector: ".collection-grid-item",
      layoutMode: "fitRows",
      percentPosition: true,
    });

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };

  const handleActiveClass = (key) => {
    if (key === activeClass) return "active";
  };

  return (
    <div className="fugu--blog-filtering dark-version row">
      <div className="fugu--section-title-wrap col-md-12">
        <div className="fugu--default-content content-sm">
          <h2>Latest articles</h2>
        </div>
        <div className="fugu--portfolio-menu">
          <ul className="option-set clear-both">
            <li onClick={handleFilterKeyChange("*")} className={handleActiveClass("*")}>
              All
            </li>
            <li onClick={handleFilterKeyChange("analysis")} className={handleActiveClass("analysis")}>
              Art & Analysis
            </li>
            <li onClick={handleFilterKeyChange("collectible")} className={handleActiveClass("collectible")}>
              Collectible
            </li>
            <li onClick={handleFilterKeyChange("metaverse")} className={handleActiveClass("metaverse")}>
              Metaverse
            </li>
            <li onClick={handleFilterKeyChange("utility")} className={handleActiveClass("utility")}>
              Utility
            </li>
          </ul>
        </div>
      </div>

      <div className="col-12">
        <div className="fugu--portfolio-wrap row" id="fugu--two-column">
          <div className="collection-grid-item analysis wow fadeInUpX col-lg-6 col-sm-12" data-wow-delay="0s">
            <div className="fugu--blog-wrap">
              <div className="fugu--blog-thumb">
                <Link href="single-blog-dark">
                  <span>
                    <img src="/images/all-img/blog2/dark/blog1.png" alt="" />
                  </span>
                </Link>
                <div className="fugu--blog-badge">Art & Analysis</div>
              </div>
              <div className="fugu--blog-content">
                <div className="fugu--blog-date">
                  <ul>
                    <li>
                      <Link href="/">
                        <span>
                          <img src="/images/svg2/calendar.svg" alt="" />
                          July 18, 2022
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <span>
                          <img src="/images/svg2/clock.svg" alt="" />5 min read
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="fugu--blog-title">
                  <Link href="single-blog-dark">
                    <span>
                      <h3>What does the NFT Ecosystem look like after the Boom?</h3>
                    </span>
                  </Link>
                </div>
                <p>
                  It has now been 6 months since the NFT market saw indicators strongly shaken up, with additional over hype a month ago...
                </p>
                <div className="fugu--blog-user">
                  <div className="fugu--blog-user-thumb">
                    <img src="/images/all-img/blog2/author1.png" alt="" />
                  </div>
                  <div className="fugu--blog-user-data">
                    Dianne Russell
                    <p>Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* More blog items follow the same pattern */}
        </div>
      </div>
    </div>
  );
}
