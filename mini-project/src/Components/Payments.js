import React, { Component } from "react";

import PaymentNav from "./PaymentNav";
import PaymentRow from "./PaymentRow";

class Payments extends Component {
  state = {};
  render() {
    return (
      <div>
        <PaymentNav />
        <PaymentRow />
      </div>
    );
  }
}

export default Payments;
