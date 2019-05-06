import React, { Component } from "react";
import "./spotiPlayer.css";
import { spotiPlayer } from "../../API/api";

function sliceToArray(array) {
  const randomNumber = Math.floor(Math.random() * 14) + 1;
  const secondNumber = randomNumber + 5;
  return array.slice(randomNumber, secondNumber);
}

class SpotiPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedArtists: []
    };
  }

  componentDidMount() {
    spotiPlayer().then(response => {
      this.setState({ relatedArtists: response.data.artists });
    });
  }

  render() {
    const { relatedArtists } = this.state;
    const spotArray = sliceToArray(relatedArtists);
    return (
      <section className="spotiPlayer">
        <h3>Discover some Artists with us</h3>
        <p>Check the Random Players to discover or remember new artists</p>
        <hr className="small-hr" />
        <ul>
          {spotArray.map(oneArtist => {
            const artistUrl = `https://open.spotify.com/embed/artist/${
              oneArtist.id
            }`;
            const followUrl = `https://open.spotify.com/follow/1/?uri=spotify:artist:${
              oneArtist.id
            }&size=basic&theme=light`;
            return (
              <div key={oneArtist.id}>
                <h3>{oneArtist.name}</h3>
                <iframe
                  title={oneArtist.name}
                  src={artistUrl}
                  width="300"
                  height="80"
                  frameBorder="10"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
                <div>
                  <iframe
                    title={oneArtist.name}
                    src={followUrl}
                    width="300"
                    height="56"
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true"
                  />
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default SpotiPlayer;
