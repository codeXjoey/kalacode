import React from 'react'
import logo from '../assets/Group 80.png'
import { BiLogoInstagram } from 'react-icons/bi'
import qr from '../assets/Frame 89.png'
import bg from '../assets/bg.png'
import { Link } from 'react-router-dom'
import {LuMail} from 'react-icons/lu'
import {FaLinkedin} from 'react-icons/fa'
const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
      };
    return (
        <div style={backgroundStyle}>
            <div className="flex  justify-between z-50 items-center px-4 sm:px-12 ">
                <div className="sm:w-auto  z-50 w-full ">
                    <Link to={'/'}>
                        <img
                            src={logo}
                            className="sm:w-[8rem] mt-5 bg-none w-[5rem] cursor-pointer"
                            alt="logo"
                        />
                    </Link>
                </div>
            </div>
            <div className="min-h-screen p-6 flex items-center justify-center">
                <div className="container  mx-auto">
                    <div>
                        <div className="qr-gen-form w-full rounded shadow-lg sm:pb-5 px-4 md:px-10">
                            <div className="grid gap-14 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="flex gap-10 sm:gap-20 flex-col justify-center items-center sm:items-start">
                                    <div className="text-gray-50">
                                        <p className="text-7xl sm:text-7xl  uppercase">Tell us about <br />your project or idea.</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 sm:mt-10 text-white">
                                    <div className="flex sm:flex-row flex-col gap-20 sm:gap-0 mb-20 justify-between">
                                        <div className="gap-5 flex flex-col sm:mx-0  w-20 h-20">
                                            <h1 className='text-2xl'>Socials</h1>
                                            <div className="icon flex flex-col gap-4 text-lg">
                                                <BiLogoInstagram/>
                                            </div>
                                            <div className="icon textxl">
                                                <FaLinkedin/>
                                            </div>

                                        </div>
                                        <div className="gap-5  flex flex-col  w-52  h-20">
                                            <h1 className='text-2xl'>Contact</h1>
                                            <div className="icon flex flex-col gap-4 text-2xl">
                                            <div className="flex items-center text-2xl">
                                                <LuMail />
                                                <h1 className='text-lg ml-2'>info@hudbil.com</h1>
                                                </div>                                                
                                                <h1 className='text-lg'>123-456-789</h1>
                                            </div>
                                        </div>
                                        <div className="gap-5  flex flex-col w-30 h-20">
                                            <h1 className='text-2xl'>Address</h1>
                                            <div className="icon flex flex-col gap-4 text-2xl">
                                                <h1 className='text-lg'>info@hudbil.com</h1>
                                                <h1 className='text-lg'>123-456-789</h1>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label className="text-lg" for="full_name">First Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400" value="" />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label className="text-lg" for="full_name">Last Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400" value="" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label className="text-lg" for="email">Email Address</label>
                                            <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400" value="" placeholder="email@domain.com" />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label className="text-lg" htmlFor="message">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows="8"
                                                className=" mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400"
                                            ></textarea>
                                        </div>
                                        <div className="md:col-span-5 mb-10 text-right">
                                            <div className="inline-flex items-end">
                                                <button className="bg-black/30 border border-gray-500 hover:bg-black/90 text-white font-bold py-2 px-28  rounded-full  ">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
{/* 
                    <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right" rel="noreferrer">
                        <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
                    </a> */}
                </div>
            </div>
        </div>
    )
}
export default Contact;