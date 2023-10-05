import React from 'react';
import videoBg from '../assets/videoBg.mp4'

function Home() {
  return (
    <div className="relative md:flex">
      <video className ="w-screen h-screen object-cover" src={videoBg} autoPlay loop muted />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-50">
        <span className="text-7xl">Anthony Tzeng</span><br/>
        <span className="text-xl" >Full-Stack Software Engineer</span>
      </div>
    </div>
  )
}

export default Home;