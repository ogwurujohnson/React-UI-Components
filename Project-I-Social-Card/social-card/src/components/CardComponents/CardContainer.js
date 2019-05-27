import React from 'react';
import './Card.css';


import CardBanner from './CardBanner';
import CardContent from './CardContent';

export default function CardContainer({ content }) {
    return (
        <div className="cardSection">
            <div className="cardWrapper">
                <CardBanner image = { content.image } />
                <CardContent title={content.title} link={content.link} content = { content.content }/>
            </div>
        </div>
    )
}
