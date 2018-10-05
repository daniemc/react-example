import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onResetQty,
      onDeleteQty,
      counters,
      onIncrementCounter
    } = this.props;

    return (
      <div>
        <button onClick={onResetQty} className="btn btn-trh">
          Restablecer valores
        </button>
        <div className="counters-group">
          {counters.length > 0 &&
            counters.map(counter => (
              <Counter
                key={counter.id}
                counter={counter}
                onIncrementCounter={onIncrementCounter}
                onDeleteQty={onDeleteQty}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Counters;
