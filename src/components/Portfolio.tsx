import React from 'react';

function Portfolio() {
  return (
    <div className="bg-slate-950 h-screen w-screen flex flex-col">
      <div className="main">
        <h3 className="text-slate-50 text-6xl mx-4 my-4">Portfolio</h3>
        <div className="text-slate-50 flex w-1/2">
          <a className="mx-4 my-4 border-red-500 border-2 rounded flex flex-col justify-center w-1/5" href="https://github.com/aitzeng/wuphf">
          <span>WUPHF</span><span>Application to send alerts using various communication methods</span></a>
          <a className="mx-4 my-4 border-red-500 border-2 rounded flex flex-col justify-center w-1/5" href="https://github.com/aitzeng/personal-website">This website!</a>
          <a className="mx-4 my-4 border-red-500 border-2 rounded flex flex-col justify-center w-1/5" href="https://github.com/JoJos-Blue-Ocean/TheWorld">The World</a>
          <a className="mx-4 my-4 border-red-500 border-2 rounded flex flex-col justify-center w-1/5" href="https://github.com/CBC-Ecommerce/styl-forge">Styl Forge</a>
          <a className="mx-4 my-4 border-red-500 border-2 rounded flex flex-col justify-center w-1/5" href="https://github.com/luminescent-linguica">Atelier System Design</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;