import React from 'react';
import Moment from 'moment';
import './Header.css';

const today = Moment().format('D MMM').toLowerCase();


export default function HeaderTitle() {
    return (
        <div className="headerTitle">
            <h1>Lambda School</h1>
            <p>@LambdaSchool . {today}</p>
        </div>
    )
}
