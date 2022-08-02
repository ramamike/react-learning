import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
          <div >
            <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png' alt=''/>
          </div>
          <div className={classes.item}>
            ava + descr
          </div>
          <div className={classes.item}>
            My post
            <div>
              New post 
            </div>
            <div>
              <div>
                post1
              </div>
              <div>
                post2
              </div>
            </div>
          </div>
        </div>
    );
}

export default Profile;