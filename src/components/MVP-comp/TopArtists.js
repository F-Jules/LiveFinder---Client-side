import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTopArtist, concertInfo } from "../API/api.js";

import "./TopArtists.css";

function getConcertAddress(concert) {
  return `/concert-info/${concert.id}`;
}
class TopArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topArtists: []
    };
  }
  componentDidMount() {
    getTopArtist().then(response => {
      this.setState({ topArtists: response.data });
    });
  }

  render() {
    const { topArtists } = this.state;
    return (
      <section className="padding-top off-grid-section desktop-cards-section">
        <div className="desktop-card-heading">
          <h3>Your next recommended concerts.</h3>

          <p>
            Check out the next concerts from the artists you most listened to.
          </p>
          <hr className="small-hr" />
        </div>

        <div>
          {topArtists.map(oneArtist => {
            return (
              <div
                key={
                  oneArtist.resultsPage.results.event[0].performance[0]
                    .displayName
                }
              >
                <h3>
                  #
                  {
                    oneArtist.resultsPage.results.event[0].performance[0]
                      .displayName
                  }
                </h3>
                <div className="inline-carousel desktop-caroussel">
                  {oneArtist.resultsPage.results.event.map(oneEvent => {
                    return (
                      <div key={oneEvent.displayName}>
                        <div className="inline-card">
                          <span className="outline-text">{oneEvent.type}</span>
                          <span className="card-btn">{/* <Link to />+ */}</span>

                          <div className="card-text">
                            <Link to={getConcertAddress(oneEvent)}>
                              <h4>{oneEvent.venue.displayName}</h4>
                              <hr />
                              <h3>{oneEvent.displayName}</h3>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* <small> see more</small> */}
      </section>
    );
  }
}
export default TopArtists;
