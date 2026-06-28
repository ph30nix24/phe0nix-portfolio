import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import useMagneticButton from './useMagneticButton'

const Hero = () => {

    const viewRef = useMagneticButton()
    const talkRef = useMagneticButton()

    return (
        <section id='hero' className='w-280 h-fit mx-auto mt-35 bg-white/40 rounded-4xl px-20 py-15 backdrop-blur-lg border border-white shadow-lg shadow-primary/10'>
            <h1 className='text-7xl font-heading uppercase font-semibold leading-snug'>Anuj. <br /><span className='text-primary'> Frontend <br /> Developer.</span></h1>
            <div className='w-full flex gap-5 items-end'>
                <div className='w-1/2 pr-10 font-body'>
                    <p className='text-base py-10'>
                        Specializing in React, Node.js, and GSAP animations. Passionate about clean UI/UX, precise typography, and scalable code.
                    </p>
                    <div className='w-full flex gap-5'>
                        <button className='font-subheading text-xs uppercase bg-primary text-white px-10 py-4 rounded-full flex gap-2 items-center cursor-pointer transition-all ease-in-out duration-300 shadow' ref={viewRef}>
                            <span>View Work</span>
                            <FaArrowRight className='size-2' />
                        </button>
                        
                        <button className='font-subheading text-xs uppercase bg-white/50 text-[#131313] px-10 py-4 rounded-full flex gap-2 items-center cursor-pointer transition-all ease-in-out duration-300 shadow backdrop-blur-sm'  ref={talkRef}>
                            <span>Let's Talk</span>
                            <GoArrowUpRight className='size-3' />
                        </button>
                        
                    </div>
                </div>
                <div className='w-fit ml-30 h-fit pl-4 border-l-2 border-primary '>
                    <p className='font-subheading font-light text-xs tracking-wider uppercase pb-8'>📍 Based in Delhi, India</p>
                    <p className='font-subheading font-light text-xs tracking-wider uppercase'><span className='inline-block size-2 bg-[#22c55e] rounded-full avail-dot mx-1'></span> Available for Freelance</p>
                </div>
            </div>

        </section>
    )
}

export default Hero