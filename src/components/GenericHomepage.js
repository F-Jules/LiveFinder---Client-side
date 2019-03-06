import React, { Component } from "react";
import { genericInfos } from "../api.js";
import NextConcertsParis from "./GenericNextConcerts";

import "./GenericHomepage.css";

class GenericInfosHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      franceTopArtists: []
    };
  }

  componentDidMount() {
    genericInfos()
      // get data from our EXPRESS API
      .then(response => {
        // console.log(response.data);
        this.setState({
          franceTopArtists: response.data.artist
        });
      });
  }

  oneImg(el) {
    // console.log(el);

    return Object.values(el);
  }

  render() {
    const { franceTopArtists } = this.state;
    console.log("aaaaaaaaaaaaaaa----------", franceTopArtists);
    // console.log(franceTopArtists);
    return (
      <section className="GenericInfosHome">
        <header>
          <div>
            <span className="outline-text">GENERIC</span>
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
        <h1>Top Artists in France</h1>
        <span>\\\\\\\\\\\\\\</span>
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
