import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
// import Main from './components/Main'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
// import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
