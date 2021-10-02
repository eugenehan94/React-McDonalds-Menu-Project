import React from "react";
import "../css/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSnapchatGhost,
  FaPinterestP,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import AppleIcon from "../images/AppStoreIcon.jpg";
import GoogleIcon from "../images/GooglePlayIcon.png";

import FooterLogo from "../images/FooterLogo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-list-option-wrapper">
        <div>
          <h2>About Us</h2>
          <ul className="Footer-list">
            <li>
              <a href="/#">We're here to serve you</a>
            </li>
            <li>
              <a href="/#">COVID-19: Updates</a>
            </li>
            <li>
              <a href="/#">Our History</a>
            </li>
            <li>
              <a href="/#">Press Room</a>
            </li>
            <li>
              <a href="/#">Leadership Team</a>
            </li>
            <li>
              <a href="/#">Investor Relations</a>
            </li>
            <li>
              <a href="/#">Franchising</a>
            </li>
            <li>
              <a href="/#">Land Acknowledgement</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Our Food</h2>
          <ul className="Footer-list">
            <li>
              <a href="/#">Sourcing</a>
            </li>
            <li>
              <a href="/#">Food Safety</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Find Jobs</h2>
          <ul className="Footer-list">
            <li>
              <a href="/#">Restaurant Opportunities</a>
            </li>
            <li>
              <a href="/#">Our People</a>
            </li>
            <li>
              <a href="/#">Corporate Opportunities</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Community</h2>
          <ul className="Footer-list">
            <li>
              <a href="/#">RMHC</a>
            </li>
            <li>
              <a href="/#">atoMc Hockey</a>
            </li>
            <li>
              <a href="/#">Giving Back</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Get More McD's</h2>
          <ul className="Footer-list">
            <li>
              <a href="/#">McDonald's App</a>
            </li>
            <li>
              <a href="/#">McDonald's Rewards</a>
            </li>
            <li>
              <a href="/#">McDelivery</a>
            </li>
            <li>
              <a href="/#">McDonald's Card</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact Us</h2>
          <ul className="Footer-list">
            <li>
              <a href="/#">FAQs</a>
            </li>
            <li>
              <a href="/#">Media Relations</a>
            </li>
            <li>
              <a href="/#">Contact Us Form</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="Footer-social-link-container">
          <div>
            <IconContext.Provider
              value={{ className: "Footer-social-app-icons" }}
            >
              <FaFacebookF />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "Footer-social-app-icons" }}
            >
              <FaTwitter />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "Footer-social-app-icons" }}
            >
              <FaYoutube />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "Footer-social-app-icons" }}
            >
              <AiFillInstagram />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "Footer-social-app-icons" }}
            >
              <FaSnapchatGhost />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "Footer-social-app-icons" }}
            >
              <FaPinterestP />
            </IconContext.Provider>
          </div>
          <div>
            <img src={GoogleIcon} alt="Google Icon" id="Footer-google-icon" />
            <img src={AppleIcon} alt="Apple Icon" />
          </div>
        </div>
        <hr />
        <div className="Footer-policy-container">
          <ul className="Footer-policy-list-wrapper">
            <li>
              <a href="/#">Privacy Policy</a>
            </li>
            <li>
              <a href="/#">Terms & Conditions</a>
            </li>
            <li>
              <a href="/#">Accessibility</a>
            </li>
          </ul>
          {/* </div>
        <div> */}
          <p>
            <img src={FooterLogo} alt="Footer Logo" />
            ©2021 McDonald's. All Rights Reserved.
          </p>
        </div>
        <p className="Footer-developer-info">
          Developed by{" "}
          <a
            href="https://eugenehan.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Eugene Han
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
