import React, { Component } from "react";

import graphMini from "../assets/trans-value/mini-graph.svg";

class TransValue extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>
          <p>{this.props.title}</p>
          <p className="value">{this.props.value}</p>
        </div>
        <div className="trans-image">
          <img src={graphMini} className="graphMini" alt="graphMini" />
        </div>
      </div>
    );
  }
}

export default TransValue;
