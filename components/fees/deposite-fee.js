import { useState } from "react";

export default function DepositFee() {
  const [activeSection, setActiveSection] = useState("crypto");

  const getTextStyle = (section) => {
    return {
      marginRight: "1.5rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: activeSection === section ? "#C09AE6" : "#aaa", // active vs inactive
      textDecoration: "none",
      fontSize:"clamp(1.125rem, 1.0962rem + 0.1282vw, 1.25rem)"
    };
  };

  return (
    <>
      <div className="fugu-about-section bg-black py-5">
        <div className="container">
          {/* Tab Selector */}
          <div className="mb-4 d-flex">
            <span
              onClick={() => setActiveSection("crypto")}
              style={getTextStyle("crypto")}
              onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Crypto
            </span>
            <span
              onClick={() => setActiveSection("fiat")}
              style={getTextStyle("fiat")}
              onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Fiat
            </span>
          </div>

          {/* Content */}
          <div style={{ color: "white" }}>
            {activeSection === "crypto" && (
                <div>
              <p>
                For cryptocurrency transactions, fees vary depending on the specific coin and network conditions. We strive to keep these fees as low as possible and update them regularly to reflect current network rates.​
              </p>

              <div className="overflow-x">
              <table className="table-even table table-bordered table-dark text-white text-center font14to16">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Network</th>
                                                <th>Deposit Fees</th>
                                                <th>Withdrawal Fees</th>
                                                <th>Deposit Min</th>
                                                <th>Deposit Max</th>
                                                <th>Withdrawal Min</th>
                                                <th>Withdrawal Max</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>DOT</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.18</td>
                                                <td>1.03</td>
                                                <td>100000</td>
                                                <td>1.8</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>UNI</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.579</td>
                                                <td>2</td>
                                                <td>100000</td>
                                                <td>2</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>MATIC</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>1</td>
                                                <td>10000</td>
                                                <td>1</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td>ETH</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.0019713</td>
                                                <td>0.0019</td>
                                                <td>100</td>
                                                <td>0.0038</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td>USDC</td>
                                                <td>Token</td>
                                                <td>BNB Chain / Polygon Mainnet</td>
                                                <td>Free</td>
                                                <td>0.5</td>
                                                <td>2</td>
                                                <td>100000</td>
                                                <td>4</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <td>HUMB</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>25</td>
                                                <td>100</td>
                                                <td>50000</td>
                                                <td>100</td>
                                                <td>50000</td>
                                            </tr>
                                            <tr>
                                                <th>7</th>
                                                <td>Cake</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>1</td>
                                                <td>100</td>
                                                <td>0.001</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <th>8</th>
                                                <td>BTC</td>
                                                <td>Crypto</td>
                                                <td>BTC</td>
                                                <td>Free</td>
                                                <td>0.000058</td>
                                                <td>0.00035</td>
                                                <td>100</td>
                                                <td>0.00035</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <th>9</th>
                                                <td>BONK</td>
                                                <td>Token</td>
                                                <td>Solana</td>
                                                <td>Free</td>
                                                <td>64000</td>
                                                <td>320000</td>
                                                <td>1000000</td>
                                                <td>640000</td>
                                                <td>1000000</td>
                                            </tr>

                                            <tr>
                                                <th>10</th>
                                                <td>LEO</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>1</td>
                                                <td>100000</td>
                                                <td>1</td>
                                                <td>10000</td>
                                            </tr>
                                            <tr>
                                                <th>11</th>
                                                <td>BCH</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.002</td>
                                                <td>0.015</td>
                                                <td>100000</td>
                                                <td>0.03</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr tabindex="0">
                                                <th>12</th>
                                                <td>PEPE</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>30154</td>
                                                <td>40000</td>
                                                <td>10000000</td>
                                                <td>60308</td>
                                                <td>10000000</td>
                                            </tr>
                                            <tr>
                                                <th>13</th>
                                                <td>SHIB</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>25000</td>
                                                <td>50000</td>
                                                <td>10000000</td>
                                                <td>100000</td>
                                                <td>10000000</td>
                                            </tr>
                                            <tr>
                                                <th>14</th>
                                                <td>WIF</td>
                                                <td>Token</td>
                                                <td>Solana</td>
                                                <td>Free</td>
                                                <td>0.5</td>
                                                <td>2.4</td>
                                                <td>100000</td>
                                                <td>4.8</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>15</th>
                                                <td>NEAR</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>0.6</td>
                                                <td>100000</td>
                                                <td>0.6</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>16</th>
                                                <td>PNUT</td>
                                                <td>Token</td>
                                                <td>Solana</td>
                                                <td>Free</td>
                                                <td>0.55</td>
                                                <td>2.7</td>
                                                <td>100000</td>
                                                <td>5.4</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>17</th>
                                                <td>USDC</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>1</td>
                                                <td>10000</td>
                                                <td>1</td>
                                                <td>10000</td>
                                            </tr>
                                            <tr>
                                                <th>18</th>
                                                <td>ETC</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.01</td>
                                                <td>0.2</td>
                                                <td>100000</td>
                                                <td>0.2</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>19</th>
                                                <td>LTC</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.001</td>
                                                <td>0.07</td>
                                                <td>100000</td>
                                                <td>0.15</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>20</th>
                                                <td>XLM</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.2</td>
                                                <td>10</td>
                                                <td>100000</td>
                                                <td>10</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>21</th>
                                                <td>AVAX</td>
                                                <td>Crypto</td>
                                                <td>Avalanche Network C-Chain</td>
                                                <td>Free</td>
                                                <td>0.065</td>
                                                <td>0.3</td>
                                                <td>100000</td>
                                                <td>0.6</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>22</th>
                                                <td>LINK</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>1</td>
                                                <td>100000</td>
                                                <td>1</td>
                                                <td>1000000</td>
                                            </tr>
                                            <tr>
                                                <th>23</th>
                                                <td>ADA</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>3</td>
                                                <td>15</td>
                                                <td>100000</td>
                                                <td>30</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>24</th>
                                                <td>TON</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.15</td>
                                                <td>0.75</td>
                                                <td>100000</td>
                                                <td>1.5</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>25</th>
                                                <td>XRP</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.25</td>
                                                <td>1</td>
                                                <td>100000</td>
                                                <td>2</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>26</th>
                                                <td>WBT</td>
                                                <td>Crypto</td>
                                                <td>Whitechain</td>
                                                <td>Free</td>
                                                <td>0.15</td>
                                                <td>1.5</td>
                                                <td>100000</td>
                                                <td>3</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>27</th>
                                                <td>DOGE</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>2.5</td>
                                                <td>65</td>
                                                <td>100000</td>
                                                <td>130</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>28</th>
                                                <td>ELON</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>1</td>
                                                <td>10000</td>
                                                <td>1</td>
                                                <td>10000</td>
                                            </tr>
                                            <tr>
                                                <th>29</th>
                                                <td>POL</td>
                                                <td>Crypto</td>
                                                <td>Polygon Mainnet</td>
                                                <td>Free</td>
                                                <td>0.005</td>
                                                <td>0.01</td>
                                                <td>1000000</td>
                                                <td>0.015</td>
                                                <td>1000000</td>
                                            </tr>
                                            <tr>
                                                <th>30</th>
                                                <td>BUSD</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.1</td>
                                                <td>0.0001</td>
                                                <td>100</td>
                                                <td>0.1</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <th>31</th>
                                                <td>USDT</td>
                                                <td>Token</td>
                                                <td>TRON Mainnet / Ethereum Mainnet / BNB Chain</td>
                                                <td>Free</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>100000</td>
                                                <td>10</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>32</th>
                                                <td>SOL</td>
                                                <td>Crypto</td>
                                                <td>Solana</td>
                                                <td>Free</td>
                                                <td>0.03</td>
                                                <td>0.13</td>
                                                <td>100000</td>
                                                <td>0.26</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>33</th>
                                                <td>TRX</td>
                                                <td>Crypto</td>
                                                <td>TRON Mainnet</td>
                                                <td>Free</td>
                                                <td>0.0019713</td>
                                                <td>0.002</td>
                                                <td>100000</td>
                                                <td>0.002</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <th>34</th>
                                                <td>ETH</td>
                                                <td>Crypto</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>0.0019713</td>
                                                <td>0.0019</td>
                                                <td>10</td>
                                                <td>0.0038</td>
                                                <td>10</td>
                                            </tr>
                                            {/* <tr>
                                                <th>35</th>
                                                <td>USDT</td>
                                                <td>Token</td>
                                                <td>Ethereum Mainnet</td>
                                                <td>Free</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>100000</td>
                                                <td>10</td>
                                                <td>100000</td>
                                            </tr> */}
                                            {/* <tr>
                                                <th>36</th>
                                                <td>USDT</td>
                                                <td>Token</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>100000</td>
                                                <td>10</td>
                                                <td>100000</td>
                                            </tr> */}
                                            <tr>
                                                <th>35</th>
                                                <td>BNB</td>
                                                <td>Crypto</td>
                                                <td>BNB Chain</td>
                                                <td>Free</td>
                                                <td>0.001</td>
                                                <td>0.0015</td>
                                                <td>1000</td>
                                                <td>0.002</td>
                                                <td>1000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                </div>
              </div>
            )}
            {activeSection === "fiat" && (
                <div>
              <p>
                Fiat deposit and withdrawal fees depend on the currency and payment method used. We support multiple fiat currencies and offer various payment options to cater to our global user base. Detailed fee information for each currency and payment method is available on our platform.
              </p>

<div className="overflow-x">
<table className="table-even table table-bordered table-dark text-white text-center font14to16">
                                        <thead>
                                            <tr>
                                                <th>Currency</th>
                                                <th>Deposit Fees</th>
                                                <th>Withdrawal Fees</th>
                                                <th>Deposit Min</th>
                                                <th>Deposit Max</th>
                                                <th>Withdrawal Min</th>
                                                <th>Withdrawal Max</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EUR</td>
                                                <td>4</td>
                                                <td>4</td>
                                                <td>10</td>
                                                <td>100000</td>
                                                <td>10</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <td>AUD</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td>20</td>
                                                <td>100000</td>
                                                <td>20</td>
                                                <td>100000</td>
                                            </tr>
                                            <tr>
                                                <td>USD</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td>10</td>
                                                <td>100000</td>
                                                <td>10</td>
                                                <td>100000</td>
                                            </tr>
                                        </tbody>
                                    </table>
    </div>
</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
