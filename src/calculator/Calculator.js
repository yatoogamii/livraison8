import React from 'react';
import Input from './Input.js';
import Button from './Button.js';

export default class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showResult = this.showResult.bind(this);
    this.state = {inputValue: ''};
  }

  handleClick(operator) {
    console.log("test");
    this.setState({inputValue: this.state.inputValue + operator})
    console.log(typeof(this.state.inputValue));
  }

  showResult() {
    console.log("oui");
  }
  render() {
    let inputValue = this.state.inputValue;

    return (
      <div className="App-calculator">
        <Input value={inputValue}></Input>
        <Button className="App-calculator__button" value="AC" onClick={ () => this.handleClick("AC") }></Button>
        <Button className="App-calculator__button" value="Del" onClick={ () => this.handleClick("Del")} ></Button>
        <Button className="App-calculator__button" value="%" onClick={ () => this.handleClick("%")} ></Button>
        <Button className="App-calculator__button" value="÷" onClick={ () => this.handleClick("/")} ></Button>
        <Button className="App-calculator__button" value="7" onClick={ () => this.handleClick("7")} ></Button>
        <Button className="App-calculator__button" value="8" onClick={ () => this.handleClick("8")} ></Button>
        <Button className="App-calculator__button" value="9" onClick={ () => this.handleClick("9")} ></Button>
        <Button className="App-calculator__button" value="x" onClick={ () => this.handleClick("*")} ></Button>
        <Button className="App-calculator__button" value="4" onClick={ () => this.handleClick("4")} ></Button>
        <Button className="App-calculator__button" value="5" onClick={ () => this.handleClick("5")} ></Button>
        <Button className="App-calculator__button" value="6" onClick={ () => this.handleClick("6")} ></Button>
        <Button className="App-calculator__button" value="-" onClick={ () => this.handleClick("-")} ></Button>
        <Button className="App-calculator__button" value="1" onClick={ () => this.handleClick("1")} ></Button>
        <Button className="App-calculator__button" value="2" onClick={ () => this.handleClick("2")} ></Button>
        <Button className="App-calculator__button" value="3" onClick={ () => this.handleClick("3")} ></Button>
        <Button className="App-calculator__button" value="+" onClick={ () => this.handleClick("+")} ></Button>
        <Button className="App-calculator__button col-2" value="0" onClick={ () => this.handleClick("0")} ></Button>
        <Button className="App-calculator__button" value="." onClick={ () => this.handleClick(".")} ></Button>
        <Button className="App-calculator__button" value="=" onClick={ () => console.log(eval(inputValue)) } ></Button>
      </div>
    );
  }
}


