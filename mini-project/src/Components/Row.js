import React, { Component } from "react";

import Arrow from "../assets/Graph/arrow-down.svg";

class Row extends Component {
  render() {
    return (
      <tr>
        <td className="item-content">
          <span>VW</span>&nbsp; &nbsp;Apple Mac Book 15" 250 SSD 12GB
        </td>
        <td>$73430</td>
        <td>1234567890</td>
        <td>12:30</td>
        <td className={this.props.status}>{this.props.status}</td>
        <td>
          <img src={Arrow} className="arrow-row" alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default Row;
