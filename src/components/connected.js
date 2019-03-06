import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import TopArtistsLive from "./TopArtists";
import { getLogOut } from "../api.js";

import "./connected.css";

import UserRelatedConcerts from "./UserRelatedConcerts";
import TopFrenchPage from "./TopFrenchPage";

class Connected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topArtists: [],
      topArtistName: [],
      concertArray: []
    };
  }

  componentDidMount() {
    const { match, history } = this.props;

    if (match.params.loginToken) {
      axios
        .post("http://localhost:8888/auth/token-login", match.params)
        .then(response => {
          console.log("Logged-In", response.data);
          history.replace("/connected");
          this.props.loggedIn(response.data);
        })
        .catch(err => alert("poop"));
    }
  }

  logoutClick() {
    getLogOut().then(response => {
      console.log("LOGGED OUT");
      console.log(this.state.currentUser);

      this.props.loggedIn(null);
    });
  }

  render() {
    // const { currentUser } = this.props;
    // const { topArtist } = this.state;
    // console.log("loooooooooool :", currentUser);

    if (!this.props.currentUser) {
      return <p>Loading...</p>;
    }
    return (
      <section className="Connected">
        <header className="Header">
          <div className="header-card">
            <div className="header-text">
              <div className="img-flex">
                <img
                  className="profilPic"
                  src={this.props.currentUser.image}
                  alt=""
                />
              </div>

              <h1>Hi {this.props.currentUser.fullName}</h1>
              <hr />
              <h2>Kean for new concerts?</h2>
              <p>
                Check out the next live bands arround, any trending concerts
                arround any more.
              </p>
              <small>profile -></small>
            </div>
          </div>
        </header>

        <TopArtistsLive />
        <div className="section-2">
          <div className="section-2-text">
            <h1>What the fuck mate</h1>
            <span>\\\\\\\\\\\\\\</span>
            <p>Lorem Ipsum dolore sit amet</p>
            <div className="flex-small-cards">
              <div className="small-card">
                <h3>Hello</h3>
              </div>
              <div className="small-card">
                <h3>Hello</h3>
              </div>
              <div className="small-card">
                <h3>Hello</h3>
              </div>
              <div className="small-card">
                <h3>Hello</h3>
              </div>
              <div className="small-card">
                <h3>Hello</h3>
              </div>
              <div className="small-card">
                <h3>Hello</h3>
              </div>
              <div className="small-card">
                <h3>Hello</h3>
              </div>
            </div>
          </div>
        </div>

        <UserRelatedConcerts />
        <TopFrenchPage />
        <NavLink to="/">
          <button onClick={() => this.logoutClick()}>Log Out</button>
        </NavLink>
      </section>
    );
  }
}

export default Connected;
