import React, { Component } from "react";
import { getTopPlaylist } from "../../API/api";

class PlayListPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playListArray: []
    };
  }

  componentDidMount() {
    getTopPlaylist().then(response => {
      const spotiPlaylists = this.state.playListArray;
      const tempArray = [];
      response.data.items.forEach(oneItem => {
        spotiPlaylists.push(oneItem);
      });
      this.setState({ playListArray: spotiPlaylists });
    });
  }

  render() {
    const { playListArray } = this.state;
    return (
      <section>
        <h3>Your favourite Playlists</h3>
        <p>See the playlist you have created here</p>
        <hr className="small-hr" />
        <ul>
          {playListArray.map(onePlaylist => {
            const artistUrl = `https://open.spotify.com/embed/user/spotify/playlist/${
              onePlaylist.id
            }`;
            return (
              <div key={onePlaylist.id}>
                <h3>{onePlaylist.name}</h3>
                <iframe
                  title={onePlaylist.name}
                  src={artistUrl}
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              </div>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default PlayListPlayer;
