import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

const Like = () => {
    const [likeColor, setLikeColor] = useState('');
    const [likeCount, setLikeCount] = useState(0);
    const handleLike = () => {

        setLikeColor(likeColor ? '' : 'primary');
        setLikeCount(likeCount ? 0 : 1);
    }
    return (
        <div>
            <h1>{likeCount}</h1>
            <ThumbUpIcon color={likeColor} onClick={() => handleLike()} />
        </div>
    );
};

export default Like;