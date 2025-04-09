import { useState } from "react";
import Head from "next/head";
import TradingFee from "../components/fees/trading-fee";
import DepositFee from "../components/fees/deposite-fee";
import Swap from "../components/fees/swap";
import FeesBreadcrumb from "../components/fees/fees-breadcrumb";

export default function Fees() {
  const [activeSection, setActiveSection] = useState("trading");

  const getButtonClass = (section) => {
    return `btn me-2 fugu-header-btn ${
      activeSection === section ? "btn-primary" : "btn-outline-light"
    }`;
  };

  return (
    <>
      <Head>
        <title>HUMB - Fees</title>
      </Head>

     
	  <FeesBreadcrumb />
    <div className="bg-black reward-heading p-2">
        <h4 className="text-center font38to48 pt-4">
        Fees & Transactions Overview
        </h4>
        <p className="text-center mx-auto w-0 pb-4">
        At HUMB Exchange, we ensure transparent, low-cost fees for seamless trading. Enjoy minimal costs and smooth transactions across all assets.
        </p>
      </div>

      <div className="bg-black">
        <div className="tab-section container d-flex flex-wrap gap-2 pt-4 pb-4 justify-center">
          <button
            onClick={() => setActiveSection("trading")}
            className={`${getButtonClass("trading")}`}
          >
            Trading Fees
          </button>
          <button
            onClick={() => setActiveSection("deposit")}
            className={getButtonClass("deposit")}
          >
            Deposit/Withdrawal Fees 
          </button>
          <button
            onClick={() => setActiveSection("swap")}
            className={getButtonClass("swap")}
          >
            Swap
          </button>
        </div>
      </div>
      

      <div className="bg-black text-white">
        {activeSection === "trading" && <TradingFee />}
        {activeSection === "deposit" && <DepositFee />}
        {activeSection === "swap" && <Swap />}
      </div>
    </>
  );
}
