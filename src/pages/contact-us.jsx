import React, { useState } from 'react'
import logo from '../assets/Group 80.png'
import { BiLogoInstagram } from 'react-icons/bi'
import qr from '../assets/Frame 89.png'
import bg from '../assets/bg.png'
import { Link } from 'react-router-dom'
import { LuMail } from 'react-icons/lu'
import { RiTwitterXFill } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'
import NavbarAndFullscreenMenu from '../components/menu/menu'
const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownItems = [
        { label: 'AUGMENTED REALITY ', link: '/dashboard' },
        { label: 'Web AR', link: '/settings' },
        { label: 'APP AR – IOS AR ANDROID AR', link: '/earnings' },
        { label: 'MB AR – Marker Based (Social Media Facebook + Instagram) ', link: '/signout' },
        { label: 'QR AR  – (Using Artistic QR Code and AR) ', link: '/signout' },
    ];

    return (
        <>
        <NavbarAndFullscreenMenu/>
        <div style={backgroundStyle}>

            <div className="min-h-screen p-2 sm:p-6 flex items-center  justify-center">.
                <div className=" relative mt-20  mx-auto">
                    <div className="corner-button-contact"></div>
                    <div className="corner-button-contact"></div>
                    <div className="corner-button-contact"></div>
                    <div className="corner-button-contact"></div>
                    <div>
                        <div className="qr-gen-form w-full rounded shadow-lg sm:pb-5 px-4 md:px-10">
                            <div className="grid gap-14 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="flex gap-10  flex-col py-4 items-center sm:items-start">
                                    <div className="text-gray-50">
                                        <p className="text-[2rem] sm:text-[4.2rem] leading-[3.5rem] sm:leading-[4.5rem] text-center sm:text-start   uppercase">Tell us about your project or idea.</p>
                                    </div>

                                </div>
                                <div className="lg:col-span-2  sm:mt-10 text-white">

                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <div className="relative w-full inline-block text-left">
                                                <label className="text-lg">Tell Us</label>

                                                <button
                                                    onClick={toggleDropdown}
                                                    className="h-10 mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400/30 relative"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>

                                                {isOpen && (
                                                    <div className="origin-top-right absolute right-0 mt-2 w-full text-black bg-white border border-[#FE7272] divide-y divide-[#FE7272] rounded-lg shadow-lg">
                                                        <div className="py-2">
                                                            {dropdownItems.map((item, index) => (
                                                                <a
                                                                    key={index}
                                                                    href={item.link}
                                                                    className="block px-4 py-1 font-medium text-lg hover:bg-[#FE7272] hover:text-white"
                                                                >
                                                                    {item.label}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                        <div className="md:col-span-5">
                                            <label className="text-lg" for="full_name">First Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10  mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400/30" value="" />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label className="text-lg" for="full_name">Last Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10  mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400/30" value="" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label className="text-lg" for="email">Email Address</label>
                                            <input type="text" name="email" id="email" className="h-10  mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gray-400/30" value="" placeholder="email@domain.com" />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label className="text-lg" htmlFor="message">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows="8"
                                                className=" mt-1 rounded px-4 w-full text-[16px] mb-2 bg-black border-2 border-gra30"
                                            ></textarea>
                                        </div>
                                        <div className="md:col-span-5  text-center mb-10 sm:text-right">
                                            <div className="inline-flex sm:items-end">
                                                <button className="bg-black/30 border border-gray-500 hover:bg-black/90 text-white font-bold py-2 px-28  rounded-full  ">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="flex max-w-6xl w-[95%] qr-gen-form h-full sm:min-h-[20rem] relative sm:top-[-60px]  p-10 mx-auto text-white sm:flex-row flex-col gap-10 sm:gap-0 mb-28 justify-between">
                <div className="corner-button-contact"></div>
                <div className="corner-button-contact"></div>
                <div className="corner-button-contact"></div>
                <div className="corner-button-contact"></div>
                <div className="gap-5 flex flex-col sm:mx-0  w-20">
                    <h1 className='text-2xl'>Socials</h1>
                    <div className="icon flex  gap-4 text-2xl">
                        <BiLogoInstagram />
                    </div>
                    <div className="icon text-2xl">
                        <FaLinkedin />
                    </div>
                    <div className="icon text-2xl">
                        <RiTwitterXFill />
                    </div>
                    {/* <div className="icon text-2xl">
                                                <AiOutlineFacebook />
                                            </div> */}
                </div>
                <div className="gap-5  flex flex-col  w-52  ">
                    <h1 className='text-2xl'>Contact</h1>
                    <div className="icon flex flex-col gap-4 text-2xl">
                        <div className="flex items-center text-2xl">
                            <LuMail />
                            <h1 className='text-lg ml-2'>info@hudbil.com</h1>
                        </div>
                        <h1 className='text-lg'>+91-888-44-09369</h1>
                    </div>
                </div>
                <div className="gap-5 items-start flex flex-col sm:w-[22rem] ">
                    <h1 className='text-2xl'>Address</h1>
                    <div className="icon flex flex-col gap-4 text-2xl">
                        <h1 className='text-lg'>#235, 2nd & 3rd Floor, 13th Cross Rd, <br /> Indiranagar II Stage, Hoysala Nagar, <br /> Bangalore-560038, Karnataka, India.</h1>
                        <h1 className='text-lg'>+91-888-44-09369</h1>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;