import React, { Component } from "react";

import Row from "./Row";

class PaymentRow extends Component {
  state = {
    reconcilled: "Reconcilled",
    unreconcilled: "Un-reconcilled",
    pending: "Pending"
  };
  render() {
    return (
      <div className="paymentrow-container">
        <table>
          <tr>
            <th>Item Type</th>
            <th>Price</th>
            <th>Transaction No</th>
            <th colspan="3">Time</th>
          </tr>
          <Row status={this.state.reconcilled} />
          <Row status={this.state.pending} />
          <Row status={this.state.reconcilled} />
          <Row status={this.state.reconcilled} />
          <Row status={this.state.pending} />
          <Row status={this.state.unreconcilled} />
          <Row status={this.state.reconcilled} />
          <Row status={this.state.reconcilled} />
          <Row status={this.state.pending} />
        </table>
      </div>
    );
  }
}

export default PaymentRow;
