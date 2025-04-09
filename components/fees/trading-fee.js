export default function TradingFee() {
  return (
    <div className="fugu-about-section bg-black ">
      <div className="container">
        <div className="instant-info border-b padding-2 padding-3">
          {/* <h2 className="font18to24 mb-0">Instant Deposit Bonuses</h2> */}
          <p className="font14to16 mb-0">
          <b style={{color:"#28e7c5"}}>Spot Trading Fees – </b>Enjoy low maker and taker fees, ensuring cost-effective trading.
          </p>
          <div className="deposite-list">
            <ul className="d-flex gap-5">
              <li className="font14to16 w-40" style={{color:"#28e7c5"}}>0.01% <br /><p className="text-white">Taker</p></li>
              <li className="font14to16 w-40" style={{color:"#28e7c5"}}>0.01% <br /> <p className="text-white">Maker</p></li>
            </ul>
          </div>
          

          <div className="instant-info py-4">
          {/* <h2 className="font18to24 mb-0">Instant Deposit Bonuses</h2> */}
          <p className="font14to16 mb-0">
          <b style={{color:"#28e7c5"}}>Futures Trading Fees - </b> Please note that the trading fees can vary for some pairs, but it never exceeds 0.035%
          </p>
          <div className="deposite-list">
            <ul className="d-flex gap-5">
              <li className="font14to16 w-40" style={{color:"#28e7c5"}}>0.01% <br /><p className="text-white">Taker</p></li>
              <li className="font14to16 w-40" style={{color:"#28e7c5"}}>0.01% <br /> <p className="text-white">Maker</p></li>
            </ul>
          </div>
        </div>

        <div className="instant-info">
          {/* <h2 className="font18to24 mb-0">Instant Deposit Bonuses</h2> */}
          <p className="font14to16 mb-0">
          <b style={{color:"#28e7c5"}}> Margin Trading Fees –</b> Leverage your trades with just a 0.5% margin trading fees.
          </p>
          <div className="deposite-list">
            <ul className="d-flex gap-5">
              <li className="font14to16 w-40" style={{color:"#28e7c5"}}>0.01%</li>
            </ul>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
}
