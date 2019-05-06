import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="HomePage">
        <div className="home-card">
          <img className="logo" src="images/logo.png" alt="logo" />
          <h1>Live Finder.</h1>
          <h2>Enjoy the full experience with Spotify</h2>

          <hr className="small-hr" />
          <p>
            To enjoy the full experience, we recommand you to sync your acount
            with spotify. You also can sync your spotify account to facebook to
            live the social experience and see who is up for a live!
          </p>
          <div>
            <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/spotify`}>
              Connect with Spotify
            </a>
            <a href="#0">Connect with Deezer</a>
            <a href="#0">Connect with Apple Music </a>
          </div>
          <hr />
        </div>
        <div className="home-card">
          <h1>Live Me Alone.</h1>
          <h2>Don't want the full experience ?</h2>
          <hr className="small-hr" />
          <p>
            Don't worrie, you can still enjoy the app and discover new bands and
            lives. And if you want to sync later on, you still can come back to
            this screen.
          </p>
          <NavLink className="big-btn" to="/generic">
            Don't connect
          </NavLink>
        </div>
      </section>
    );
  }
}

export default HomePage;
