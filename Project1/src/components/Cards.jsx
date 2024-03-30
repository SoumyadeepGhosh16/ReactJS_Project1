import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-10 gap-5">
       <div className="cardContainer h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
                 <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                 <button className="absolute left-10  bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA48] text-[#CDEA48]">&copy;2019-2022</button>
            </div>
       </div>
       <div className="cardContainer flex gap-5 w-1/2      h-[50vh]">
            <div className="card relative rounded-xl w-full h-full bg-[#192826] flex items-center justify-center">
                 <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

                 <button className="absolute left-10  bottom-10 px-2 py-1 rounded-full border-2 border-white text-white">
                   RATING 5.0 ON CLUTCH
              </button>
            </div>

            <div className="card relative rounded-xl w-full h-full bg-[#192826] flex items-center justify-center">
                 <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

                 <button className="absolute left-10  bottom-10 px-2 py-1 rounded-full border-2 border-white text-white">
                    BUSINESS BOOTCAMP ALUMNI
                 </button>
            </div>
       </div>
    </div>
  )
}

export default Cards
