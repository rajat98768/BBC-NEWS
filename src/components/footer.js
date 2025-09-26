import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About</h3>
            <p>
             Hello! I’m <strong>Rajat</strong>,<br/> A Tech Enthusiast and web developer.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Top Headlines</a>
              </li>
              <li>
                <a href="#">Tech News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Email: rajat.2023@vitstudent.ac.in</p>
            <p>Phone: +919660229835</p>
            <p>Address: Singhana, jhunjhunu, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 News App. All Rights Reserved.</p>
        </div>

        {/* Inline CSS */}
        <style>{`
          .site-footer {
            background-color: #222;
            color: #fff;
            padding: 40px 20px 20px 20px;
            font-family: Arial, sans-serif;
          }
          .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .footer-section {
            flex: 1 1 200px;
            margin: 10px;
          }
          .footer-section h3 {
            margin-bottom: 15px;
            font-size: 18px;
            border-bottom: 2px solid #ff6600;
            display: inline-block;
            padding-bottom: 5px;
          }
          .footer-section p,
          .footer-section ul {
            font-size: 14px;
            line-height: 1.6;
          }
          .footer-section ul {
            list-style: none;
            padding: 0;
          }
          .footer-section ul li {
            margin-bottom: 8px;
          }
          .footer-section ul li a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-section ul li a:hover {
            color: #ff6600;
          }
          .footer-bottom {
            text-align: center;
            margin-top: 20px;
            font-size: 13px;
            border-top: 1px solid #444;
            padding-top: 10px;
          }
        `}</style>
      </footer>
    );
  }
}
