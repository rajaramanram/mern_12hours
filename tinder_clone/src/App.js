import logo from './logo.svg';
import './App.css';
import Header from './header';
import TinderCards from './TinderCards';
import Swipe from './swipe';
import React from 'react';
function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header/>
      {/* CARDS */}
      <TinderCards/>
      {/*SWIPE*/}
      <Swipe/>
    </div>
  );
}

export default App;
