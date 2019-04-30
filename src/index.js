import React, { Component } from 'react';
import Calculator from './calculator/Calculator.js';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator></Calculator>
      </div>

);
  }
}

export default App;





ReactDOM.render(<App />, document.getElementById('root'));
