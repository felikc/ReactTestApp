import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img.pngio.com/gamer-icon-png-search-png-gamer-icon-png-715_715.png" />
            {props.message}
            {props.name}
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>);
}

export default Post; 