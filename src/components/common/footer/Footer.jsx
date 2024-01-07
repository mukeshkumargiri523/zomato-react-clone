import React from "react";
import "./Style.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_part1">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="zomato logo"
          />
          <div className="part1_buttonConatiner">
            <button>
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="Indian Flag"
                style={{ width: "15px" }}
              />
              India
            </button>
            <button>
              <i className="fa fa-globe"></i>English
            </button>
          </div>
        </div>
        <div className="navigation_container">
          <div className="links_container">
            <h5>ABOUT ZOMATO</h5>
            <a className="footer_link" href="/#">
              Who We Are
            </a>
            <a className="footer_link" href="/#">
              Blog
            </a>
            <a className="footer_link" href="/#">
              Investor Relations
            </a>
            <a className="footer_link" href="/#">
              Work With Us
            </a>

            <a className="footer_link" href="/#">
              Report Fraud
            </a>
            <a className="footer_link" href="/#">
              Contact Us
            </a>
          </div>
          <div className="links_container">
            <h5>ZOMAVERSE</h5>
            <a className="footer_link" href="/#">
              Zomato
            </a>
            <a className="footer_link" href="/#">
              Blinkit
            </a>
            <a className="footer_link" href="/#">
              Feeding India
            </a>
            <a className="footer_link" href="/#">
              Hyperpure
            </a>
            <a className="footer_link" href="/#">
              Zomaland
            </a>
          </div>
          <div className="links_container">
            <h5>FOR RESTAURANTS</h5>
            <a className="footer_link" href="/#">
              Partner With Us
            </a>
            <a className="footer_link" href="/#">
              Apps For You
            </a>

            <h5>FOR ENTERPRISES</h5>
            <a className="footer_link" href="/#">
              Zomato For Work
            </a>
          </div>
          <div className="links_container">
            <h5>LEARN MORE</h5>
            <a className="footer_link" href="/#">
              Privacy
            </a>
            <a className="footer_link" href="/#">
              Security
            </a>
            <a className="footer_link" href="/#">
              Terms
            </a>
            <a className="footer_link" href="/#">
              Sitemap
            </a>
          </div>
          <div className="links_container">
            <h5>SOCIAL LINKS</h5>
            <div className="social_media_link">
              <button>
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
              <button>
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button>
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button>
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button>
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>

            <img
              className="footer_app_logos"
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="footer apple store"
            />
            <img
              className="footer_app_logos"
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              alt="footer play store"
            />
          </div>
        </div>
        <div className="disclamer">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
