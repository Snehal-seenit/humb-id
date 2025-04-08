import { useState } from "react";
import Head from "next/head";
import Instant from "../components/reward/instant";
import Profit from "../components/reward/profit";
import Trading from "../components/reward/trading";
import RewardBreadcrumb from "../components/reward/breadcrumb";

export default function Reward() {
  const [activeSection, setActiveSection] = useState("instant");

  const getButtonClass = (section) => {
    return `btn me-2 fugu-header-btn ${
      activeSection === section ? "btn-primary" : "btn-outline-light"
    }`;
  };

  return (
    <>
      <Head>
        <title>HUMB - Rewards</title>
      </Head>

      <RewardBreadcrumb />

      <div className="bg-black">
        <div className="tab-section container d-flex flex-wrap gap-2 pt-4 pb-4">
          <button
            onClick={() => setActiveSection("instant")}
            className={`${getButtonClass("instant")}`}
          >
            Deposit Rewards
          </button>
          <button
            onClick={() => setActiveSection("trading")}
            className={getButtonClass("trading")}
          >
            Trading Rewards
          </button>
          {/* <button
            onClick={() => setActiveSection("profit")}
            className={getButtonClass("profit")}
          >
            HUMB Profit Sharing Program
          </button> */}
        </div>
      </div>
      

      <div className="bg-black text-white">
        {activeSection === "instant" && <Instant />}
        {activeSection === "trading" && <Trading />}
        {activeSection === "profit" && <Profit />}
      </div>
    </>
  );
}
