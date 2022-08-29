import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
          <Route path='/dialogs' element={<DialogsContainer  />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;