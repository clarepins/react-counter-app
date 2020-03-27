import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <React.Fragment>
        <h4>Counter #{counter.id}</h4>
        <div>
          <span className={this.getCounterClass()}>{this.formatValue()}</span>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            + 1
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            - 1
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getCounterClass() {
    let classStyles = "badge m-2 badge-";
    classStyles += this.props.counter.value === 0 ? "warning" : "primary";
    return classStyles;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
