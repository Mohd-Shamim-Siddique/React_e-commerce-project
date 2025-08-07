import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer container">
      <div className="container flex footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Shamim eComStore is your trusted destination for premium tech gadgets and accessories. Shop with confidence.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@shamimstore.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shamim eComStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
