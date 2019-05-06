import React, { Component } from "react";

import { getTopArtistsList } from "../api.js";

class TopArtistsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topArtistsList: []
    };
  }

  componentDidMount() {
    const { topArtistsList } = this.state;
    getTopArtistsList().then(response => {
      this.setState({ topArtistsList: response.data });
    });
  }

  render() {
    return (
      <section className="TopArtistsList">
        <h2>hello top artists list</h2>
      </section>
    );
  }
}

export default TopArtistsList;
