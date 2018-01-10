import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.state.userid);
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#home">
              Home
            </a>

            <nav
              className="navbar-burger"
              data-target="navbarMenu"
              onClick={() => {
                let toggle = document.querySelector(".nav-toggle");
                let menu = document.querySelector(".navbar-menu");
                toggle.classList.toggle("is-active");
                menu.classList.toggle("is-active");
              }}
            >
              <span className="nav-toggle" />
              <span className="nav-toggle" />
              <span className="nav-toggle" />
              <span className="nav-toggle" />
            </nav>
          </div>

          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="#skills">
                Skills
              </a>

              <a className="navbar-item" href="#portfolio">
                Portfolio
              </a>
              <a className="navbar-item" href="#about">
                About
              </a>
              <a className="navbar-item" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
