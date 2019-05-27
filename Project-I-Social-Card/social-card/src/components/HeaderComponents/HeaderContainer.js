import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageContainer from './ImageThumbnail';

export default function HeaderContainer() {
    return (
        <div className="header">
            <ImageContainer />

            <div className="headerText">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}
