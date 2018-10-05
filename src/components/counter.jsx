import React, { Component } from "react";

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
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrementCounter(this.props.counter)}
          className=""
        >
          Incrementar
        </button>
        <button
          onClick={() => this.props.onDeleteQty(this.props.counter.id)}
          className=""
        >
          Eliminar
        </button>
      </div>
    );
  }
}

export default Counter;
