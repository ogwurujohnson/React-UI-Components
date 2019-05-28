import React from 'react';
import './Display.css';


export default function CalculatorDisplay(props) {
    return (
        <div className="display">
            <h1>{props.sum}</h1>
        </div>
    )
}
