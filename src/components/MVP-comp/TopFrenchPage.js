import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopFrenchPage.css";
import { getTopFrench } from "../API/api.js";

function getConcertAddress(concert) {
  return `/concert-info/${concert.id}`;
}

class TopFrenchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topFrenchArtists: []
    };
  }

  componentDidMount() {
    getTopFrench().then(response => {
      this.setState({
        topFrenchArtists: response.data
      });
    });
  }
  render() {
    const { topFrenchArtists } = this.state;
    return (
      <section className="desktop-cards-section">
        <div className="desktop-card-heading flex-item1">
          <h3>Trending lives around you.</h3>

          <p>
            Discover concerts from bands that are trending around you (updated
            every Fridays).
          </p>
          <hr className="small-hr" />
        </div>
        <div className="flex-item2">
          {topFrenchArtists.map(oneArtist => {
            return (
              <div key={oneArtist.resultsPage.results.event[0].id}>
                <hr />
                <h3>
                  {
                    oneArtist.resultsPage.results.event[0].performance[0]
                      .displayName
                  }
                </h3>
                <div className="inline-carousel desktop-caroussel">
                  {oneArtist.resultsPage.results.event.map(oneEvent => {
                    return (
                      <div key={oneEvent.displayName}>
                        <div className="inline-card-v2">
                          <span className="outline-text">{oneEvent.type}</span>
                          <span className="card-btn">{/* <Link to />+ */}</span>

                          <div className="card-text">
                            <div className="inline-card-v2-text">
                              <Link to={getConcertAddress(oneEvent)}>
                                <h4>{oneEvent.venue.displayName}</h4>
                                <hr />
                                <h3>{oneEvent.displayName}</h3>
                              </Link>
                            </div>
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
      </section>
    );
  }
}

export default TopFrenchPage;
