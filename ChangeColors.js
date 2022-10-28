import React, { Component } from "react";
import "./style.css";

export class ChangeColors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRed: true,
      showYellow: false,
      showGreen: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showRed: false, showYellow: true, showGreen: false });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.showYellow) {
      setTimeout(() => {
        this.setState({ showGreen: true, showRed: false, showYellow: false });
      }, 1000);
    }
    if (this.state.showRed) {
      setTimeout(() => {
        this.setState({ showGreen: false, showRed: false, showYellow: true });
      }, 1000);
    }
    if (this.state.showGreen) {
      setTimeout(() => {
        this.setState({ showGreen: false, showRed: true, showYellow: false });
      }, 1000);
    }
  }
  render() {
    return (
      <div>
        <h1>TRAFFIC LIGHTS</h1>
        <div className="main">
            <center>
          <div className={this.state.showRed ? "circle-red" : "circle"}></div>
          <div
            className={this.state.showYellow ? "circle-yellow" : "circle"}
          ></div>
          <div
            className={this.state.showGreen ? "circle-green" : "circle"}
          ></div>
          <div className="poll"></div>
          </center>
        </div>
      </div>
    );
  }
}

export default ChangeColors;
