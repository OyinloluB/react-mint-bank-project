import React, { Component } from "react";

import Down from "../assets/paymentNav/arrow-down.svg";
import Search from "../assets/paymentNav/Search.svg";

class PaymentNav extends Component {
  render() {
    return (
      <div className="paymentnav-container">
        <h2>Payments</h2>
        <div className="outside-column">
          <p className="showing">Showing</p>
          <p className="item-number">
            20&nbsp;
            <img src={Down} className="arrow-down" alt="down" />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>out of 500 payments</span>
          </p>
          <form className="search-content">
            <img src={Search} className="search-icon" alt="search" />
            <input
              type="text"
              placeholder="Search Payments"
              className="search-input"
              name="search"
            />
          </form>
          <p className="show">Show</p>
          <div className="dropdown-lists">
            <li className="toggle">
              All
              <img src={Down} className="dropdown-arrow" alt="toggle" />
            </li>
            <li>All</li>
            <li className="active">Reconcilled</li>
            <li>Un-reconcilled</li>
            <li>Settled</li>
            <li>Unsettled</li>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentNav;
