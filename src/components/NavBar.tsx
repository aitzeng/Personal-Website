import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import resume from '../assets/Resume.pdf';

function NavBar() {
  return (
    <header>
      <nav className="bg-slate-950 md:flex md:items-center md:justify-between p-2" >
        <div className="mx-4 md:flex text-slate-50 text-3xl">
          <a className='mx-4 hover:scale-110 transition-transform' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anthonytzeng/"><AiFillLinkedin/></a>
          <a className='mx-4 hover:scale-110 transition-transform' target="_blank" rel="noopener noreferrer" href="https://github.com/aitzeng"><AiFillGithub/></a>
        </div>
        <ul>
          <a className='mx-4 text-slate-50 text-2xl hover:underline' href="/home">Home</a>
          <a className='mx-4 text-slate-50 text-2xl hover:underline' href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
          {/* <a className='mx-4 text-slate-50 text-2xl hover:underline' href="/about">About</a> */}
          <a className='mx-4 text-slate-50 text-2xl hover:underline' href="/portfolio">Portfolio</a>
          <a className='mx-4 text-slate-50 text-2xl hover:underline' href="/contact">Contact</a>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;