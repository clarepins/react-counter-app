import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <img src="https:/picsum.photos/1500/200" alt="Random pic" />
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
