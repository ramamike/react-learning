import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import s from './ProfileInfo.module.css';
import background from './background.png';

const ProfileInfo = () => {
  return (
    <div>
      <div >
        <img src={background} alt='back' />
      </div>
      <div className={s.descriptionBlock}>
        ava + descr
      </div>
      <MyPosts/>
    </div>
  );
}

export default ProfileInfo;