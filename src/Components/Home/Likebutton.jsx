import React, { useState } from 'react';
import './postCard.css';
import { SlLike } from 'react-icons/sl';

export const Likebutton = () => {
    const [like, setlike] = useState(false);
    let liked;
    like ? (liked = { color: 'red' }) : (liked = { color: 'black' });

    return (
        <button className="me-2 LikeButtonStyle w-50 " onClick={() => setlike((pre) => !pre)}>
            <SlLike style={liked} className="like" />
            <span style={liked}>Like</span>
        </button>
    );
};
