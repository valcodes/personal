import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
