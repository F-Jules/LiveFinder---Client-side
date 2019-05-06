import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteConcert } from "../../API/api";
import SpotiPlayer from "./SpotiPlayer.js";
import Nav from "../nav.js";
import PlayListPlayer from "./playListPlayer.js";
function getConcertAddress(concert) {
  return `/concert-info/${concert.id}`;
}

class Dashboard extends Component {
  handleSubmit(concert) {
    deleteConcert(concert.id).then(response => {
      this.props.onConcertDelete(response.data);
    });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <section>
        <header className="Header">
          <Nav />
          <div className="header-card">
            <div className="header-text">
              <div className="img-flex">
                <img className="profilPic" src={currentUser.image} alt="" />
              </div>
              <h1>dashboard</h1>
              <h2>{currentUser.fullName}</h2>
              <p>
                We display for you some of the informations regarding your
                account
              </p>
              <hr />
            </div>
          </div>
        </header>
        <div className="padding-top desktop-cards-section">
          <div>
            <h3>Your next concerts.</h3>

            <p>Here are some of the concert you are attending:</p>
            <hr className="small-hr" />
            {currentUser.concert.map(oneEvent => {
              return (
                <div className="inline-thin-card">
                  <div className="card-thin-img">
                    <p className="date-day">
                      {oneEvent.start.date.slice(5, 7)}
                    </p>
                    <p className="date-month">{oneEvent.start.date.slice(8)}</p>

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
                  <div>
                    <button
                      className="btn-delete"
                      onClick={() => this.handleSubmit(oneEvent)}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <SpotiPlayer {...this.props} />
          </div>
          <div>
            <PlayListPlayer />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
