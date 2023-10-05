import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function NavBar() {
  return (
    <header>
      <nav className="bg-slate-950 md:flex md:items-center md:justify-between p-2" >
        <div className="mx-4 md:flex text-slate-50 text-3xl">
          <a className='mx-4' href="https://www.linkedin.com/in/anthonytzeng/"><AiFillLinkedin/></a>
          <a className='mx-4' href="https://github.com/aitzeng"><AiFillGithub/></a>
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