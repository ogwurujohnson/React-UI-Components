import React from 'react'
import './Footer.css';

export default function Footer({content}) {
    return (
        <div className="footerSection">
            <div className="iconSection">
                <img src={content.comment} alt=""></img>
                <p></p>
                <img src={content.retweet} alt=""></img>
                <p>2</p>
                <img src={content.like} alt=""></img>
                <p>3</p>
                <img src={content.message} alt=""></img>
                
            </div>
        </div>
    )
}
