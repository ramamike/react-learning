import React from 'react';
import './App.css';

const App = () =>{
  return (
      <div className='app-wrapper'>
        <header className='header'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3HMy9shgGFM8-lycYiMIWeQNitH94QsDuA&usqp=CAU' alt="description"/>
        </header>
        <nav className='nav'>
          <div>
            <a href="#top">Profile</a>
          </div>
          <div>
            <a href="#top">Messages</a>
          </div>
          <div>
            <a href="#top">News</a>
          </div>
        </nav>
        <div>
          <div className='content'>
            <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png' alt=''/>
          </div>
          <div>
            ava + descr
          </div>
          <div>
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
      </div>
  );
}

export default App;