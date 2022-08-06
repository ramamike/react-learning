import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import MainHeader from './components/MainHeader/MainHeader';
import MainNavbar from './components/Navbar/MainNavbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <MainHeader />
      <MainNavbar />
      <div class='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;