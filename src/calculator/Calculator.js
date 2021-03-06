/* eslint no-eval: 0 */

import React from 'react';
import Input from './Input.js';
import Button from './Button.js';

export default class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.addValue = this.addValue.bind(this);
    this.showResult = this.showResult.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.deleteLastValue = this.deleteLastValue.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  addValue(operator) {
    if (this.state.inputValue === 'ERROR') {
      this.setState({inputValue: ''})
    } else {
      this.setState({inputValue: this.state.inputValue + operator})
    }
  }

  resetInput() {
    this.setState({inputValue: ''})
  }

  deleteLastValue() {
    this.setState({inputValue: this.state.inputValue.slice(0, -1)})
  }

  showResult() {
    if (this.state.inputValue === 'ERROR' || this.state.inputValue === '') {
      this.setState({
        inputValue: '',
      })
    } else {

      try {
        eval(this.state.inputValue);
      } catch (e) {
        if (e instanceof SyntaxError) {
          return this.setState({inputValue: "ERROR"})
        }
      }
      this.setState({inputValue: String(eval(this.state.inputValue))})
    }
  }



  render() {
    let inputValue = this.state.inputValue;

    return (
      <div className="App-calculator">
        <Input className={(this.state.inputValue === 'ERROR') ? 'App-calculator__input App-calculator__input--error': 'App-calculator__input' } value={inputValue}></Input>
        <Button className="App-calculator__button App-calculator__button--dark-color" value="AC" onClick={ () => this.resetInput() }></Button>
        <Button className="App-calculator__button App-calculator__button--dark-color" value="Del" onClick={ () => this.deleteLastValue()} ></Button>
        <Button className="App-calculator__button App-calculator__button--dark-color" value="%" onClick={ () => this.addValue("%")} ></Button>
        <Button className="App-calculator__button App-calculator__button--red-color" value="÷" onClick={ () => this.addValue("/")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="7" onClick={ () => this.addValue("7")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="8" onClick={ () => this.addValue("8")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="9" onClick={ () => this.addValue("9")} ></Button>
        <Button className="App-calculator__button App-calculator__button--red-color" value="x" onClick={ () => this.addValue("*")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="4" onClick={ () => this.addValue("4")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="5" onClick={ () => this.addValue("5")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="6" onClick={ () => this.addValue("6")} ></Button>
        <Button className="App-calculator__button App-calculator__button--red-color" value="-" onClick={ () => this.addValue("-")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="1" onClick={ () => this.addValue("1")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="2" onClick={ () => this.addValue("2")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="3" onClick={ () => this.addValue("3")} ></Button>
        <Button className="App-calculator__button App-calculator__button--red-color" value="+" onClick={ () => this.addValue("+")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color col-2" value="0" onClick={ () => this.addValue("0")} ></Button>
        <Button className="App-calculator__button App-calculator__button--light-color"  value="." onClick={ () => this.addValue(".")} ></Button>
        <Button className="App-calculator__button App-calculator__button--red-color" value="=" onClick={ () => this.showResult()} ></Button>
      </div>
    );
  }
}


