import React from 'react';
import selfie from '../assets/IMG-5338.JPG';

function About() {
  return (
    <div className="bg-slate-700 h-screen w-screen flex flex-col">
      <div className="content flex-col">
        <h3 className="text-slate-50 text-6xl mx-4 my-4 underline">About Me</h3>
        <div className="flex mx-4 my-4">
          <div className='flex-col w-3/4 text-slate-50 text-xl mr-10'>
            <p>My name is Anthony and one of my hobbies is playing competitive video games! Most recently, I delved into the world of Valorant, where I achieved Immortal 2 and reached the top 0.2% of all players!  Besides video games, I enjoy spending my free time helping the community! I've volunteered as a swim coach in high school. In college, I volunteered at an animal shelter and as a columnist for the school newspaper! Prior to COVID, I spent my free time as an AYSO coach and led the team to win every regular season game!
            </p>
            <br/>
            <p>I am a software engineer with a previous background in biotech clinical operations and a software engineering certificate from Hack Reactor. My experience at Hack Reactor has taught me to work well in an Agile team, read code, and problem solve in all stages of the software engineering lifecycle. My time at FivePrime/Amgen has allowed me to enhance my collaboration and organizational skills, and I have demonstartated my ability to successfully launch global programs.
            </p>
          </div>
          <img src={selfie} alt="Selfie" className="w-1/4 h-1/4" />
        </div>
      </div>
    </div>
  )
}

export default About;