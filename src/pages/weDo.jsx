import React from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import bgImg from '../assets/weDo.png'
const WeDo = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            <div className=' px-5'>
                <div className="flex justify-center">
                    <h1 className="text-7xl text-center leading-[6rem] text-[#DF2323] font-black">Where Coltfox ideas <br /> deliver a genuinely <br /> memorable brand <br /> experience.</h1>
                </div>
            </div>
            <div className="imgBg mt-10 h-[700px]">
                <img className='w-full h-full' src={bgImg} alt="" />
            </div>
            <div className='bg-[#D9D3D3] px-32'>

                <div className="flex gap-10 pt-20 justify-center items-start">
                    <div className="no w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl  ">
                        01
                    </div>
                    <div className='flex'>
                        <div className="textWeDo pr-[30rem]">
                            <h1 className='text-5xl font-black'>Performance Marketing</h1>
                            <p className='my-4'>Digital marketing is in a constant state of motion. We continuously explore new
                                strategies, tactics, and technologies to optimize your campaigns.</p>
                        </div>

                        <div className="arrow">
                            <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38" stroke="#012033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="black my-10 h-[1px] bg-black"></div>
                <div className="flex gap-10 my-20 justify-center items-start">
                    <div className="no w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl  ">
                        02
                    </div>
                    <div className='flex'>
                        <div className="textWeDo pr-[30rem]">
                            <h1 className='text-5xl font-black'>Omni-channel Marketing</h1>
                            <p className='my-4'>Using a multi-channel approach, we provide a seamless and integrated experience to
                                reach and engage your customers through various touchpoints.</p>
                        </div>

                        <div className="arrow">
                            <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38" stroke="#012033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="black h-[1px] bg-black"></div>

                <div className="flex gap-10 my-20 justify-center items-start">
                    <div className="no w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl  ">
                        03
                    </div>
                    <div className='flex'>
                        <div className="textWeDo pr-[30rem]">
                            <h1 className='text-5xl font-black'>Lead Generation</h1>
                            <p className='my-4'>Coltfox  campaigns marry the medium, message, and audience to generate more
                                leads, increasing conversions and revenues.</p>
                        </div>

                        <div className="arrow">
                            <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38" stroke="#012033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="black h-[1px] bg-black"></div>

                <div className="flex gap-10 my-20 justify-center items-start">
                    <div className="no w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl  ">
                        04
                    </div>
                    <div className='flex'>
                        <div className="textWeDo pr-[30rem]">
                            <h1 className='text-5xl font-black'>Content Marketing</h1>
                            <p className='my-4'>Our COPE strategy ensures a consistent brand message and image across platforms to
                                strengthen brand recognition and reach a broader audience.</p>
                        </div>

                        <div className="arrow">
                            <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38" stroke="#012033" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="black h-[1px] bg-black"></div>


            </div>
        </div>
    )
}

export default WeDo