import React, { Component } from "react";

import valentina from "./valentina.jpg";
import Random from "./Random.png";
import Fittr from "./Fittr.png";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      modal: "modal",
      img: []
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal = img => {
    if (this.state.active) {
      this.setState({
        active: false,
        modal: "is-active",
        img: img
      });
    } else {
      this.setState({ active: true, modal: "modal" });
    }
  };

  render() {
    // console.log(this.state.beername);
    return (
      <div className="main-page">
        <section className="hero is-dark is-large is-bold" id="home">
          <div className="hero-head" />

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1 ">Valentina Abramova</h1>
              <h2 className="subtitle is-2">Full Stack Web Developer</h2>
            </div>
          </div>
        </section>
        <section class="hero is-light " id="portfolio">
          <div className={this.state.modal}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title" />
                <button
                  className="delete"
                  aria-label="close"
                  onClick={() => this.toggleModal()}
                />
              </header>
              <section className="modal-card-body">
                <p class="image is-2by1">
                  <img src={this.state.img} />
                </p>

                <br />
              </section>
              <footer className="modal-card-foot" />
            </div>
          </div>

          <div class="hero-body">
            <div class="container">
              <h1 class="title is-2">Portfolio</h1>
              <h2 class="subtitle is-4">Recent Projects</h2>
            </div>
          </div>
        </section>
        <section className="hero is-light is-medium ">
          <div className="hero-head"> </div>

          <div className="hero-body">
            <div className="container">
              <div className="tile is-ancestor">
                <div className="tile is-child is-6 " id="shadow">
                  <figure className="image is-2by1" id="figure">
                    <img src={Fittr} />
                    <div
                      className="overlay"
                      onClick={() => this.toggleModal(Fittr)}
                    >
                      <div class="text">
                        <h1>Fittr</h1>
                        <p>
                          | React | Redux | NodeJS | SQL | Express | REST API |
                          SASS |VictoryJS |
                        </p>
                      </div>
                    </div>
                  </figure>
                  <div>
                    <a
                      class="button is-link"
                      href="https://github.com/FitTracker/Fitness-Goal-Tracker"
                      target="_blank"
                    >
                      <span class="icon is-small">
                        <i class="fa fa-github-alt" />
                      </span>
                      <span>Github </span>
                    </a>
                    <a
                      class="button is-primary"
                      href="http://www.fittr.us"
                      target="_blank"
                    >
                      <span class="icon is-small">
                        <i class=" fa fa-arrow-circle-up " />
                      </span>
                      <span>Live site </span>
                    </a>
                  </div>
                </div>
                <div className="tile is-child is-6 " id="shadow">
                  <figure className="image is-2by1" id="figure">
                    <img src={Random} />
                    <div
                      className="overlay"
                      onClick={() => this.toggleModal(Random)}
                    >
                      <div class="text">
                        <h1>Favorite Beer</h1>
                        <p>
                          React | NodeJS | SQL | Express | REST API | Stripe |
                          Bulma
                        </p>
                      </div>
                    </div>
                  </figure>
                  <div>
                    <a
                      class="button is-link "
                      href="https://github.com/valcodes/beer/"
                      target="_blank"
                    >
                      <span class="icon is-small">
                        <i class="fa fa-github-alt" />
                      </span>
                      <span>Github </span>
                    </a>
                    <a
                      class="button is-primary"
                      href="https://www.favbeer.com"
                      target="_blank"
                    >
                      <span class="icon is-small">
                        <i class=" fa fa-arrow-circle-up " />
                      </span>
                      <span>Live site </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="hero is-primary" id="skills">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-2">Skills</h1>
              {/* <h2 class="subtitle">Recent Projects</h2> */}
            </div>
          </div>
        </section>
        <section className="hero is-primary  ">
          <div className="hero-head" />

          <div className="hero-body">
            <div className="container has-text-centered">
              <a className="button is-primary is-inverted is-outlined">
                React.js
              </a>

              <a className="button is-primary is-inverted is-outlined">
                JavaScript
              </a>

              <a className="button is-primary is-inverted is-outlined">
                Node.js
              </a>
              <a className="button is-primary is-inverted is-outlined">
                Angular.js
              </a>
              <a className="button is-primary is-inverted is-outlined">HTML5</a>
              <a className="button is-primary is-inverted is-outlined">CSS</a>
              <a className="button is-primary is-inverted is-outlined">
                Express
              </a>
              <a className="button is-primary is-inverted is-outlined">
                PostgreSQL
              </a>
              <a className="button is-primary is-inverted is-outlined">
                Sass/Scss
              </a>
              <a className="button is-primary is-inverted is-outlined">Git</a>
            </div>
          </div>
        </section>
        <section class="hero is-light " id="about">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-2">About</h1>
            </div>
          </div>
        </section>
        <section className="hero is-light ">
          <div className="hero-head"> </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="tile is-ancestor">
                <div className="tile is-child is-10 ">
                  <p className="subtitle">
                    Born and raised in Minsk, Belarus. My love of all things
                    tech began with receiving a Super Nintendo for my birthday.
                    I moved to USA in my teens and learned English in less than
                    6 months. I have a passion for code and learning and can't
                    wait to show you what I can do.
                  </p>
                </div>
                <div className="tile is-child is-2 ">
                  <figure className="image is-128x128">
                    <img src={valentina} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="hero is-dark " id="contact">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-2">Contact</h1>
            </div>
          </div>
        </section>
        <section className="hero is-dark ">
          <div className="hero-head" />

          <div className="hero-body">
            <div className="container has-text-centered">
              <a class="button is-large" href="mailto:vabramova1@gmail.com">
                <span class="icon is-medium">
                  <i class="fa fa-envelope-o" />
                </span>
                <span>Email </span>
              </a>
              <a
                class="button is-large"
                href="https://github.com/valcodes"
                target="_blank"
              >
                <span class="icon is-medium">
                  <i class="fa fa-github-alt" />
                </span>
                <span>Github </span>
              </a>
              <a
                class="button is-large"
                href="https://www.linkedin.com/in/valcodes/"
                target="_blank"
              >
                <span class="icon is-medium">
                  <i class="fa fa-linkedin-square" />
                </span>
                <span>Linkedin </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
