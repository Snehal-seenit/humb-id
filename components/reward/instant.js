import React from 'react';
import Profit from "./profit";
import Trading from "./trading";

export default function Instant() {
  return (
    <div className="fugu-about-section bg-black ">
      <div className="container">
        <div className="instant-info border-b padding-2 padding-3">
          <h2 className="font18to24 mb-0">Instant Deposit Bonuses</h2>
          <p className="font14to16 mb-0">
            Start your journey with HUMB and enjoy instant rewards upon deposit.
          </p>
          <div className="deposite-list">
            <ul className="flex g-4">
              <li className="font14to16 circle-list w-40">
                The first user to deposit $100 will instantly receive a $10
                bonus.
              </li>
              <li className="font14to16 circle-list w-40">
                Deposit $1,000 and get an Instant $30 bonus.
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <a href="https://app.humb.io/login" className="fugu-btn fugu-header-btn m-0" target="_blank">Register Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
