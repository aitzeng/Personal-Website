import videoBg from '../assets/videoBg.mp4'

function Home() {
  return (
    <div className="relative md:flex">
      <video className ="w-screen h-screen object-cover" src={videoBg} autoPlay loop muted />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-50 ">
          <div className="texts-left flex flex-col">
            <span className="text-xl text-red-700">Hi, my name is</span>
            <span className="text-5xl font-bold">Anthony Tzeng</span>
            <span className="text-5xl font-bold" >I'm a Software Engineer</span>
        </div>
      </div>
    </div>
  )
}

export default Home;