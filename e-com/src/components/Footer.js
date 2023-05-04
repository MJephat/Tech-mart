import React from 'react';


function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>CONTACT US</h4>
                        <ul>
                            <li><a href="#">123,Victoria Plaza</a></li>
                            <li><a href="#">City,Nairobi</a></li>
                            <li><a href="#">Call 0789999990</a></li>
                            <li><a href="#">techmart@yahoo.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>ABOUT US</h4>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy and Conditions</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>FOLLOW US</h4>
                        <div class="social-links">
                            <a href="#">< i class="fab fa-facebook-f"></i></a>
                            <a href="#">< i class="fab fa-twitter"></i></a>
                            <a href="#">< i class="fab fa-instagram"></i></a>
                            <a href="#">< i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="new">
                       <p className="col-sm">
                        &copy;{new Date().getFullYear()} TECH-MART |All Rights Reserved |Terms Of Service |
                       </p>
      </div>
            </div>
        </div>
    </footer>
  );
}
export default Footer;