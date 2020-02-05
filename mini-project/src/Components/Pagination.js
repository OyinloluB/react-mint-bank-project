import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div className="page-container">
        <div className="page-update">
          <p>Showing 1 to 10 out of 500 pages</p>
        </div>
        <div className="page-control">
          <p>Previous</p>
          <p>1</p>
          <p>2</p>
          <p>Next</p>
        </div>
      </div>
    );
  }
}

export default Pagination;
