import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Group 80.png'
import qr from '../assets/Frame 89.png'
import house from '../../public/qr-images/untitled 2.png'
import './pages.css'
import { FaBars } from 'react-icons/fa'
import NavbarAndFullscreenMenu from '../components/menu/menu'
const Services = () => {
  return (
    <>
    <NavbarAndFullscreenMenu/>
     

      <div className='flex sm:h-[85vh] h-full sm:flex-row flex-col sm:px-20 justify-center gap-20 items-center'>
        <div className='sm:w-1/2 w-[90%]  mt-24 h-full m-auto text-white border-dashed  border-2    border-gray-600'>
          <h1 className="text-2xl py-4 sm:text-4xl uppercase text-center">
            AUGMENTED REALITY
          </h1>
          <p className="sm:mt-3 sm:px-20 opacity-70 text-sm text-center  pb-5 px-5">
            Augmented reality is an interactive experience in which a real world environment is enhanced with computer-generated visual elements, sounds, and other stimuli. It can provide a user with a heightened, more immersive experience than they would experience otherwise that adds to the user's enjoyment or understanding.
          </p>
          <div className="flex sm:flex-row flex-col gap-10  justify-around mt-10 w-[90%] m-auto items-center">
            <div className='sm:h-[230px]'>
              <img className='w-full h-full' src={qr} alt="" />
            </div>
            <div className='h-auto '>
              <img className='w-full h-full' src={house} alt="" />
            </div>
          </div>
          <div className="text-center  flex justify-center mt-10 mb-10">
            <div style={{ position: "relative", outline: "1px solid rgba(204, 204, 204, 0.597)", padding: "1px", outlineOffset: "2px" }}
              className="generate-now-svg-services  ">
              <button className="button_generate-now-services   ">Learn More
                <div className="corner-button"></div>
                <div className="corner-button"></div>
                <div className="corner-button"></div>
                <div className="corner-button"></div>

                <svg style={{ position: "absolute " }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="m.5 7 2-2-2-2" fill="none" stroke="#ffffff" strokeLinecap="round"
                      strokeLinejoin="round" transform="translate(9 6)"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='sm:w-1/2 w-[90%] mt-24 h-full m-auto text-white border-dashed border-2 border-gray-600'>
          <h1 className="text-2xl py-4 sm:text-4xl uppercase text-center">
            ARTIFICIAL INTELLIGENCE
          </h1>
          <p className="sm:mt-3 sm:px-20 opacity-70 text-sm text-center  pb-5 px-5">
            Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision. We use deep learning, natural language process, AI technologies to meet the ever-growing business need for AI-powered products & services.          </p>
          <div className="flex sm:flex-row flex-col gap-10 justify-around mt-10 w-[90%] m-auto items-center">
            <div className='sm:h-[230px] '>
              <img className='w-full h-full' src={qr} alt="" />
            </div>
            <div className='h-auto '>
              <img className='w-full h-full' src={house} alt="" />
            </div>
          </div>
          <div className="text-center  flex justify-center mt-10 mb-10">
            <div style={{ position: "relative", outline: "1px solid rgba(204, 204, 204, 0.597)", padding: "1px", outlineOffset: "2px" }}
              className="generate-now-svg-services  ">
              <button className="button_generate-now-services  ">Learn More
                <div className="corner-button"></div>
                <div className="corner-button"></div>
                <div className="corner-button"></div>
                <div className="corner-button"></div>
                <svg style={{ position: "absolute " }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">

                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="m.5 7 2-2-2-2" fill="none" stroke="#ffffff" strokeLinecap="round"
                      strokeLinejoin="round" transform="translate(9 6)"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services