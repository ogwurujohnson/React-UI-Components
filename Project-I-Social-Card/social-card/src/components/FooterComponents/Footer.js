import React from 'react'
import './Footer.css';

export default function Footer({content, method}) {
    return (
        <div className="footerSection">
            <div className="iconSection">
                <img src={content.comment} alt=""></img>
                <p></p>
                <img src={content.retweet} onClick={method.onClick} alt=""></img>
                <p>{content.retweetValue}</p>
                <img src={content.like} onClick={method.onClick} alt=""></img>
                <p>{content.likeValue}</p>
                <img src={content.message} alt=""></img>
                
            </div>
        </div>
    )
}
