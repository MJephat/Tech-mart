import React from 'react';

function Footer() {
  return (
    <footer>
      <header>
        <ul className="social-media-links">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-google"></i></a></li>
          <li><a href="#"><i className="fa fa-github"></i></a></li>
        </ul>
      </header>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae justo ac nibh dictum eleifend. Aliquam bibendum metus eu libero porta, ac ultricies lectus hendrerit.</p>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacts</h3>
          <p>123 Main St<br/>City, State ZIP<br/>Phone: (123) 456-7890<br/>Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
