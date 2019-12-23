import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 30 },
    { id: 2, message: 'Its my first post', likesCount: 5 },





  ]
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} name={postsData[0].name} likes={postsData[0].likesCount} />
        <Post message={postsData[1].message} name={postsData[1].name} likes={postsData[1].likesCount} />
      </div>

    </div>);

}

export default MyPosts;