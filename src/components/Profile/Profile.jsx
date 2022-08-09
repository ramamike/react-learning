import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  let posts = [
    { id: 0, message: "message 0", likesCount: 12 },
    { id: 1, message: "message 1", likesCount: 13 },
    { id: 2, message: "message 2", likesCount: 9 },
    { id: 3, message: "message 3", likesCount: 8 },
    { id: 4, message: "message 4", likesCount: 1 },
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile;