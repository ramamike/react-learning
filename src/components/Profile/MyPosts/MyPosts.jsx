import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

  let postsData = [
    { id: 0, message: "message 0", likesCount: 12 },
    { id: 1, message: "message 1", likesCount: 13 },
    { id: 2, message: "message 2", likesCount: 9 },
    { id: 3, message: "message 3", likesCount: 8 },
    { id: 4, message: "message 4", likesCount: 1 },
  ]

  let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;