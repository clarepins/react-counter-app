import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.id}</h4>
        <div>
          <span className={this.getCounterClass()}>{this.formatCount()}</span>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
        </div>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getCounterClass() {
    let classStyles = "badge m-2 badge-";
    classStyles += this.state.count === 0 ? "warning" : "primary";
    return classStyles;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
