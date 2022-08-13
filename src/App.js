import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import MainHeader from './components/MainHeader/MainHeader';
import MainNavbar from './components/Navbar/MainNavbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <MainHeader />
      <MainNavbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs
            // state={props.state.messagePage}
            store={props.store} />} />
          <Route path='/profile' element={<Profile
            posts={props.state.profilePage.posts}
            dispatch={props.dispatch}
            newPostText={props.state.profilePage.newPostText} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;