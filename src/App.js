import React from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import MainNavbar from './components/MainNavbar';
import Profile from './components/Profile';

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