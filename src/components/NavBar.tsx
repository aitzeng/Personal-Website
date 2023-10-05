import React from 'react';

function NavBar() {
  return (
    <header>
      <nav className="bg-slate-950 md:flex md:items-center md:justify-between" >
        <div>
          <a className='mx-4 text-slate-50 text-2xl' href="/home">Anthony Tzeng</a>
        </div>
        <ul>
          <a className='mx-4 text-slate-50 text-2xl' href="/home">Home</a>
          <a className='mx-4 text-slate-50 text-2xl' href="/about">About</a>
          <a className='mx-4 text-slate-50 text-2xl' href="/portfolio">Portfolio</a>
          <a className='mx-4 text-slate-50 text-2xl' href="/contact">Contact</a>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;