import React, {Fragment} from 'react';
import './Button.css';

export default function NumberButton(props) {
    const {style, text} = props;
    return (
        <Fragment>
            <button className={style}>{text}</button>
        </Fragment>
    )
}
