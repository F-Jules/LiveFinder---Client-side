import React, { Component } from "react";
import { concertInfo, addConcert } from "../API/api";
import Nav from "../Dashboard-comp/nav";

import "./ConcertInfo.css";

class ConcertInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songkick: [],
      lastfm: [],
      isSubmitSuccessful: false
    };
  }

  checkingIfAttending(currentUser) {
    const eventId = this.props.match.params.concertId;
    const currentUserConcert = this.props.currentUser.concert;
    const userConcertArray = [];
    currentUserConcert.forEach(oneId => {
      userConcertArray.push(oneId.id);
    });
    const compare = function(element) {
      return element - eventId === 0;
    };
    return userConcertArray.some(compare);
  }

  componentDidMount() {
    const { params } = this.props.match;

    concertInfo(params.concertId).then(response => {
      const lastfmData = this.state.lastfm;
      const songkickData = this.state.songkick;
      songkickData.push(response.data[0]);
      lastfmData.push(response.data[1]);
      this.setState({
        songkick: songkickData,
        lastfm: lastfmData
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.props.match;
    addConcert(params.concertId).then(response => {
      this.props.addConcertToUser(response.data);
      this.setState({ isSubmitSuccessful: true });
    });
  }

  oneImg(el) {
    return Object.values(el);
  }

  render() {
    const { isSubmitSuccessful, lastfm, songkick } = this.state;
    const { currentUser } = this.props;
    return this.checkingIfAttending(currentUser) ? (
      <section className="ConcertInfo">
        {lastfm.map(oneArtist => {
          return (
            <div key={oneArtist.name}>
              <div>
                <Nav />
              </div>
              <img
                className="bk-img"
                src={this.oneImg(oneArtist.image[4])}
                alt="artist picto"
              />
              <div>
                <div className="artist-header">
                  <div className="artist-card">
                    <img
                      className=""
                      src={this.oneImg(oneArtist.image[4])}
                      alt="artist picto"
                    />
                  </div>
                  <h1>{oneArtist.name}</h1>
                  <h4>Total listeners: {oneArtist.stats.listeners}</h4>
                </div>
                <hr className="small-hr" />
                <h3>Similar Artists.</h3>
                <div className="inline-small-carousel">
                  {oneArtist.similar.artist.map(oneSimilarArtist => {
                    return (
                      <div
                        className="inline-small-card"
                        key={oneSimilarArtist.url}
                      >
                        <h4>{oneSimilarArtist.name}</h4>
                        <img
                          src={this.oneImg(oneSimilarArtist.image[2])}
                          alt="artist picto"
                        />
                      </div>
                    );
                  })}
                </div>
                <hr className="small-hr" />
                <h3>Genre.</h3>
                <div className="genre-sec">
                  {oneArtist.tags.tag.map(oneGenre => {
                    return (
                      <div key={oneGenre.url}>
                        <h5>{oneGenre.name}</h5>
                      </div>
                    );
                  })}
                </div>
                <div className="summary">
                  <hr className="small-hr" />
                  <h3>Bio.</h3>
                  <p>{oneArtist.bio.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="concert-card">
          {songkick.map(oneEvent => {
            return (
              <div>
                <p>
                  <span className="concert-date">{oneEvent.start.date}</span>
                </p>
                <p>
                  <span className="concert-place">
                    {oneEvent.venue.displayName}
                  </span>
                </p>
                <h1>{oneEvent.displayName}</h1>
                <hr className="small-hr" />
                <p>{oneEvent.type}</p>
                <p>
                  {oneEvent.venue.street}, {oneEvent.location.city},{" "}
                  {oneEvent.venue.zip}
                </p>
              </div>
            );
          })}
          {/* a changer selon vos desirs mes seigneurs... */}
          <h2>Great! You are already attending this concert .</h2>
        </div>
      </section>
    ) : (
      <section className="ConcertInfo">
        {lastfm.map(oneArtist => {
          return (
            <div key={oneArtist.mbid}>
              <div>
                <Nav />
              </div>
              <img
                className="bk-img"
                src={this.oneImg(oneArtist.image[4])}
                alt="artist picto"
              />
              <div>
                <div className="artist-header">
                  <div className="artist-card">
                    <img
                      className=""
                      src={this.oneImg(oneArtist.image[4])}
                      alt="artist picto"
                    />
                  </div>
                  <h1>{oneArtist.name}</h1>

                  <h3>Total listeners: {oneArtist.stats.listeners}</h3>
                </div>
                <hr className="small-hr" />
                <h3>Similar Artists.</h3>
                <div className="inline-small-carousel">
                  {oneArtist.similar.artist.map(oneSimilarArtist => {
                    return (
                      <div
                        className="inline-small-card"
                        key={oneSimilarArtist.url}
                      >
                        <h4>{oneSimilarArtist.name}</h4>
                        <img
                          src={this.oneImg(oneSimilarArtist.image[2])}
                          alt="artist picto"
                        />
                      </div>
                    );
                  })}
                </div>
                <hr className="small-hr" />
                <h3>Genre.</h3>
                <div className="genre-sec">
                  {oneArtist.tags.tag.map(oneGenre => {
                    return (
                      <div key={oneGenre.url}>
                        <h5>{oneGenre.name}</h5>
                      </div>
                    );
                  })}
                </div>
                <div className="summary">
                  <hr className="small-hr" />
                  <h3>Bio.</h3>
                  <p>{oneArtist.bio.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="concert-card">
          {songkick.map(oneEvent => {
            return (
              <div key={oneEvent.id}>
                <p>
                  <span className="concert-date">{oneEvent.start.date}</span>
                </p>
                <h1>{oneEvent.displayName}</h1>
                <hr className="small-hr" />
                <p>{oneEvent.type}</p>
                <p>{oneEvent.venue.displayName}</p>
                <p>
                  {oneEvent.venue.street},{oneEvent.location.city},{" "}
                  {oneEvent.venue.zip}
                </p>
              </div>
            );
          })}

          <button
            className="btn from-top"
            onClick={event => this.handleSubmit(event)}
          >
            <h3>ATTENDING</h3>
          </button>
        </div>
      </section>
    );
  }
}

export default ConcertInfo;
