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
            dialogsData={props.state.dialogsData}
            messagesData={props.state.messagesData} />} />
          <Route path='/profile' element={<Profile posts={props.state.posts} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;