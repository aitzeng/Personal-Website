import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
// import './App.css';

function App() {

  // const circ = (num: number) => {
  //   return num * Math.PI;
  // }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
