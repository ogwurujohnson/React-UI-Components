import React from 'react';
import './Header.css';

export default function ImageThumbnail({img}) {
    return (
        <div className="imageContainer">
            <img src={img} alt=""></img>
        </div>
    )
}
