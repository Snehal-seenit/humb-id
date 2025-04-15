import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FooterHomeOne() {
  return (
    <footer className="fugu-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="fugu-textarea">
              <div className="fugu-footer-logo">
                <img
                  src="/images/all-img/Background.png"
                  alt="footer-logo"
                  className="light-version-logo"
                />
              </div>
              {/* <p>The Profit Sharing Crypto Exchange.</p> */}
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
            <div className="fugu-footer-menu">
              <span> Quick Links</span>
              <ul>
                <li>
                  <Link href="/about-us">
                    <span>About HUMB</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <span>Privacy Policy</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <span>Terms Of Service</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="fugu-footer-menu fugu-custom-margin">
              <span>Resources</span>
              <ul>
                <li>
                  <Link href="/whitepaper">
                    <span>Whitepaper</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <span>Blog</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span>Contact Us</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link href="https://humb.io/about-us" target="_blank">
                    <span>Team Members</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="fugu-footer-menu fugu-custom-margin">
              <span>Trade</span>
              <ul>
                <li>
                  <Link
                    href="https://app.humb.io/spot-trading/SOLUSDT"
                    target="_blank"
                  >
                    <span>Spot Trading</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.humb.io/margin-trading/BTCUSDT"
                    target="_blank"
                  >
                    <span>Margin Trading</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link href="/copy-trading">
                    <span>Copy Trading</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.humb.io/currency-conversion"
                    target="_blank"
                  >
                    <span>Swap</span> {/* Wrapped text in <span> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fugu-social-icon">
          <ul className="justify-content-center">
            <li>
              <Link
                href="https://x.com/humbindonesia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/HUMBExchange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.61761 13.7535V7.8033H0.615234V5.48437H2.61761V3.77424C2.61761 1.78964 3.82974 0.708984 5.60014 0.708984C6.44818 0.708984 7.17702 0.772123 7.38943 0.800344V2.87437L6.16156 2.87492C5.19872 2.87492 5.01229 3.33245 5.01229 4.00385V5.48437H7.30858L7.00959 7.8033H5.01228V13.7535H2.61761Z"
                    fill="#13111A"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/humbindonesia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00221 2.05002C9.94011 2.05002 10.1696 2.05728 10.9352 2.09219C11.3954 2.09782 11.8514 2.18234 12.2831 2.34207C12.5962 2.46281 12.8805 2.64777 13.1178 2.88504C13.355 3.12232 13.54 3.40664 13.6607 3.71972C13.8205 4.15144 13.905 4.60736 13.9106 5.06765C13.9452 5.8332 13.9528 6.06269 13.9528 8.0006C13.9528 9.9385 13.9455 10.168 13.9106 10.9335C13.905 11.3938 13.8205 11.8498 13.6607 12.2815C13.54 12.5946 13.355 12.8789 13.1178 13.1161C12.8805 13.3534 12.5962 13.5384 12.2831 13.6591C11.8514 13.8189 11.3954 13.9034 10.9352 13.909C10.1699 13.9436 9.94045 13.9512 8.00221 13.9512C6.06396 13.9512 5.83446 13.9439 5.06926 13.909C4.60897 13.9034 4.15305 13.8189 3.72133 13.6591C3.40825 13.5384 3.12392 13.3534 2.88665 13.1161C2.64938 12.8789 2.46442 12.5946 2.34368 12.2815C2.18395 11.8498 2.09943 11.3938 2.0938 10.9335C2.05923 10.168 2.05163 9.9385 2.05163 8.0006C2.05163 6.06269 2.05889 5.8332 2.0938 5.06765C2.09943 4.60736 2.18395 4.15144 2.34368 3.71972C2.46442 3.40664 2.64938 3.12232 2.88665 2.88504C3.12392 2.64777 3.40825 2.46281 3.72133 2.34207C4.15305 2.18234 4.60897 2.09782 5.06926 2.09219C5.83481 2.05763 6.0643 2.05002 8.00221 2.05002ZM8.00221 0.742188C6.03216 0.742188 5.784 0.750482 5.00981 0.785736C4.40741 0.797718 3.8114 0.911778 3.24714 1.12306C2.76309 1.30544 2.32467 1.59123 1.96246 1.96051C1.59285 2.32285 1.30681 2.76152 1.12432 3.24587C0.913039 3.81014 0.79898 4.40614 0.786998 5.00855C0.752436 5.78205 0.744141 6.03021 0.744141 8.00025C0.744141 9.9703 0.752436 10.2185 0.787689 10.9926C0.799671 11.5951 0.913731 12.1911 1.12502 12.7553C1.3073 13.2396 1.5931 13.6783 1.96246 14.0407C2.32487 14.41 2.76353 14.6958 3.24783 14.8781C3.81209 15.0894 4.4081 15.2035 5.0105 15.2155C5.78469 15.25 6.03181 15.259 8.0029 15.259C9.97398 15.259 10.2211 15.2507 10.9953 15.2155C11.5977 15.2035 12.1937 15.0894 12.758 14.8781C13.24 14.6913 13.6777 14.4059 14.0431 14.0403C14.4085 13.6746 14.6936 13.2367 14.8801 12.7546C15.0914 12.1904 15.2054 11.5944 15.2174 10.992C15.252 10.2185 15.2603 9.9703 15.2603 8.00025C15.2603 6.03021 15.252 5.78205 15.2167 5.00786C15.2047 4.40614 15.0897 3.81014 14.8784 3.24587C14.6969 2.76152 14.4108 2.32285 14.0402 1.96051C13.678 1.59123 13.2396 1.30544 12.7556 1.12306C12.1913 0.911778 11.5953 0.797718 10.9929 0.785736C10.2187 0.750482 9.97055 0.742188 8.00221 0.742188Z"
                    fill="#13111A"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/humbindonesia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.531 0A4.531 4.531 0 000 4.531 4.531 4.531 0 004.531 9.062 4.531 4.531 0 009.062 4.531 4.531 4.531 0 004.531 0zM0 14.961a4.672 4.672 0 014.669-4.671c3.205 0 6.234 1.091 6.234 3.309v6.392H7.208v-6.394a2.762 2.762 0 00-2.768-2.768c-2.786 0-3.559 1.577-3.559 2.764v6.398H0v-6.394c0-3.297 3.478-5.395 7.129-5.395 3.492 0 6.968 2.118 6.968 5.395v6.392H16.16v-6.392c0-4.529-5.375-7.122-8.706-7.122-4.57 0-7.881 2.215-7.881 7.122v6.392h5.063v-6.394a2.762 2.762 0 01-2.768-2.768c-2.78 0-3.559 1.577-3.559 2.764v6.398H0z"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/HUMBExchange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="#13111A"
                    d="M1.016 14.444c0 .553.45 1.004 1.004 1.004h13.96c.553 0 1.003-.45 1.003-1.004V1.555c0-.553-.45-1.003-1.003-1.003H2.02c-.554 0-1.004.45-1.004 1.003v12.889z"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/c/HUMBExchange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#13111A"
                    d="M21.1 8.278l-8.4-5.03c-.47-.285-1.1-.285-1.57 0l-8.4 5.03c-.48.284-.78.794-.78 1.348v10.058c0 .553.3 1.064.78 1.348l8.4 5.03c.47.285 1.1.285 1.57 0l8.4-5.03c.48-.284.78-.794.78-1.348V9.626c0-.554-.3-1.064-.78-1.348zM12 16.69V7.31l5.29 2.945-5.29 2.944z"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
