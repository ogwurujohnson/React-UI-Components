import React from 'react';
import './Button.css';


export default function ActionButton(props) {
    const {text, actionStyle} = props;
    return (
        <div className="actionSection">
            <button className={actionStyle}>{text}</button>
        </div>
    )
}
