import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https:/picsum.photos/300"
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageURL} alt="Random pic" />
        <div>
          <span className={this.getCounterClass()}>{this.formatCount()}</span>
          <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
      </React.Fragment>
    );
  }

  getCounterClass() {
    let classStyles = "badge m-2 badge-";
    classStyles += this.state.count === 0 ? "warning" : "primary";
    return classStyles;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
