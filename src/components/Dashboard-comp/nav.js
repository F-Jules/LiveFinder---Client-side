import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div>
          <NavLink to="/connected">
            <img
              src="https://image.flaticon.com/icons/svg/1378/1378756.svg"
              alt="lol"
            />
          </NavLink>
        </div>
        <div>
          <NavLink to="/user-dashboard">
            <img
              src="https://image.flaticon.com/icons/svg/747/747376.svg"
              alt="lol"
            />
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
