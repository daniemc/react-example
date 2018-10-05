import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  formatCount() {
    const { qty } = this.props.counter;
    return qty === 0 ? "Cero" : qty;
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.props.counter.qty === 0 ? "" : "";
    return classes;
  }

  render() {
    return (
      <div className="counter">
        <p className={`bdg ${this.getBadgeClasses()}`}>{this.formatCount()}</p>
        <button
          onClick={() => this.props.onIncrementCounter(this.props.counter)}
          className="btn btn-pri"
        >
          Incrementar
        </button>
        <button
          onClick={() => this.props.onDeleteQty(this.props.counter.id)}
          className="btn btn-sec"
        >
          Eliminar
        </button>
      </div>
    );
  }
}

export default Counter;
