import React, { Component } from 'react';
import CalculatorDisplay from '../../components/DisplayComponents/CalculatorDisplay';
import Buttons from '../../components/ButtonComponents';

export default class index extends Component {
  state = {
    operationStyle: "",
    sum: 0,
    clear: "Clear",
    zero: 0,
    number: [7,8,9,4,5,6,1,2,3],
    operators: ["÷","x","-","+","="],
  }
  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay sum = {this.state.sum}/>
        <Buttons clear={this.state.clear} zero={this.state.zero} number={this.state.number} operator={this.state.operators}/>
      </div>
    )
  }

}
