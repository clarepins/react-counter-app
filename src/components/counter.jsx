import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getCounterClass()}>{this.formatCount()}</span>
          <button
            onClick={() => this.handleIncrement({ id: 1 })}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <ul>{this.messageIfNoTags()}</ul>
        </div>
      </React.Fragment>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  messageIfNoTags() {
    if (this.state.tags.length === 0) return "Please add a tag";

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
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
