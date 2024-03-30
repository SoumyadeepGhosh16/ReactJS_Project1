import React from 'react';
import { gsap, Power4 } from "gsap";
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

function Featured() {

  const cards=[useAnimation(),useAnimation()];

  const handleHover=(index)=>{
      cards[index].start({y:"0"})
  }

  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
    
}

  return (
    
    <div data-scroll data-scroll-section  className="w-full py-10 bg-zinc-700">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-10">
            <h1 className="text-[4vw] font-light font-['roboto'] tracking-tight">Featured Projects</h1>
            </div>
            <div className="px-20">
               <div
                className="cards w-full flex gap-5 mt-10"
                >
                  
                   <motion.div 
                    onHoverStart={()=>handleHover(0)}
                    onHoverEnd={()=>handleHoverEnd(0)}
                    whileHover={{ scale:1.2}}
                    className="CardContainer relative w-1/2 h-[80vh] ">
                      <div className="card w-full h-full bg-green-300 rounded-xl overflow-hidden">
                         <h1 className="absolute right-0 
                           z-[9] flex font-['Agdasima'] text-8xl tracking-tighter translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none overflow-hidden">  

                           {"FYDE".split('').map((item,index)=>(
                           <motion.span 
                             initial={{y:"100%"}}
                             animate={cards[0]}
                             transition=
                             {{ease:[0.22,1,0.36,1],
                              delay:index*.05}}
                           className="font-bold inline-block ">
                            {item}
                           </motion.span>
                           ))}

                        </h1>
                       
                            <img 
                            className="w-full h-full bg-cover rounded-xl"
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" 
                            alt="" 
                            />
                       </div>
                    </motion.div>
                      <motion.div 
                        onHoverStart={()=>handleHover(1)}
                        onHoverEnd={()=>handleHoverEnd(1)}
                        whileHover={{ scale: 1.2 }}
                         className="CardContainer relative w-1/2 h-[80vh] ">
                       <div className="card  w-full h-full bg-green-300 rounded-xl overflow-hidden">
                       <h1 className="absolute right-full 
                           z-[9] flex font-['Agdasima'] text-8xl tracking-tighter translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none overflow-hidden">
                            

                            {"VISE".split('').map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={cards[1]} 
                            transition= 
                            {{ease:[0.22,1,0.36,1],
                             delay:index*.05}}
                            className="font-bold inline-block">{item}
                            </motion.span>
                            ))}
                       </h1>
                            <img 
                            className="w-full h-full bg-cover rounded-xl" 
                            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
                            alt="" 
                            />" 
                       </div>
                    </motion.div>

                </div>
            
            </div>
    
    </div>
    
  )
}

export default Featured
