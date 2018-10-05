import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { qty } = this.props.counter;
    return qty === 0 ? "Cero" : qty;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.qty === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrementCounter(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Incrementar
        </button>
        <button
          onClick={() => this.props.onDeleteQty(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Eliminar
        </button>
      </div>
    );
  }
}

export default Counter;
