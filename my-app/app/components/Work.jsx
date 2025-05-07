import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
     id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay:0.3}}
         className='text-center mb-2 text-lg font-Ovo'>
        My Portfolio</motion.h4>

        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay:0.5}}
         className='text-center text-5xl font-Ovo'>
            My Latest Projects</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:0.7}}
         className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>
            Welcome to my portfolio! 
            Explore a collection of projects showcasing my expertise in Web-Dev, Machine Learing and Game-Dev Projects.
            </motion.p>
        
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.9}}
         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5'>
            {workData.map((project,index)=>(

                <motion.div
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
                 key={index}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                cursor-pointer group' 
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2
                    -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
                    group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <a 
                            href={`http://${project.link}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='border rounded-full border-black w-9
                            aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] 
                            group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send-icon' className='w-5'/>
                        </a>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        {/* <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
        py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
            Show More <Image src={assets.right_arrow_bold} alt='Right-arrow'
            className='w-4'/>
        </a> */}
    </motion.div>
  )
}

export default Work
