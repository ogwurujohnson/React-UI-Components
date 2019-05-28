import React from 'react';
import Moment from 'moment';
import './Header.css';

const today = Moment().format('D MMM').toLowerCase();


export default function HeaderTitle({title, handle}) {
    return (
        <div className="headerTitle">
            <h1>{title}</h1>
            <p>{handle} {today}</p>
        </div>
    )
}

// refactor code to use props
