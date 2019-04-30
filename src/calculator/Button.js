import React from 'react';

// rcc react create class

export default class Button extends React.Component {
  render() {
    return (
      <button>
      {this.props.value}
      </button>
    );
  }
}
