import React from 'react';
import Input from './Input.js';
import Button from './Button.js';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="App-calculator">
          <Input></Input>
          <Button className="App-calculator__button" value="AC"></Button>
          <Button className="App-calculator__button" value="Del"></Button>
          <Button className="App-calculator__button" value="%"></Button>
          <Button className="App-calculator__button" value="÷"></Button>
          <Button className="App-calculator__button" value="7"></Button>
          <Button className="App-calculator__button" value="8"></Button>
          <Button className="App-calculator__button" value="9"></Button>
          <Button className="App-calculator__button" value="x"></Button>
          <Button className="App-calculator__button" value="4"></Button>
          <Button className="App-calculator__button" value="5"></Button>
          <Button className="App-calculator__button" value="6"></Button>
          <Button className="App-calculator__button" value="-"></Button>
          <Button className="App-calculator__button" value="1"></Button>
          <Button className="App-calculator__button" value="2"></Button>
          <Button className="App-calculator__button" value="3"></Button>
          <Button className="App-calculator__button" value="+"></Button>
          <Button className="App-calculator__button col-2" value="0"></Button>
          <Button className="App-calculator__button" value="."></Button>
          <Button className="App-calculator__button" value="="></Button>
        </div>
    );
  }
}


