import React from 'react';

const Footer = () => {
  return (
    <footer className="olx-footer">
      <div className="footer-container">
        {/* Popular Categories Section */}
        <div className="footer-section">
          <h3 className="footer-title">POPULAR CATEGORIES</h3>
          <ul className="footer-links">
            <li><a href="/cars">Cars</a></li>
            <li><a href="/flats-for-rent">Flats for rent</a></li>
            <li><a href="/mobile-phones">Mobile Phones</a></li>
            <li><a href="/jobs">Jobs</a></li>
          </ul>
        </div>

        {/* Trending Searches Section */}
        <div className="footer-section">
          <h3 className="footer-title">TRENDING SEARCHES</h3>
          <ul className="footer-links">
            <li><a href="/bikes">Bikes</a></li>
            <li><a href="/watches">Watches</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/dogs">Dogs</a></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">ABOUT US</h3>
          <ul className="footer-links">
            <li><a href="/blog">OLX Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/business">OLX for Businesses</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* OLX Section */}
        <div className="footer-section">
          <h3 className="footer-title">OLX</h3>
          <ul className="footer-links">
            <li><a href="/help">Help</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
            <li><a href="/terms">Terms of use</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">FOLLOW US</h3>
          <div className="social-links">
            <a href="https://facebook.com/olx" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/olx" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/olx" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/olx" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          
          <div className="app-download">
            <p>Get the OLX app</p>
            <div className="app-buttons ">
              <a href="#" className="app-btn">
                <i className="fab fa-google-play social-link"></i>
              </a>
              <a href="#" className="app-btn">
               <i className="fab fa-app-store social-link" ></i>

              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © 2024 OLX - All Rights Reserved
          </p>
          <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;