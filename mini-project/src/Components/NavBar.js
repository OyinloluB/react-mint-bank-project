import React, { Component } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/Search.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.jpg";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="left-content">
          <img src={logo} className="logo" alt="logo" />
          <div className="search-items">
            <img src={search} className="search" alt="search" />
            <input
              type="text"
              className="input-field"
              placeholder="Search..."
              name="search"
            />
          </div>
        </div>
        <div className="right-content">
          <p className="support">Support</p>
          <p className="FAQ">FAQ</p>
          <img src={notification} className="notification" alt="notification" />
          <div className="user">
            <div className="user-info">
              <div className="span">Hello</div>
              <div className="name">Oyinloluwa</div>
            </div>
            <img src={profile} className="profile" alt="profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
