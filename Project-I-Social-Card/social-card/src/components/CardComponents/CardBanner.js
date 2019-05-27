import React from 'react';
import './Card.css';

export default function CardBanner({image}) {
    return (
        <div className="cardBanner">
            <img src={image} alt=""></img>
        </div>
    )
}
