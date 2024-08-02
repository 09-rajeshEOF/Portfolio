"use client";
import React from 'react';
import {motion} from 'framer-motion'
import { textVarient } from '@/utils/motion';

function TitleText({title} : {title:String}) {
  return (
    <motion.h2
    variants={textVarient} 
    initial='hidden'
    whileInView="show"
    className='mt-20 mc-5 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-900 via-purple-300 to-white font-bold md:text-[64] text-center'>
        {title}
    </motion.h2>
  )
}

export default TitleText