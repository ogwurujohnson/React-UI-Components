import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageContainer from './ImageThumbnail';

export default function HeaderContainer({content}) {
    return (
        <div className="header">
            <ImageContainer img={content.img}/>

            <div className="headerText">
                <HeaderTitle title={content.title} handle={content.handle}/>
                <HeaderContent content={content.content}/>
            </div>
        </div>
    )
}
