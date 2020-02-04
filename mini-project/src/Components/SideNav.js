import React, { Component } from "react";

import overview from "../assets/sideNav/overview.svg";

//payments
import payments from "../assets/sideNav/payments.svg";
import reconcilled from "../assets/sideNav/reconcilled-payments.svg";
import unreconcilled from "../assets/sideNav/unreconcilled-payments.svg";
import settlement from "../assets/sideNav/settlement.svg";

//orders
import orders from "../assets/sideNav/all-orders.svg";
import pending from "../assets/sideNav/pending-order.svg";
import reconOrders from "../assets/sideNav/reconcilled-orders.svg";

//merchant
import merchant from "../assets/sideNav/profile.svg";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav-container">
        <div className="button">
          <button className="button"> Generate Invoice</button>
        </div>
        <div className="main">
          <h5>Main</h5>
          <p className="active">
            <img src={overview} className="overview" alt="overview" />
            &nbsp; Overview
          </p>
        </div>
        <div className="payments">
          <h5>Payments</h5>
          <p>
            <img src={payments} className="payments" alt="payments" />
            &nbsp; All payments
          </p>
          <p>
            <img src={reconcilled} className="reconcilled" alt="reconcilled" />
            &nbsp; Reconcilled Payments
          </p>
          <p>
            <img
              src={unreconcilled}
              className="unreconcilled"
              alt="unreconcilled"
            />
            &nbsp; Un - Reconcilled Payments
          </p>
          <p>
            <img src={settlement} className="settlement" alt="settlement" />
            &nbsp; Manual Settlement
          </p>
        </div>
        <div className="orders">
          <h5>Orders</h5>
          <p>
            <img src={orders} className="orders" alt="orders" />
            &nbsp; All payments
          </p>
          <p>
            <img src={pending} className="pending" alt="pending" />
            &nbsp; Reconcilled Payments
          </p>
          <p>
            <img src={reconOrders} className="reconOrders" alt="reconOrders" />
            &nbsp; Un - Reconcilled Payments
          </p>
        </div>
        <div className="merchant">
          <p>
            <img src={merchant} className="merchant" alt="merchant" />
            &nbsp; Merchant
          </p>
        </div>
      </div>
    );
  }
}

export default SideNav;
