import React from 'react'
import NumberButton from './NumberButton'
import ActionButton from './ActionButton'

export default function index(props) {
    const {clear, zero, number, operator} = props;

    const style = {
        operatorButton: "operatorButton",
        numberButton: "numberButton",
        actionButton: "actionButton",
    }

    return (
        <div className="keysContainer">
            
            {/* loop through to getvall numbers passed through a state in the main container file */}
            <div className="actionNumber">
                <ActionButton text={clear} actionStyle={style.actionButton}/>
                
                <div className="buttonSection">
                    {number.map(numberButton => {
                        console.log(numberButton);
                        return <NumberButton key={numberButton} text={numberButton} style={style.numberButton}/>
                    })}
                </div>
                
                
                <ActionButton text={zero} actionStyle={style.actionButton}/>
            </div>
            <div className="operatorSection">
                {operator.map(operatorButton => {
                    return <NumberButton key={operatorButton} text={operatorButton} style={style.operatorButton}/>
                })}
            </div>

        </div>
    )
}
