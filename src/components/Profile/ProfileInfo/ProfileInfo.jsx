import React from 'react';
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
    </div>
  );
}

export default ProfileInfo;