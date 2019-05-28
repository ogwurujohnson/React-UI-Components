import Calculator from './container/calculator';
import './App.css';
import './container/calculator/Calculator.css';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>React Calculator</h3>
        <Calculator />
      </div>
    )
  }
}
