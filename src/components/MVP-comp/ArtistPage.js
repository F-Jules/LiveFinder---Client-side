import React, { Component } from "react";
import "./GenericNextConcerts.css";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistIndex: [],
      artistTest: ""
    };
  }

  componentDidMount() {
    this.setState({ artistTest: this.props });
  }
  render() {
    const { artistTest } = this.state;
    return <h1 value={artistTest.artistName}>{artistTest.artistName}</h1>;
  }
}

export default ArtistDetails;
