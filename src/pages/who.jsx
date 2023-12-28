import React, { useEffect, useRef, useState } from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import rectImage from '../assets/fox.png'
import arrow from '../assets/Vector (2).png'
import rectImage2 from '../assets/hands.png'
import rectImage3 from '../assets/fox1.png'
import rectImage4 from '../assets/fox2.png'
import whiteArrow from '../assets/white-arrow.png'
import Footer from '../components/footer/footer'


const Who = () => {

    return (
        <div>
            <NavbarAndFullscreenMenu />
            <div className="whatMakesUs px-3 sm:px-0 sm:pl-40 text-[#DF2323] text-6xl sm:text-[6rem] font-black">
                <h1> What makes </h1>
                <h1> Us Foxoe! </h1>
                <p className='text-base mt-3 sm:text-lg  text-black sm:w-1/2'>Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. GIANT harnesses the power of data analytics to understand customer behaviours and preferences.</p>
            </div>
            <div className="right-align pt-10 sm:w-[50%] sm:ml-[35rem]">
                <div className="img-rect">
                    <img src={rectImage} alt="" />
                </div>
                <div className="content px-3 sm:px-0 pt-8">
                    <h2 className='text-[#DF2323] text-4xl pb-2 sm:pb-8 font-semibold '>We are trailblazers</h2>
                    <div className='h-[1px] mb-10 bg-[#DF2323]'></div>
                    <p className='text-base  sm:text-lg px-3 sm:px-0'>Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. <strong>COLT harnesses the power of data analytics to understand customer behaviors and preferences.</strong></p>
                </div>
                <div className="content px-3 sm:px-0 pt-8">
                    <h2 className='text-[#DF2323] text-4xl pb-8 font-semibold '>We Expect BIG Results</h2>
                    <div className='h-[1px] mb-10 bg-[#DF2323]'></div>
                    <p className='text-base  sm:text-lg px-3 sm:px-0'>Our strength lies in our commitment to data-driven performance solutions designed to increase lead generation, customer acquisition, and audience engagement <strong>We expect BIG things for ourselves just as we expect transformative, revenue-generating growth for all our clients.</strong></p>
                </div>
                <div className="content px-3 sm:px-0 pt-8">
                    <h2 className='text-[#DF2323] text-4xl pb-8 font-semibold '>Let’s Collabratre</h2>
                    <div className='h-[1px] mb-10 bg-[#DF2323]'></div>
                    <p className='text-base  sm:text-lg '>Marketing isn’t a one-off activity but a continuous process. We’re not a place where brands go to get a website or a PR campaign. <strong> We act as an extension to your organization, connecting the dots between ideas, strategy, and technology to deliver long-term, sustainable solutions.</strong></p>
                </div>
            </div>

            <div className="bg-[#D9D3D3] px-3 sm:px-28 mt-5 py-5 sm:py-20">
                <div className="left justify-center  items-center flex-col sm:flex-row flex gap-20">
                    <div>
                        <div className="pill bg-white w-max px-10 rounded-full py-2 shadow-xl   ">Team</div>
                        <h2 className='text-4xl sm:text-5xl  mb-10 font-semibold leading-tight   '>Have you got what it <br className='hidden sm:visible'></br> takes to be a fox?</h2>
                        <a href="" className="flex  w-max rounded-full gap-14 p-3 px-5 border border-[#DF2323]">
                            <div className='text-[#343434] font-normal text-xl'>Check your teams</div>
                            <img className='h-4 m-auto' src={arrow} alt="" />
                        </a>
                    </div>
                    <div>
                        <img className='w-full h-full' src={rectImage2} alt="" />
                    </div>
                </div>

                <div className="left justify-center flex-col  mt-24 items-center flex sm:flex-row-reverse gap-20">
                    <div>
                        <div className="pill bg-white w-max px-7 rounded-full py-2 shadow-xl   ">Culture</div>
                        <h2 className='text-4xl sm:text-5xl  mb-10 font-semibold leading-tight   '>Have you got what it <br className='hidden sm:visible'></br> takes to be a fox?</h2>
                        <a href="" className="flex bg-[#FE7272] w-max rounded-full gap-14 p-3 px-5 border border-[#DF2323]">
                            <div className='text-white font-normal text-xl'>Fox Culture</div>
                            <img className='h-4 m-auto' src={whiteArrow} alt="" />
                        </a>
                    </div>
                    <div>
                        <img className='w-full  h-full' src={rectImage3} alt="" />
                    </div>
                </div>

                <div className="left justify-center ml-52 mt-[-54px] items-center flex ">
                    <div>
                        <img className='w-[90%] hidden sm:block h-full' src={rectImage4} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Who