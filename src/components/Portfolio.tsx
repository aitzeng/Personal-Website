import { PiDogFill } from 'react-icons/pi';
import { CgWebsite } from 'react-icons/cg';
import { FcGlobe, FcMultipleInputs } from 'react-icons/fc';
import { GiClothes } from 'react-icons/gi';

function Portfolio() {
  return (
    <div className="bg-slate-700 h-screen w-screen flex flex-col">
      <div className="main">
        <h3 className="text-slate-50 text-6xl mx-4 my-4 underline">Portfolio</h3>
        <div className="text-slate-50 flex w-3/4 h-full">
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black" target="_blank" rel="noreferrer" href="https://github.com/aitzeng/wuphf">
            <span className='mx-2 my-2 z-10 text-xl'>WUPHF</span>
            <span className='mx-2 my-2 text-base z-10'>Send single message to people using various communication methods</span>
            <PiDogFill className="w-full h-full flex absolute inset-0" color="#7D6363" />
          </a>
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black" target="_blank" rel="noreferrer" href="https://github.com/aitzeng/personal-website">
            <span className='mx-2 my-2 z-10 text-xl'>Personal Portfolio</span>
            <span className='mx-2 my-2 z-10 text-base'>This website!</span>
            <CgWebsite className="w-full h-full flex absolute inset-0" color="#222222" />
          </a>
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black" target="_blank" rel="noreferrer" href="https://github.com/JoJos-Blue-Ocean/TheWorld">
            <span className='mx-2 my-2 z-10 text-xl'>The World</span>
            <span className='mx-2 my-2 z-10 text-base'>Vinyl record trading mobile application</span>
            <FcGlobe className="w-full h-full flex absolute inset-0" />
          </a>
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black" target="_blank" rel="noreferrer" href="https://github.com/CBC-Ecommerce/styl-forge">
            <span className='mx-2 my-2 z-10 text-xl'>Styl Forge</span>
            <span className='mx-2 my-2 z-10 text-base'>Ecommerce clothing website</span>
            <GiClothes className="w-full h-full flex absolute inset-0" color="#222222" />
          </a>
          <a className="mx-4 my-4 border-slate-50 border-2 rounded flex flex-col justify-between w-1/2 relative hover:bg-slate-50 hover:border-slate-900 hover:text-black" target="_blank" rel="noreferrer" href="https://github.com/luminescent-linguica/Reviews-API">
            <span className='mx-2 my-2 z-10 text-xl'>Atelier System Design</span>
            <span className='mx-2 my-2 z-10 text-base'>Retrofit of an existing API service to satisfy new SLA requirements</span>
            <FcMultipleInputs className="w-full h-full flex absolute inset-0" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;