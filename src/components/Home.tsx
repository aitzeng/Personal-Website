import React from 'react';
import videoBg from '../assets/videoBg.mp4'

function Home() {
  return (
    <div className="relative md:flex">
      <video className ="w-screen h-screen object-cover" src={videoBg} autoPlay loop muted />
      <div className="absolute inset-0 flex items-center justify-center">Anthony Tzeng</div>
    </div>
  )
}

export default Home;