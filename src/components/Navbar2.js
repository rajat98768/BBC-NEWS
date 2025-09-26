import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      mode: "Enable Dark",
    };
  }

  // Toggle Dark/Light Mode
  toggle = () => {
    const { mode } = this.state;
    const body = document.querySelector("body");

    if (mode === "Enable Dark") {
      body.style.backgroundColor = "black";
      body.style.color = "white";

      this.setState({ mode: "Diable Dark" });
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";

      this.setState({ mode: "Enable Dark" });
    }
  };
   
  // Toggle menu open/close
  toggleMenu = () => {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  };

  render() {
    const { menuOpen, mode } = this.state;

    return (
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/">BBC news</a>
          </div>

          <button
            className={`navbar-toggle ${menuOpen ? "open" : ""}`}
            onClick={this.toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <ul className="navbar-items">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/world">World</a>
              </li>
              <li className="nav-item">
                <a href="/business">Business</a>
              </li>
              <li className="nav-item">
                <a href="/technology">Technology</a>
              </li>
              <li className="nav-item">
                <a href="/about">About Us</a>
              </li>
              <li style={{ float: "right" }}>
                <div className="form-check form-switch">
                  <input
                    onClick={this.toggle} // corrected
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switchCheckDefault"
                  />
                  {mode}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
