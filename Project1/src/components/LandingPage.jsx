import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section  data-scroll-speed='.1' className="w-full h-screen bg-zinc-900 pt-1">
       <div className="textstructure mt-40 px-20 font-['Oswald'] ">
         {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
           return (
           <div className="masker ">
            <div className="w-fit flex ">
              {index=== 1 && (
              <motion.div 
              initial={{width:0}}
              animate={{width:100}}
              transition={{ease:[0.55, 0, 0.24, 1],
              duration: 1
            }}>
                <img 
                className="w-[10vw] 
                h-[5vw] mr-[1vw]  rounded-md relative top-[0.9vw] leading-[6vw]"
                src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />                
              </motion.div>)}
             <h1 className=" uppercase text-8xl  tracking-tighter font-medium">{item}
             </h1>

           </div>

          </div>
           );
          })}

       </div>
       <div className="border-t-2 border-zinc-700 mt-32 flex justify-between items-center py-2 px-20">
         {[
          "For public and private companies",
          "From the first pitch to IPO"
          ]
          .map((item,index)=>
         <p className="text-md font-light tracking-tight leading-none">{item}
         </p>
         )}
         <div className="Start flex items-center gap-5">

            <div className="px-5 py-2 border-[2px] border-zinc-500 font-light rounded-full text-md capitalize">
              START THE PROJECT
            </div>

            <div className="w-10 h-10 flex items-center rounded-full border-[2px] border-zinc-500">
                <span className="p-2.5">
                  <MdArrowOutward />
                </span>

            </div>

         </div>

       </div>

    </div>
  )
}

export default LandingPage
