import React, { Component } from "react";
import { getRelatedConcerts } from "../API/api.js";

import "./UserRelatedConcerts.css";
import { Link } from "react-router-dom";
function getConcertAddress(concert) {
  return `/concert-info/${concert.id}`;
}

class UserRelatedConcerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistConcerts: []
    };
  }

  componentDidMount() {
    getRelatedConcerts().then(response => {
      this.setState({
        artistConcerts: response.data
      });
    });
  }

  render() {
    const { artistConcerts } = this.state;
    return (
      <section className="">
        <h3>You may also like.</h3>

        <p>Discover some concerts we think you might enjoy</p>
        <hr className="small-hr" />

        <div>
          {artistConcerts.map(oneArtist => {
            return (
              <div
                className="inline-carousel"
                key={oneArtist.resultsPage.results.event[0].displayName}
              >
                <div className="inline-carousel">
                  {oneArtist.resultsPage.results.event.map(oneEvent => {
                    return (
                      <div key={oneEvent.id} className="inline-thin-card">
                        <div className="card-thin-img">
                          <p className="date-day">
                            {oneEvent.start.date.slice(5, 7)}
                          </p>
                          <p className="date-month">
                            {oneEvent.start.date.slice(8)}
                          </p>

                          <p className="date-year">
                            {oneEvent.start.date.slice(0, 4)}
                          </p>
                        </div>

                        <div className="text-thin-card">
                          <h4>{oneEvent.venue.displayName}</h4>
                          {/* <hr className="" /> */}
                          <Link to={getConcertAddress(oneEvent)}>
                            <h3>{oneEvent.performance[0].displayName}</h3>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <p>{oneArtist.popularity}</p>
                <img src={oneArtist.images[1].url} alt="img" /> */}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default UserRelatedConcerts;
