import React from "react";
import "./style/Footer.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaPinterest className="icon" />
      </div>
      <div className="content">
        <div className="container">
          <div>
            <p className="bold">About</p>
            <p>Company</p>
            <p>Details</p>
            <p>Planing</p>
            <p>About Us</p>
          </div>
          <div>
            <p className="bold">Company</p>
            <p>Future</p>
            <p>Employment</p>
            <p>Scheduling</p>
            <p>Development</p>
          </div>
          <div>
            <p className="bold">Legal</p>
            <p>Hiring</p>
            <p>Terms</p>
            <p>Policy</p>
            <p>Advertising</p>
          </div>
          <div>
            <p className="bold">Information</p>
            <p>Developers</p>
            <p>Programs</p>
            <p>Funding</p>
            <p>Financial</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
