import React from 'react';
import classes from './Profile.module.css';
import background from './background.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div >
        <img src={background} alt='back' />
      </div>
      <div>
        ava + descr
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;