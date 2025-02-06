import { PiDogFill } from 'react-icons/pi';
import { FcMultipleInputs } from 'react-icons/fc';
import { GiClothes } from 'react-icons/gi';
import portfolio from '../assets/Portfolio.png';
import theWorldBg from '../assets/TheWorld.mp4';
import styleForgeBg from '../assets/stylForge.png';
import safeSpaceBg from '../assets/SafeSpace.mp4';
import clearviction from '../assets/clearviction.png';

function Portfolio() {
  const portfolioStyle = {
    backgroundImage: `url(${portfolio})`,
    backgroundSize: '80% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  const stylForgeStyle = {
    backgroundImage: `url(${styleForgeBg})`,
    backgroundSize: '60% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  const clearvictionStyle = {
    backgroundImage: `url(${clearviction})`,
    backgroundSize: '80% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div className="bg-slate-700 flex flex-col h-screen">
      <div className="h-full w-full">
        <h3 className="text-slate-50 text-3xl mx-4 my-4 md:text-5xl underline">Portfolio</h3>
        <div className="text-slate-50 h-1/4 md:h-1/3 flex">
          <a className="mx-4 my-4 bg-black border-slate-900 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:border-slate-50"
            target="_blank"
            rel="noreferrer"
            href="https://clearviction-next.vercel.app/"
            style={clearvictionStyle}>
            <span className='mx-2 my-2 z-10 text-xs md:text-base'>Clearviction</span>
            <span className='mx-2 my-2 z-10 text-xs md:text-xs'>Seattle Conviction Calculator</span>
          </a>
          <a className="mx-4 my-4 bg-black border-slate-900 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:border-slate-50"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/2023-opportunity-hack/CodeFusion-Collective--MobileAppforTeens-RebuildaprototypewithSecurityandUsability"
          >
            <video className="w-full h-full absolute" src={safeSpaceBg} autoPlay loop muted />
            <span className='mx-2 my-2 z-10 text-xs md:text-base'>Safe Space</span>
            <span className='mx-2 my-2 z-10 text-xs md:text-xs'>Mobile app designed to protect teens from domestic violence and keep them safe </span>
          </a>
          <a className="mx-4 my-4 bg-black border-slate-900 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:border-slate-50"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JoJos-Blue-Ocean/TheWorld"
          >
            <video className="w-full h-full absolute" src={theWorldBg} autoPlay loop muted />
            <span className='mx-2 my-2 z-10 text-xs md:text-base'>The World</span>
            <span className='mx-2 my-2 z-10 text-xs md:text-xs'>Vinyl record trading mobile application w/ live chatting and favorites/wishlist</span>
          </a>
        </div>
        <div className="text-slate-50 h-1/4 md:h-1/3 flex">
          <a className="mx-4 my-4 bg-black border-slate-900 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:border-slate-50"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aitzeng/personal-website"
            style={portfolioStyle}>
            <span className='mx-2 my-2 z-10 text-xs md:text-base'>Personal Portfolio</span>
            <span className='mx-2 my-2 z-10 text-xs md:text-xs'>This website!</span>
          </a>
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/CBC-Ecommerce/styl-forge"
            style={stylForgeStyle}>
            <span className='mx-2 my-2 z-10 text-xs text-black md:text-base'>Styl Forge</span>
            <span className='mx-2 my-2 z-10 text-xs text-black md:text-xs'>Ecommerce clothing website</span>
          </a>
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aitzeng/wuphf">
            <span className='mx-2 my-2 z-10 text-xs md:text-base'>WUPHF</span>
            <span className='mx-2 my-2 z-10 text-xs md:text-xs'>Send single message to people using various communication methods</span>
            <PiDogFill className="w-full h-full flex absolute inset-0" color="#7D6363" />
          </a>
        </div>
        <div className="text-slate-50 h-1/4 md:h-1/3 flex">
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 h-4/5 md:w-1/4 md:h-3/4 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black" target="_blank" rel="noreferrer" href="https://github.com/luminescent-linguica/Reviews-API">
            <span className='mx-2 my-2 z-10 text-xs md:text-base'>Atelier System Design</span>
            <span className='mx-2 my-2 z-10 text-xs md:text-xs'>Retrofit of an existing API service to satisfy new SLA requirements</span>
            <FcMultipleInputs className="w-full h-full flex absolute inset-0" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;