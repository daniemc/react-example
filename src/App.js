import React, {
  Component
} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, qty: 0 },
      { id: 2, qty: 0 },
      { id: 3, qty: 0 },
      { id: 4, qty: 0 }
    ]
  };

  handleDeleteQty = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({
      counters
    });
  };

  handleIncrementCounter = counter => {
    let counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index].qty++;
    this.setState({
      counters
    });
  };

  handleResetQty = () => {
    const counters = this.state.counters.map(counter => {
      counter.qty = 0;
      return counter;
    });
    this.setState({
      counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters.filter(c => c.qty > 0).length}
        />
        <main className="container">
          <Counters
            onDeleteQty={this.handleDeleteQty}
            counters={this.state.counters}
            onResetQty={this.handleResetQty}
            onIncrementCounter={this.handleIncrementCounter} />
        </main>
      </React.Fragment>
    );

  }
}

export default App;