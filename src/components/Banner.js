import React from 'react';
import Image from '../assets/avatar.svg';
import {FaGithub, FaLinkedin, FaGlobe} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[55px]  leading-[0.8] lg:text-[110px]' >
            KARTHIKA <span>MUDDULURU</span></motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[40px] font-bold lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'ML Engineer',
              2000,
            ]} 
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
          />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 mx-w-lg mx-auto lg:mx-0'>
            this is about me page where we can add the details like to introduce ourselves.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'> My Portfolio</a>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaLinkedin />
            </a>
            <a href='#'>
              <FaGlobe />
            </a>
          </motion.div>
        </div>
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'>
          <img src={Image} alt='' />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
