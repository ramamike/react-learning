import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={s.myPostsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>
            Add Post
          </button>
        </div>
      </div>
      <div>
        <Post message='message 1'/>
        <Post message='message 2'/>
      </div>
    </div>
  );
}

export default MyPosts;