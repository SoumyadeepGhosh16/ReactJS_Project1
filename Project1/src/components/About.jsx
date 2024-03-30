import React from 'react'

function About() {
  return (
    <div  className="w-full py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black font-['roboto'] p-20 rounded-bl-3xl rounded-br-3xl">
      <h1 className="text-[4vw] pr-32 leading-[4vw] tracking-normalight" >Ochi is a strategic partner for fast-grow­ing tech businesses that need to <u>raise funds</u>,<u>sell prod­ucts</u> , <u>ex­plain com­plex ideas</u> , and <u>hire great peo­ple</u> .</h1>
      <div className="w-full flex gap-5 mt-20 pt-10 border-t-[1px] border-[#92a744]">
        <div className="w-1/2">
          <h1 className="text-[4vw] font-['Roboto']">Our approach :</h1>
          <button className="px-10 py-4 mt-2 uppercase bg-zinc-900 rounded-full text-white flex items-center gap-10">
            Read More
              <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  rounded-3xl">
            <img className="rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
