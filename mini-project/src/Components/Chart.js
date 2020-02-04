import React, { Component } from "react";
import Order from "./Order";

import Graph from "../assets/Graph/graph-image.svg";
import Down from "../assets/Graph/arrow-down.svg";
import left from "../assets/Graph/arrow-left.svg";
import right from "../assets/Graph/arrow-right.svg";

class Chart extends Component {
  state = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  };
  render() {
    return (
      <div className="order-container">
        <div className="chart">
          <div className="date">
            <h4>Today: 5, Aug 2018</h4>
            <p>
              1 Jan - 1 Jun <img src={Down} className="down" alt="down" />
            </p>
            <div>
              <img src={left} className="left" alt="left" />
              <img src={right} className="right" alt="right" />
            </div>
          </div>
          <div className="months">
            {this.state.months.map(month => (
              <p className="month">{month}</p>
            ))}
          </div>
          <img src={Graph} className="graph" alt="graph" />
        </div>
        <Order
          className="order"
          title={"Order"}
          status={"Pending Orders"}
          reconcilled={"Reconcilled Orders"}
          total={"Total Orders"}
        />
        <Order
          className="payment"
          title={"Payment"}
          status={"Un-reconcilled Payments"}
          reconcilled={"Reconcilled Payments"}
          total={"Total Payments"}
        />
      </div>
    );
  }
}

export default Chart;
