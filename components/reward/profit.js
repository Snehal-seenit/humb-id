import React from "react";

const rewards = [
  {
    title: "Platinum Traders",
    percent: "6%",
    conditions: [
      "Only for the first 100,000 Verified Traders",
      "Buy and hold $1,000 worth of HUMB tokens for the year",
    ],
    note: "You get",
    reward: "6% of HUMB's Yearly Profit",
  },
  {
    title: "Other Traders",
    percent: "4%",
    conditions: [
      "Post 100,000 Verified Traders",
      "Buy and Hold at least $100 worth of HUMB tokens for the year",
    ],
    note: "You get",
    reward: "4% of HUMB's Yearly Profit",
  },
  {
    title: "Verified Traders (KYH Approved)",
    percent: "2%",
    conditions: [
      "For Platinum & Other traders",
      "Hold $100 worth of HUMB tokens",
      "Must be Know Your Healthcare approved",
    ],
    note: "You get additional",
    reward: "2% of HUMB's Yearly Profit",
  },
  {
    title: "Active Traders",
    percent: "2%",
    conditions: [
      "For Platinum & other traders",
      "Hold $100 worth of listed HUMB Tokens",
      "Trade $100 worth of listed Healthcare Tokens",
    ],
    note: "You get additional",
    reward: "2% of HUMB's Yearly Profit",
  },
];

export default function RewardCardsBootstrap() {
  return (
    <div className="container py-5  text-white">
      <div className="row">
        {rewards.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card bg-dark text-white h-100 position-relative border border-light">
              <div className="card-body">
                <span
                  className="bag position-absolute top-0 end-0 bg-success text-white px-3 py-1 rounded-bottom-left"
                  style={{ fontWeight: "bold" }}
                >
                  {item.percent}
                </span>
                <h5 className="card-title text-white">{item.title}</h5>
                <ul className="list-unstyled mt-3 mb-3">
                  {item.conditions.map((cond, i) => (
                    <li key={i} className="mb-1 font14to16">
                      • {cond}
                    </li>
                  ))}
                </ul>
                <p className="mb-0 text-light font14to16">{item.note}</p>
                <p className="fw-bold text-highlight font14to16">
                  {item.reward}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="reward-heading mt-4 mb-4">Terms & Conditions Apply</h2>
        <div className="terms-list border-b padding-2 padding-3 deposite-list">
          <ul className="headding-txt">
            <li className="font14to16 circle-list">
              14% of HUMB’s annual profit is the maximum profit pool that will
              be kept aside for distribution among traders.
            </li>

            <li className=" font14to16 circle-list">
              Base profit distribution calculation of the 14% profit kept aside
              will be done on the 6% and 4% profit categories that traders will
              fall under and will be done on the 14% profit share kept aside for
              distribution.
            </li>
            <li className="font14to16 circle-list ">
              To qualify for the 14% profit-sharing program, you must hold HUMB
              tokens for one year.
            </li>
            <li className=" font14to16 circle-list">
              Profit share calculation for distribution to traders will be based
              on the percentage of HUMB native token held by each individual
              trader.
            </li>
            <li className="font14to16 circle-list ">
              Additional 2% + 2% profit pool calculation will be done on the 14%
              profit share kept aside for distribution.
            </li>
            <li className="font14to16 circle-list">
              Additional profit share of 2% + 2% will be distributed among
              traders who have met the criteria defined under the profit sharing
              program.
            </li>
            <li className="font14to16 circle-list">
              Profits earned by traders as per calculation which includes base
              profit and additional profit will be deposited as USDC in the
              traders wallets.
            </li>

            <li className="font14to16 circle-list">
              Profit distributions are calculated based on the total number of
              eligible users in each category.
            </li>
            <li className="font14to16 circle-list">
              Profit-sharing rewards are distributed annually based on HUMB’s
              final audited profits.
            </li>
            <li className="font14to16 circle-list">
              HUMB reserves the right to modify, suspend, or terminate the
              program at any time without prior notice.
            </li>
            <li className="font14to16 circle-list">
              In case of disputes, HUMB’s decision will be final and binding.
            </li>
            <li className="font14to16 circle-list">
              Users found engaging in fraudulent, manipulative, or abusive
              trading practices will be disqualified from the program.
            </li>
            <li className="font14to16 circle-list">
              Only one reward per user per category is allowed in the specific
              duration.
            </li>
          </ul>
          <div>
            <p className="mt-4 mb-0">Register, Hold & Earn Your Share of 14% Yearly Profits! </p>
            <p>By participating in this program, users agree to these terms and conditions. Start now and secure your profits!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
