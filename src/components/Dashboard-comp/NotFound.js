import React, { Component } from "react";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <p>Failed to connect</p>
      </section>
    );
  }
}

export default NotFound;
