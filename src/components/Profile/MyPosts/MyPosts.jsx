import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={s.posts}>
      <textarea ></textarea>
      <button>Add Post</button>
      <p>My posts</p>
      <Post message='Hi, how are you?' name='Andrei' likes='30' />
      <Post message='Its my first post' likes='10' />

    </div>);

}

export default MyPosts;