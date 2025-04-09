import Profit from "./profit";
import Trading from "./trading";

export default function Instant() {
  return (
    <div className="fugu-about-section bg-black ">
      <div className="container">
      
        <div className="instant-info border-b padding-2 padding-3">
          <h2 className="font18to24 mb-0">Deposit Rewards– Get 5% Cashback on Every $100!</h2>
          <p className="font14to16 mb-4">
          Start your journey with HUMB Exchange and get rewarded instantly! We’re offering a 5% cashback on your first deposit across predefined slabs. Unlock a mix of HUMB Tokens and USDT based on your deposit amount.
          </p>
          {/* <div className="deposite-list">
            <ul className="flex g-4">
              <li className="font14to16 circle-list w-40">
                The first user to deposit $100 will instantly receive a $10
                bonus.
              </li>
              <li className="font14to16 circle-list w-40">
                Deposit $1,000 and get an Instant $30 bonus.
              </li>
            </ul>
          </div> */}
           <div className="table-container crypto-table overflow-x">
          <table className="table-even table table-bordered table-dark text-white text-center font14to16">
            <thead>
              <tr>
                <th>Deposit Amount (USD)</th>
                <th>Total Cashback (USDT)</th>
                <th>HUMB Tokens (USDT Worth)</th>
                <th>USDT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$100</td>
                <td>5</td>
                <td>-</td>
                <td>5</td>
              </tr>
              <tr>
                <td>$200</td>
                <td>10</td>
                <td>-</td>
                <td>10</td>
              </tr>
              <tr>
                <td>$300</td>
                <td>15</td>
                <td>-</td>
                <td>15</td>
              </tr>
              <tr>
                <td>$400</td>
                <td>20</td>
                <td>-</td>
                <td>20</td>
              </tr>
              <tr>
                <td>$500</td>
                <td>25</td>
                <td>10</td>
                <td>15</td>
              </tr>
              <tr>
                <td>$600</td>
                <td>30</td>
                <td>15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>$700</td>
                <td>35</td>
                <td>15</td>
                <td>20</td>
              </tr>
              <tr>
                <td>$800</td>
                <td>40</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>$900</td>
                <td>45</td>
                <td>20</td>
                <td>25</td>
              </tr>
              <tr>
                <td>$1000</td>
                <td>50</td>
                <td>25</td>
                <td>25</td>
              </tr>
            </tbody>
          </table>
        

         
        </div>
          <div className="pt-4">
            <a href="https://app.humb.io/register" className="fugu-btn fugu-header-btn m-0" target="_blank">Register Now</a>
          </div>
        </div>
        <div className="pb-5">
        <h2 className="reward-heading mt-4 mb-4">Terms & Conditions Apply</h2>
        <div className="terms-list border-b padding-2 padding-3 deposite-list">
          <h2 className="font18to24 mb-0">Deposit Rewards</h2>
          <ul className="headding-txt">
            <li className="font14to16 circle-list"><b>Deposit Timing:</b> To earn the deposit reward, the trader must deposit the required amount in a single transaction within one month from the date of registration.</li>
            <li className="font14to16 circle-list">
            <b>One-Time Reward:</b> Cashback can be claimed only once per user on their first deposit under any eligible reward slab. Example: If you deposit $500 and claim the reward, you cannot claim rewards from any other slab like $600 or $1000 later.
            </li>
            <li className="font14to16 circle-list">
            <b>Minimum Deposit:</b> A minimum deposit of $100 is required to qualify for the reward.
            </li>
            <li className="font14to16 circle-list">
            <b>Eligible Slabs Only:</b> Cashback is applicable only on the predefined deposit slabs listed above.
            </li>
            <li className="font14to16 circle-list">
            <b>KYC Requirement:</b> Users must be fully registered and KYC verified on the HUMB Exchange platform to claim rewards.
            </li>
            <li className="font14to16 circle-list">
            HUMB Management reserves the rights to make changes to the rewards program with prior notice which will be binding on all registered users.
            </li>
            <li className="font14to16 circle-list">
            Decision of HUMB management regarding rewards payout will be final and binding on all the registered users.
            </li>
            
          </ul>
          
        </div>
      </div>
      </div>
    </div>
  );
}
