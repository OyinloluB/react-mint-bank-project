import React, { Component } from "react";

import Bar from "../assets/Graph/bar.svg";

class Order extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.className}>
        <h4>{this.props.title}</h4>
        <div className="container">
          <img src={Bar} className="bar" alt="bar" />
          <p>
            {this.props.status}:&nbsp;
            <span className="spanOne">20</span>
          </p>
          <p>
            {this.props.reconcilled}:&nbsp;
            <span className="spanTwo">80</span>
          </p>
          <p>
            {this.props.total}:&nbsp;
            <span className="spanThree">100</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Order;
