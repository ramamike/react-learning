import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <Post message='message 1'/>
        <Post message='message 2'/>
      </div>
    </div>
  );
}

export default MyPosts;