import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img src="https://www.kmeta.bg/uploads/municipality/header_image/16/burgas_.jpg" alt="" />
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>);
}

export default Profile;