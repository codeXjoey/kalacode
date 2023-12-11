import React from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import arrow from '../assets/Vector (2).png'
import Footer from '../components/footer/footer'

const Industries = () => {
    return (
        <div>
            <NavbarAndFullscreenMenu />
            <div className=' px-5 sm:pl-52'>
                <div className="flex">
                    <div>
                        <h1 className="text-7xl text-[#DF2323] font-black">GIANTS solutions <br /> across multiple <br /> sectors and <br /> channels</h1>
                        <p className='sm:w-2/3 mt-10'>Lorem ipsum dolor sit amet. Et odio autem est dolores sunt ab commodi tenetur et quidem nesciunt. Et sunt impedit quo nisi molestiae qui iusto velit est debitis repellat aut enim impedit et suscipit possimus.</p>
                        <div className="mt-10">
                            <a href="" className="flex w-max rounded-full gap-5 py-3 px-5 border border-[#DF2323]">
                                <div className='text-[#DF2323] font-normal text-xl'>Learn More</div>
                                <img className='h-4 m-auto' src={arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-300 h-[30rem] sm:w-1/2"></div>
                </div>
            </div>
            <div className='px-5 sm:pl-52 mt-20'>
                <div className="sm:w-2/3">
                    <div className="pill bg-[#FE7272] w-max px-10 rounded-full py-2 shadow-xl   ">Impact</div>
                    <p className='text-xl'>Lorem ipsum dolor sit amet. Ut possimus architecto qui nihil nisi et atque laborum. Sed laboriosam commodi ad doloribus sapiente ut iusto necessitatibus ex officiis obcaecati qui voluptatem galisum eos nihil facilis id dolorem similique. Et molestiae nulla id officia dolorum ex alias debitis est nesciunt repellat.</p>
                </div>

                <div className="flex gap-16 sm:flex-row mt-20 flex-col">

                    <div className="flex bg-slate-600 justify-start sm:w-2/3">
                        <div className='bg-white flex justify-center items-center flex-col '>
                            <div className="flex justify-center gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_607_1185)">
                                            <path d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_607_1185">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FE7272] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Tailored Solutions</h1>
                            </div>
                            <div className="sm:w-2/3 pl-28 sm:pl-36">
                                <p>We immerse ourselves into your brand to create one-of-a-kind solutions.</p>
                                <p>We use creative innovation to engage and convert your audience.</p>
                                <p>We align powerful marketing strategies to support your mission and goals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex bg-slate-600 sm:w-2/3">
                        <div className='bg-white flex justify-center items-center flex-col '>
                            <div className="flex justify-center gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_607_1185)">
                                            <path d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_607_1185">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FE7272] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Tailored Solutions</h1>
                            </div>
                            <div className="sm:w-2/3 pl-28 sm:pl-36">
                                <p>We immerse ourselves into your brand to create one-of-a-kind solutions.</p>
                                <p>We use creative innovation to engage and convert your audience.</p>
                                <p>We align powerful marketing strategies to support your mission and goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-16 sm:flex-row mt-20 flex-col">
                    <div className="flex bg-slate-600 sm:w-2/3">
                        <div className='bg-white flex justify-center items-center flex-col '>
                            <div className="flex justify-center gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_607_1185)">
                                            <path d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_607_1185">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FE7272] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Tailored Solutions</h1>
                            </div>
                            <div className="sm:w-2/3 pl-28 sm:pl-36">
                                <p>We immerse ourselves into your brand to create one-of-a-kind solutions.</p>
                                <p>We use creative innovation to engage and convert your audience.</p>
                                <p>We align powerful marketing strategies to support your mission and goals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex bg-slate-600 sm:w-2/3">
                        <div className='bg-white flex justify-center items-center flex-col '>
                            <div className="flex justify-center gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_607_1185)">
                                            <path d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_607_1185">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FE7272] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Tailored Solutions</h1>
                            </div>
                            <div className="sm:w-2/3 pl-28 sm:pl-36">
                                <p>We immerse ourselves into your brand to create one-of-a-kind solutions.</p>
                                <p>We use creative innovation to engage and convert your audience.</p>
                                <p>We align powerful marketing strategies to support your mission and goals.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="bg-[#D9D3D3] mt-10 py-20 px-5 sm:pl-52">
                <div className="pill bg-[#FE7272] w-max px-10 rounded-full py-2 shadow-xl   ">Impact</div>
                <div>
                    <div className=" border-black flex flex-col sm:flex-row sm:justify-end my-10 pt-10 sm:px-32 gap-20   border-t-2">
                        <div>
                            <svg width="90" height="90" viewBox="0 0 118 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_607_1247)">
                                    <path d="M50.2492 17.5013C59.4996 26.7517 59.4996 41.7494 50.2492 50.9998C40.9989 60.2501 26.0011 60.2501 16.7508 50.9998C7.50041 41.7494 7.50041 26.7517 16.7508 17.5013C26.0011 8.25096 40.9989 8.25096 50.2492 17.5013Z" fill="#090909" />
                                    <path d="M105.688 13.0635V55.4375H63.3135V13.0635H105.688Z" fill="#FE7272" stroke="#FE7272" stroke-width="5" />
                                    <path d="M50.2492 67.9994C59.4996 77.2497 59.4996 92.2475 50.2492 101.498C40.9989 110.748 26.0011 110.748 16.7508 101.498C7.50041 92.2475 7.50041 77.2497 16.7508 67.9994C26.0011 58.749 40.9989 58.749 50.2492 67.9994Z" fill="#090909" />
                                    <path d="M101.249 68.0003C110.5 77.2507 110.5 92.2485 101.249 101.499C91.9989 110.749 77.0011 110.749 67.7508 101.499C58.5004 92.2485 58.5004 77.2507 67.7508 68.0003C77.0011 58.75 91.9989 58.75 101.249 68.0003Z" fill="#090909" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_607_1247">
                                        <rect width="118" height="119" fill="white" transform="matrix(1 0 0 -1 0 119)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className="text-3xl font-bold">FRANCHISES</h1>
                            <p className='text-sm mt-2'>Strategic expansion partner.</p>
                        </div>
                        <div>
                            <p>GIANT Creative was made for franchise growth. Our custom
                                approach enhances visibility, attracts potential franchisees,
                                and reinforces a compelling brand identity. Whether you’re a
                                franchisor looking to expand into new territories or a home-
                                town franchisee looking to attract customers and increase
                                loyalty, our team of trailblazers continues to deliver long-term
                                sustainable solutions.
                            </p>
                            <p>
                            Ensure brand consistency across all locations to create a unified customer experience.
                            </p>
                            <p>
                            Create unique content for each franchise location while maintaining brand consistency.
                            </p>
                            <p>Maintain consistent brand identity and strategy in the midst of expansion.</p>
                        </div>
                    </div>
                    <div className=" border-black flex flex-col sm:flex-row sm:justify-end my-10 pt-10 sm:px-32 gap-20   border-t-2">
                        <div>
                            <svg width="90" height="90" viewBox="0 0 118 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_607_1247)">
                                    <path d="M50.2492 17.5013C59.4996 26.7517 59.4996 41.7494 50.2492 50.9998C40.9989 60.2501 26.0011 60.2501 16.7508 50.9998C7.50041 41.7494 7.50041 26.7517 16.7508 17.5013C26.0011 8.25096 40.9989 8.25096 50.2492 17.5013Z" fill="#090909" />
                                    <path d="M105.688 13.0635V55.4375H63.3135V13.0635H105.688Z" fill="#FE7272" stroke="#FE7272" stroke-width="5" />
                                    <path d="M50.2492 67.9994C59.4996 77.2497 59.4996 92.2475 50.2492 101.498C40.9989 110.748 26.0011 110.748 16.7508 101.498C7.50041 92.2475 7.50041 77.2497 16.7508 67.9994C26.0011 58.749 40.9989 58.749 50.2492 67.9994Z" fill="#090909" />
                                    <path d="M101.249 68.0003C110.5 77.2507 110.5 92.2485 101.249 101.499C91.9989 110.749 77.0011 110.749 67.7508 101.499C58.5004 92.2485 58.5004 77.2507 67.7508 68.0003C77.0011 58.75 91.9989 58.75 101.249 68.0003Z" fill="#090909" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_607_1247">
                                        <rect width="118" height="119" fill="white" transform="matrix(1 0 0 -1 0 119)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className="text-3xl font-bold">FRANCHISES</h1>
                            <p className='text-sm mt-2'>Strategic expansion partner.</p>
                        </div>
                        <div>
                            <p>GIANT Creative was made for franchise growth. Our custom
                                approach enhances visibility, attracts potential franchisees,
                                and reinforces a compelling brand identity. Whether you’re a
                                franchisor looking to expand into new territories or a home-
                                town franchisee looking to attract customers and increase
                                loyalty, our team of trailblazers continues to deliver long-term
                                sustainable solutions.
                            </p>
                            <p>
                            Ensure brand consistency across all locations to create a unified customer experience.
                            </p>
                            <p>
                            Create unique content for each franchise location while maintaining brand consistency.
                            </p>
                            <p>Maintain consistent brand identity and strategy in the midst of expansion.</p>
                        </div>
                    </div>
                    <div className=" border-black flex flex-col sm:flex-row sm:justify-end my-10 pt-10 sm:px-32 gap-20   border-t-2">
                        <div>
                            <svg width="90" height="90" viewBox="0 0 118 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_607_1247)">
                                    <path d="M50.2492 17.5013C59.4996 26.7517 59.4996 41.7494 50.2492 50.9998C40.9989 60.2501 26.0011 60.2501 16.7508 50.9998C7.50041 41.7494 7.50041 26.7517 16.7508 17.5013C26.0011 8.25096 40.9989 8.25096 50.2492 17.5013Z" fill="#090909" />
                                    <path d="M105.688 13.0635V55.4375H63.3135V13.0635H105.688Z" fill="#FE7272" stroke="#FE7272" stroke-width="5" />
                                    <path d="M50.2492 67.9994C59.4996 77.2497 59.4996 92.2475 50.2492 101.498C40.9989 110.748 26.0011 110.748 16.7508 101.498C7.50041 92.2475 7.50041 77.2497 16.7508 67.9994C26.0011 58.749 40.9989 58.749 50.2492 67.9994Z" fill="#090909" />
                                    <path d="M101.249 68.0003C110.5 77.2507 110.5 92.2485 101.249 101.499C91.9989 110.749 77.0011 110.749 67.7508 101.499C58.5004 92.2485 58.5004 77.2507 67.7508 68.0003C77.0011 58.75 91.9989 58.75 101.249 68.0003Z" fill="#090909" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_607_1247">
                                        <rect width="118" height="119" fill="white" transform="matrix(1 0 0 -1 0 119)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-full'>
                            <h1 className="text-3xl font-bold">FRANCHISES</h1>
                            <p className='text-sm mt-2'>Strategic expansion partner.</p>
                        </div>
                        <div>
                            <p>GIANT Creative was made for franchise growth. Our custom
                                approach enhances visibility, attracts potential franchisees,
                                and reinforces a compelling brand identity. Whether you’re a
                                franchisor looking to expand into new territories or a home-
                                town franchisee looking to attract customers and increase
                                loyalty, our team of trailblazers continues to deliver long-term
                                sustainable solutions.
                            </p>
                            <p>
                            Ensure brand consistency across all locations to create a unified customer experience.
                            </p>
                            <p>
                            Create unique content for each franchise location while maintaining brand consistency.
                            </p>
                            <p>Maintain consistent brand identity and strategy in the midst of expansion.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Industries