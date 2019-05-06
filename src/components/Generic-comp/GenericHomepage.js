import React, { Component } from "react";
import { genericInfos } from "../API/api.js";
import NextConcertsParis from "../Generic-comp/GenericNextConcerts";
import { Link } from "react-router-dom";

import "./GenericHomepage.css";

class GenericInfosHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      franceTopArtists: []
    };
  }

  componentDidMount() {
    genericInfos().then(response => {
      this.setState({
        franceTopArtists: response.data.artist
      });
    });
  }

  oneImg(el) {
    return Object.values(el);
  }

  render() {
    const { franceTopArtists } = this.state;
    return (
      <section className="GenericInfosHome">
        <header>
          <nav>
            <Link to="/">
              <h1 className="btn-home">
                <img
                  src="https://image.flaticon.com/icons/svg/130/130882.svg"
                  alt=""
                />
              </h1>
            </Link>
          </nav>
          <div>
            <span className="outline-text">GENERIC</span>
            <hr className="small-hr" />
            <h1>
              Hello.
              <br /> You are not connected?
            </h1>
            <h2>Don't panic, we got your back!</h2>
            <p>
              You are currently on the unsynchronised page. You will discover
              artits and lives that are famous around you :)
            </p>
          </div>
        </header>
        <h3>Top Artists in France</h3>
        <hr className="small-hr" />
        <p>Discover what french people like to listen right now</p>
        {franceTopArtists.map(oneArtist => {
          return (
            <div className="column-card-with-image" key={oneArtist.mbid}>
              <img src={this.oneImg(oneArtist.image[4])} alt="artist picto" />
              <div className="column-card-with-image-text">
                <h3>{oneArtist.name}</h3>

                <p>{oneArtist.listeners} Listeners</p>
              </div>
            </div>
          );
        })}
        <NextConcertsParis />
      </section>
    );
  }
}

export default GenericInfosHome;
