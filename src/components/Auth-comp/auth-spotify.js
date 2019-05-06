import React, { Component } from "react";
import { signUpSpotify } from "../API/api.js/index.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/spotify`}>
          <img
            className="logo-spotify"
            src="/images/spotify-button.png"
            alt="log in with spotify"
          />
        </a>
      </section>
    );
  }
}

export default HomePage;
