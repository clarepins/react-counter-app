import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.counter.id}</h4>
        <div>
          <span className={this.getCounterClass()}>{this.formatValue()}</span>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
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
    classStyles += this.state.value === 0 ? "warning" : "primary";
    return classStyles;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
