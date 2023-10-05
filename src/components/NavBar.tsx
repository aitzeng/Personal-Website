import React from 'react';

function NavBar() {
  return (
    <header>
      <nav className="md:flex md:items-center md:justify-between" >
        <div>
          <a className='mx-4' href="/home">Anthony Tzeng</a>
        </div>
        <ul>
          <a className='mx-4' href="/home">Home</a>
          <a className='mx-4' href="about">About</a>
          <a className='mx-4' href="/portfolio">Portfolio</a>
          <a className='mx-4' href="/contact">Contact</a>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;