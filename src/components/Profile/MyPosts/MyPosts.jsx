import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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