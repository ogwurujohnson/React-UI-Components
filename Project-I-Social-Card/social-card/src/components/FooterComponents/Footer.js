import React from 'react'
import './Footer.css';

export default function Footer({content}) {
    return (
        <div className="footerSection">
            <div className="iconSection">
                <img src={content.comment} alt=""></img>
                <img src={content.retweet} alt=""></img>
                <img src={content.like} alt=""></img>
                <img src={content.message} alt=""></img>
            </div>
        </div>
    )
}
