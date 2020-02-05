import React, { Component } from "react";
import "./App.css";

//Components
import NavBar from "./Components/NavBar";
import SideNav from "./Components/SideNav";
import TransValue from "./Components/TransValue";
import Chart from "./Components/Chart";
import Payment from "./Components/Payments";
// import PaymentRow from "./Components/PaymentRow";

class App extends Component {
  state = {
    titleOne: "Daily Transaction Value",
    titleTwo: "Total Transaction Value",
    valueOne: "2,342",
    valueTwo: "4,000,000",
    valueThree: "425,000"
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <SideNav />
        <TransValue
          className="trans-container"
          title={this.state.titleOne}
          value={this.state.valueOne}
        />
        <TransValue
          className="trans-container2"
          title={this.state.titleOne}
          value={this.state.valueTwo}
        />
        <TransValue
          className="trans-container3"
          title={this.state.titleTwo}
          value={this.state.valueThree}
        />
        <TransValue
          className="trans-container4"
          title={this.state.titleTwo}
          value={this.state.valueTwo}
        />
        <Chart />
        <Payment />
      </div>
    );
  }
}

export default App;
