import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GenericNextConcerts.css";
import { nextConcertsParis } from "../API/api";

function getConcertAddress(concert) {
  return `/concert-info/${concert.id}`;
}

class NextConcertsParis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concertsParis: []
    };
  }

  componentDidMount() {
    nextConcertsParis().then(response => {
      this.setState({
        concertsParis: response.data
      });
    });
  }

  render() {
    const { concertsParis } = this.state;
    return (
      <section className="NextConcertsParis">
        <h3>Next Concerts in Paris</h3>

        <hr className="small-hr" />
        <p>See the upcomming event in Paris</p>
        <div className="column-card-flex">
          {concertsParis.map(oneConcert => {
            return (
              <div className="column-card">
                <Link to={getConcertAddress(oneConcert)}>
                  <p>
                    <span>{oneConcert.type}</span>
                    {/* <hr className="small-hr" /> */}
                  </p>
                  <h3>{oneConcert.displayName}</h3>
                  <p>
                    <span>{oneConcert.venue.displayName}</span>
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default NextConcertsParis;
