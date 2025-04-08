export default function Trading() {
  return (
    <div className="container">
        <div className="bg-black reward-heading p-2">
        <h4 className="text-center font38to48 pt-4">
          HUMB Exclusive Reward Program
        </h4>
        <p className="text-center mx-auto w-0 pb-4">
          At HUMB, we value our traders with instant bonuses and exclusive
          rewards. Deposit, trade, and earn as you grow your trading volume.
        </p>
      </div>
      <div className="trading-content border-b padding-2 padding-3">
        <h2 className="font18to24 mb-0">Trading Rewards</h2>
        
        <p className="font14to16 mb-0">
          Maximize your earnings with rewards
          program! Trade more and earn exciting rewards in USDT and HUMB Tokens.
          Check out the reward structure below:
        </p>
        <p className="font14to16 mb-4">
          Maintain your trading volume and unlock even bigger rewards!
        </p>
        <div className="table-container crypto-table overflow-x">
          <table className="table-even table table-bordered table-dark text-white text-center font14to16">
            <thead>
              <tr>
                <th>Trade Volume</th>
                <th>Total Reward (USDT)</th>
                <th>HUMB Tokens (USDT)</th>
                <th>USDT Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$5,000</td>
                <td>25 USDT</td>
                <td>15 USDT</td>
                <td>10 USDT</td>
              </tr>
              <tr>
                <td>$10,000</td>
                <td>50 USDT</td>
                <td>30 USDT</td>
                <td>20 USDT</td>
              </tr>
              <tr>
                <td>$50,000</td>
                <td>150 USDT</td>
                <td>100 USDT</td>
                <td>50 USDT</td>
              </tr>
              <tr>
                <td>$100,000</td>
                <td>300 USDT</td>
                <td>200 USDT</td>
                <td>100 USDT</td>
              </tr>
              <tr>
                <td>$300,000</td>
                <td>800 USDT</td>
                <td>600 USDT</td>
                <td>200 USDT</td>
              </tr>
            </tbody>
          </table>
          <h3 className="my-2 font14to16">
            <b>
              Hurry! Only One Month to Hit Your Trading Target & Grab Exciting
              Rewards!
            </b>
          </h3>

          <div className="pt-4">
            <a
              href="https://app.humb.io/spot-trading/SOLUSDT"
              target="_blank"
              className="fugu-btn fugu-header-btn m-0"
            >
              Trade now
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <h2 className="reward-heading mt-4 mb-4">Terms & Conditions Apply</h2>
        <div className="terms-list border-b padding-2 padding-3 deposite-list">
          <ul className="headding-txt">
           
            <li className="font14to16 circle-list">
              To qualify, users must maintain the required trading volume for 1
              month.
            </li>
            <li className="font14to16 circle-list">
              The program is open to all verified HUMB users.
            </li>
            <li className="font14to16 circle-list">
              Users must comply with all platform policies and regulations.
            </li>
            <li className="font14to16 circle-list">
              Trading volume is calculated based on completed trades on the HUMB
              platform.
            </li>
            <li className="font14to16 circle-list">
              Bonuses will be credited after verification of trading volume
              requirements.
            </li>
            <li className="font14to16 circle-list">
              Rewards are non-transferable and cannot be withdrawn directly.
              They can be used for trading or withdrawn as per platform
              policies.
            </li>
            <li className="font14to16 circle-list">
              Users found engaging in fraudulent, manipulative, or abusive
              trading practices will be disqualified from the program.
            </li>
            <li className="font14to16 circle-list">
              In case of disputes, HUMB’s decision will be final and binding.
            </li>
            <li className="font14to16 circle-list">
              Only one reward per user per category is allowed in the specific
              duration.
            </li>
          </ul>
          <div>
            <p className="mt-4 mb-0">Start Trading & Earn Rewards Now! </p>
            <p>By participating in this program, users agree to these terms and conditions. Happy Trading!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
