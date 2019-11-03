import React from "react";
import { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  //state object used to be here
  render() {
    return (
      <div>
        <div>
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
        </div>
        {this.props.countersArray.map(counterLocal => (
          <Counter
            key={counterLocal.id}
            countLocal={counterLocal.count}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            id={counterLocal.id}
            countersArrayObject={counterLocal}
          />
        ))}
      </div>
    );
  } //end render()

  //handleIncrementButton method used to be here
  //handleDeleteButton method used to be here
  //handleResetButton method used to be here
} //end class

export default Counters;
