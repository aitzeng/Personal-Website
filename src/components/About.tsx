import selfie from '../assets/IMG-5338.JPG';

function About() {
  return (
    <div className="bg-slate-700 h-screen flex flex-col">
      <div className="content flex-col ">
        <h3 className="text-slate-50 text-3xl mx-4 my-2 md:text-5xl md:mx-4 md:my-4 underline">About Me</h3>
        <div className="flex flex-col justify-between items-center mx-4 my-4 md:mx-4 md:my-4">
          <div className='text-slate-50 md:text-lg'>
            <p>I am a software engineer with a previous background in biotech clinical operations and a software engineering certificate from Hack Reactor. My experience at Hack Reactor has taught me to work well in an Agile team, read code, and problem solve in all stages of the software engineering lifecycle. My time at FivePrime/Amgen has allowed me to enhance my collaboration and organizational skills, and I have demonstartated my ability to successfully launch global programs.
            </p>
          </div>
          <img src={selfie} alt="Selfie" className="my-10 w-2/3 h-2/3 md:w-1/4 md:h-1/4" />
        </div>
      </div>
    </div>
  )
}

export default About;