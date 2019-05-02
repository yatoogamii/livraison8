import React from 'react';

// rcc react create class

export default class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
      {this.props.value}
      </button>
    );
  }
}
