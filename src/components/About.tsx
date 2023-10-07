import selfie from '../assets/IMG-5338.JPG';

function About() {
  return (
    <div className="bg-slate-700 h-screen w-screen flex flex-col">
      <div className="content flex-col">
        <h3 className="text-slate-50 text-6xl mx-4 my-4 underline">About Me</h3>
        <div className="flex mx-4 my-4">
          <div className='flex-col w-2/3 text-slate-50 text-xl mr-10'>
            <p>If you've clicked this far, then my website has done its job! One of my hobbies is swimming! I've been doing it ever since I was 6 and have been fortunate enough to continue it in my free time. I've swam competitively throughout my childhood and in 2021,I took it to the next level by participating in the 6-mile Bridge to Bridge swim in San Francisco! This past summer, I also went scuba diving in Puerto Rico and saw the most amazing sea creatures. Besides swimming, I enjoy spending my free time helping the community! I've volunteered as a swim coach in high school. In college, I volunteered at an animal shelter and as a columnist for the school newspaper! Prior to COVID, I spent my free time as an AYSO coach and led the youth team to win every regular season game!
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