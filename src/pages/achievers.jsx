import React from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import rectImage from '../assets/Rectangle 4245.png'
import rectImage2 from '../assets/Rectangle 4246.png'
import rectImage4 from '../assets/Rectangle 4248.png'
import rectImage3 from '../assets/Rectangle 4251.png'
import rectImage5 from '../assets/Rectangle 4253.png'
import Footer from '../components/footer/footer'
const Achievers = () => {
    return (
        <div>
            <NavbarAndFullscreenMenu />
            <div className=' text-6xl sm:text-7xl text-[#DF2323] font-black sm:px-32 leading-[5rem] sm:leading-[8rem]'>
                <h1>We’re ambitious.</h1>
                <h1>We’re achievers.</h1>
                <div>
                    <img className='w-full h-80   object-cover ' src={rectImage} alt="" />
                </div>
            </div>

            <div className='sm:px-32 px-5 mt-20'>
                <div className='flex flex-col sm:flex-row gap-10 mt-10'>
                    <div>
                        <svg width="92" height="55" viewBox="0 0 92 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.6 54.2H0.600001L23 0.599996H46L35.6 54.2ZM81 54.2H46.2L68.6 0.599996H91.4L81 54.2Z" fill="#DF2323" />
                        </svg>

                        <p className='text-xl mt-10'>We are a family of diverse, curious, and passionate minds who work together without ego to change the marketing landscape.</p>
                    </div>
                    <img className='w-[32rem] h-auto' src={rectImage2} alt="" />
                </div>
                <div className='flex sm:flex-row-reverse flex-col gap-10 mt-10'>
                    <div>
                        <svg width="92" height="55" viewBox="0 0 92 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.6 54.2H0.600001L23 0.599996H46L35.6 54.2ZM81 54.2H46.2L68.6 0.599996H91.4L81 54.2Z" fill="#DF2323" />
                        </svg>

                        <p className='text-xl mt-10'>We are a family of diverse, curious, and passionate minds who work together without ego to change the marketing landscape.</p>
                    </div>
                    <img className='w-[32rem] h-auto' src={rectImage3} alt="" />
                </div>
                <div className='flex flex-col sm:flex-row gap-10 mt-10'>
                    <div>
                        <svg width="92" height="55" viewBox="0 0 92 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.6 54.2H0.600001L23 0.599996H46L35.6 54.2ZM81 54.2H46.2L68.6 0.599996H91.4L81 54.2Z" fill="#DF2323" />
                        </svg>

                        <p className='text-xl mt-10'>We are a family of diverse, curious, and passionate minds who work together without ego to change the marketing landscape.</p>
                    </div>
                    <img className='w-[32rem] h-auto' src={rectImage2} alt="" />
                </div>
            </div>

            <div className="bg-[#D9D3D3] text-center py-10 pb-52 px-4 sm:px-32">
                <div className='text-left m-auto  text-2xl sm:w-[30rem]'>
                    <p className='font-bold' style={{ color: '#000000' }}>Most importantly,</p>
                    <p className='font-bold' style={{ textcolor: 'linear-gradient(175.64deg, #DF2323 3.55%, rgba(223, 35, 35, 0) 155.71%)' }}>
                        We’re kind to one another.<br></br>
                        We celebrate our differences.<br></br>
                        We give back to the community.<br></br>
                        And we like to have a lot of fun</p>
                </div>


                <div className='flex flex-col sm:flex-row justify-center mt-20 items-center'>
                    <img className='w-96 h-auto ' src={rectImage5} alt="" />
                    <img className='w-96 h-auto relative top-10 sm:-left-10' src={rectImage5} alt="" />
                    <img  className='w-96 h-auto relative top-20 sm:-left-20'src={rectImage5} alt="" />
                </div>

                <div className='mt-36 sm:ml-10 text-xl  text-left'>

                    <p>We don’t say we’re diverse and inclusive; we embody it. Just look <br /> around the office, and you’ll see that EVERYONE is welcome.</p>

                    <p className='font-semibold py-10'>Have you got what it takes to be a <br />COLT?</p>

                    <p>Then we want to hear from <br /> you.</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Achievers