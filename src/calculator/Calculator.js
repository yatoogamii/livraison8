import React from 'react';
import Input from './Input.js';
import Button from './Button.js';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="App-calculator">
          <Input></Input>
          <Button value="AC"></Button>
          <Button value="Del"></Button>
          <Button value="%"></Button>
          <Button value="÷"></Button>
          <Button value="7"></Button>
          <Button value="8"></Button>
          <Button value="9"></Button>
          <Button value="x"></Button>
          <Button value="4"></Button>
          <Button value="5"></Button>
          <Button value="6"></Button>
          <Button value="-"></Button>
          <Button value="1"></Button>
          <Button value="2"></Button>
          <Button value="3"></Button>
          <Button value="+"></Button>
          <Button value="0"></Button>
          <Button value="."></Button>
          <Button value="="></Button>
        </div>
    );
  }
}


