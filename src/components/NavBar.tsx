import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import resume from '../assets/Resume.pdf';

function NavBar() {
  return (
    <header>
      <nav className="bg-slate-950 flex justify-between items-center" >
        <div className="text-slate-50 flex justify-between">
          <a className='text-lg md:text-3xl mx-2 md:mx-4 hover:scale-110 transition-transform' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anthonytzeng/"><AiFillLinkedin/></a>
          <a className='text-lg md:text-3xl mx-2 md:mx-4 hover:scale-110 transition-transform' target="_blank" rel="noopener noreferrer" href="https://github.com/aitzeng"><AiFillGithub/></a>
          <a className='text-lg md:text-3xl mx-2 md:mx-4 hover:scale-110 transition-transform' href="mailto:aitzeng@gmail.com"><AiOutlineMail/></a>
        </div>
        <ul className="flex justify-between">
          <a className='mx-2 md:mx-4 text-lg md:text-2xl text-slate-50 hover:underline' href="/home">Home</a>
          <a className='mx-2 md:mx-4 text-lg md:text-2xl text-slate-50 hover:underline' href="/portfolio">Portfolio</a>
          <a className='mx-2 md:mx-4 text-lg md:text-2xl text-slate-50 hover:underline' href="/about">About</a>
          <a className='ml-2 mr-4 md:mx-4 text-lg md:text-2xl text-slate-50 hover:underline' href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;