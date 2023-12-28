import React from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import rectImage from '../assets/zen_fox.png'
import arrow from '../assets/Vector (2).png'
import Footer from '../components/footer/footer'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
const Team = () => {
    return (
        <div>
            <NavbarAndFullscreenMenu />
            <div className='text-7xl text-[#DF2323] font-black sm:px-32 leading-[8rem]'>
                <h1>A Team of </h1>
                <h1>COLTFOX?</h1>
                <div>
                    <img className='w-full h-80   object-cover ' src={rectImage} alt="" />
                </div>
            </div>
            <p className='sm:px-32 mt-10 text-center'>Being a Colt is more than just a role. Coltfox think, act and perform in a way that promotes collaboration, inspiration and excitement. A Coltfox is a clever beast with unique strengths that are beyond measurable.</p>

            <div className='mt-10 sm:ml-[28rem] px-5 sm:px-20'>
                <h2 className='text-5xl text-[#DF2323] font-bold '>Leadership Team</h2>
                <div className='h-[1px] my-10 bg-[#DF2323]'></div>
                <div className="flex justify-end sm:flex-row flex-col gap-20">
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '>
                            <img className='w-full h-full' src={team1} alt="" />
                        </div>
                        <div className="bg-[#FCAB64] p-2">
                            <p className='font-bold text-white '>MD SHUJJATH</p>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '>
                            <img className='w-full h-full' src={team2} alt="" />

                        </div>
                        <div className="bg-[#FCAB64] p-2">
                            <p className='font-bold text-white '>MD SHUJJATH</p>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '>
                            <img className='w-full h-full' src={team3} alt="" />

                        </div>
                        <div className="bg-[#FCAB64] p-2">
                            <p className='font-bold text-white '>MD SHUJJATH</p>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                </div>
                <p className='my-10'> Coltfox  is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.</p>
            </div>
            <div className='mt-10 sm:ml-[28rem] px-5 sm:px-20'>
                <h2 className='text-5xl text-[#DF2323] font-bold '>Team</h2>
                <div className='h-[1px] my-10 bg-[#DF2323]'></div>
                <div className="flex justify-end sm:flex-row flex-col gap-20">
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '></div>
                        <div className="bg-white">
                            <p className='font-bold'>Name</p>
                            <p>Profile</p>
                        </div>
                    </div>
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '></div>
                        <div className="bg-white">
                            <p className='font-bold'>Name</p>
                            <p>Profile</p>
                        </div>
                    </div>
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '></div>
                        <div className="bg-white">
                            <p className='font-bold'>Name</p>
                            <p>Profile</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-10 justify-end sm:flex-row flex-col gap-20">
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '></div>
                        <div className="bg-white">
                            <p className='font-bold'>Name</p>
                            <p>Profile</p>
                        </div>
                    </div>
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '></div>
                        <div className="bg-white">
                            <p className='font-bold'>Name</p>
                            <p>Profile</p>
                        </div>
                    </div>
                    <div className="teamCard w-72  ">
                        <div className='bg-[#D9D9D9] h-80 '></div>
                        <div className="bg-white">
                            <p className='font-bold'>Name</p>
                            <p>Profile</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#D9D3D3] px-5 py-5 sm:px-44'>
                <h1 className='text-5xl sm:text-7xl font-black'>You name it...</h1>
                <div className="flex text-3xl mt-5 flex-col sm:flex-row sm:gap-32">
                    <ul>
                        <li>Marketers</li>
                        <li>Developers</li>
                        <li>Videographers</li>
                        <li>SEO Specialists</li>
                    </ul>
                    <ul>
                        <li>Marketers</li>
                        <li>Strategies</li>
                        <li>Photographers</li>
                        <li>Managers</li>
                    </ul>
                    <ul>
                        <li>Editors</li>
                        <li>Copywriter</li>
                        <li>UX/UI Specialist</li>
                        <li>SEO Specialists</li>
                    </ul>
                </div>
                <div className='h-[1px] my-10 bg-[#DF2323]'></div>
                <h1 className='text-7xl text-center text-[#DF2323] font-black'>Join the crew</h1>
                <div className="container mx-auto sm:p-8">
                    <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 border-b border-white">
                        <form className="contact100-form validate-form">
                            <div className="mb-4 border-b border-white ">
                                <label className="block text-white text-xl font-bold mb-7" htmlFor="name">
                                    What’s your name?*
                                </label>
                                <input className="border-none bg-transparent appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none " id="name" type="text" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4 border-b border-white">
                                <label className="block text-white text-xl font-bold mb-7" htmlFor="email">
                                    Email Address*
                                </label>
                                <input className=" border-none bg-transparent  appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none " id="email" type="text" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-4 border-b border-white">
                                <label className="block text-white text-xl font-bold mb-7" for="email">
                                    A place to find your creation?*
                                </label>
                                <input className=" border-none bg-transparent  appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none " id="email" type="text" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-4 border-b border-white">
                                <label className="block text-white text-xl font-bold mb-7" for="email">
                                    Do you have a message for us*
                                </label>
                                <input className=" border-none bg-transparent  appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none " id="email" type="text" placeholder="Enter your email address" />
                            </div>
                            <div className="flex items-center justify-center">
                                <a href="" className="flex  w-max rounded-full gap-5 p-3 px-5 border border-[#DF2323]">
                                    <div className='text-[#DF2323] font-normal text-xl'>Submit</div>
                                    <img className='h-4 m-auto' src={arrow} alt="" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Team