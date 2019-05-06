import React, { Component } from "react";
import { Link } from "react-router-dom";
function getConcertAddress(concert) {
  return `/concert-info/${concert.id}`;
}
class AttendingEvent extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <section className="AttendingEvent">
        <div className="AttendingEvent-text">
          <h3>Your Attending Concert</h3>

          <p>Here are your next live events planned.</p>
          <hr className="small-hr" />
          <div className="flex-small-cards">
            {currentUser.concert.map(oneEvent => {
              return (
                <div key={oneEvent.id} className="small-card">
                  <div className="small-card-text">
                    <div className="small-card-date">
                      <p>{oneEvent.start.date}</p>
                      <p>{oneEvent.venue.displayName}</p>
                    </div>
                    <div>
                      {/* <hr className="" /> */}
                      <Link to={getConcertAddress(oneEvent)}>
                        <h3>{oneEvent.performance[0].displayName}</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default AttendingEvent;
