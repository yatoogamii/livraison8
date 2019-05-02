import React from 'react';
import '../App.css';

// rcc react create class

export default class Input extends React.Component {
  render() {
    return (
      <input disabled className="App-calculator__input" value={this.props.value}>

      </input>
    );
  }
}
