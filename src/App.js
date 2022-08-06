import React from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import MainNavbar from './components/Navbar/MainNavbar';
import Profile from './components/Profile/Profile';

const App = () =>{
  return (
      <div className='app-wrapper'>
        <MainHeader />  
        <MainNavbar /> 
        <Profile /> 
      </div>
  );
}

export default App;