import React from 'react'
import useMagneticButton from './useMagneticButton.js'
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosMenu } from 'react-icons/io';


const Navbar = () => {

  const resumeRef = useMagneticButton()
  return (
    <nav className='fixed top-0 left-0 z-99 w-full py-3 center'>
      <div className='w-9/10 lg:w-fit flex items-center mx-auto px-5 lg:px-10 rounded-full py-3 bg-white/60 backdrop-blur-lg max-lg:justify-between'>
        <a href="#hero">
          <p className='font-heading text-primary uppercase font-semibold tracking-widest text-sm'>
            anuj.dev
          </p>

        </a>
        <ul className='w-fit flex items-center mx-5 border-x-2 border-black/10 px-5 max-lg:hidden'>

          <a href="#about">
            <li className="relative overflow-hidden rounded-full px-5 py-1.5 font-subheading text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-white group">
              <span className="relative z-10">About</span>

              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-spring group-hover:translate-x-0"></span>
            </li>
          </a>
          <a href="">
            <li className="relative overflow-hidden rounded-full px-5 py-1.5 font-subheading text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-white group">
              <span className="relative z-10">Work</span>

              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-spring group-hover:translate-x-0"></span>
            </li>
          </a>
          <a href="">
            <li className="relative overflow-hidden rounded-full px-5 py-1.5 font-subheading text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-white group">
              <span className="relative z-10">Skills</span>

              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-spring group-hover:translate-x-0"></span>
            </li>
          </a>
          <a href="">
            <li className="relative overflow-hidden rounded-full px-5 py-1.5 font-subheading text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-white group">
              <span className="relative z-10">education</span>

              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-spring group-hover:translate-x-0"></span>
            </li>
          </a>
          <a href="">
            <li className="relative overflow-hidden rounded-full px-5 py-1.5 font-subheading text-xs uppercase cursor-pointer transition-colors duration-300 hover:text-white group">
              <span className="relative z-10">contact</span>

              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 ease-spring group-hover:translate-x-0"></span>
            </li>
          </a>

        </ul>

        <button ref={resumeRef} className='font-subheading text-xs uppercase border border-primary text-primary px-4 py-1.5 rounded-full flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out duration-300 max-lg:hidden'>
          <span>Resume</span>
          <FaArrowDownLong className='size-2.5' />
        </button>
        <button className='cursor-pointer lg:hidden'>
          <IoIosMenu className='size-5'/>
        </button>
      </div>

      

    </nav>
  )
}

export default Navbar