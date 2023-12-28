import React from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import arrow from '../assets/Vector (2).png'
import Footer from '../components/footer/footer'

import indusFox from '../assets/indusFox.png'

const Industries = () => {
    return (
        <div>
            <NavbarAndFullscreenMenu />
            <div className=' px-5 sm:pl-52'>
                <div className="flex">
                    <div>
                        <h1 className="text-7xl text-[#DF2323] font-black">GIANTS solutions <br /> across multiple <br /> sectors and <br /> channels</h1>
                        <p className='sm:w-2/3 mt-10'>We speak your language. We shape perceptions. We’ve collaborated with some of the smartest brands to deliver unparalleled campaigns. And our clients have received extraordinary results. At Coltfox Digital, there is no one-size-fits-all approach.</p>
                        <div className="mt-10">
                            <a href="" className="flex w-max rounded-full gap-5 py-3 px-5 border border-[#FCAB64]">
                                <div className='text-[#FCAB64] font-normal text-xl'>Learn More</div>
                                <img className='h-4 m-auto' src={arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className=" h-[30rem]  sm:w-1/2">
                        <img className='w-ful h-full' src={indusFox} alt="" />
                    </div>
                </div>
            </div>
            <div className='px-5 sm:pl-52 mt-20'>
                <div className="sm:w-2/3">
                    <div className="pill bg-[#FCAB64] w-max mb-10 px-10 rounded-full py-2 shadow-xl   ">Impact</div>
                    <h1 className="text-6xl text-[#012033] leading-[5rem] mb-8 font-black">Collaborative. Strategic. <br />Creative.</h1>
                    <p className='text-xl'>Using a collaborative approach, we transform your vision into measurable success, beginning with strategic solutions fueled by data. Whether you’re in the world of Franchise, Non-Profit, Ecommerce, Sports, Entertainment, B2B, B2C, Food & Beverage, or other vertical, together, we’ll push the boundary of possibilities.</p>
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
                                <div className="bg-[#FCAB64] w-2 h-8"></div>
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
                                        <g clip-path="url(#clip0_1425_8735)">
                                            <path d="M9 16.5C8.0151 16.5 7.03981 16.306 6.12988 15.9291C5.21993 15.5521 4.39314 14.9998 3.6967 14.3033C2.29018 12.8968 1.5 10.9892 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C13.125 1.5 16.5 4.5 16.5 8.25C16.5 9.44347 16.0259 10.588 15.1819 11.432C14.338 12.2759 13.1935 12.75 12 12.75H10.65C10.425 12.75 10.275 12.9 10.275 13.125C10.275 13.2 10.35 13.275 10.35 13.35C10.65 13.725 10.8 14.175 10.8 14.625C10.875 15.675 10.05 16.5 9 16.5ZM9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1175 4.75736 13.2427C5.88258 14.3678 7.4087 15 9 15C9.225 15 9.375 14.85 9.375 14.625C9.375 14.475 9.3 14.4 9.3 14.325C9 13.95 8.85 13.575 8.85 13.125C8.85 12.075 9.675 11.25 10.725 11.25H12C12.7957 11.25 13.5587 10.9339 14.1213 10.3713C14.6839 9.80872 15 9.04567 15 8.25C15 5.325 12.3 3 9 3ZM4.875 7.5C5.475 7.5 6 8.025 6 8.625C6 9.225 5.475 9.75 4.875 9.75C4.275 9.75 3.75 9.225 3.75 8.625C3.75 8.025 4.275 7.5 4.875 7.5ZM7.125 4.5C7.725 4.5 8.25 5.025 8.25 5.625C8.25 6.225 7.725 6.75 7.125 6.75C6.525 6.75 6 6.225 6 5.625C6 5.025 6.525 4.5 7.125 4.5ZM10.875 4.5C11.475 4.5 12 5.025 12 5.625C12 6.225 11.475 6.75 10.875 6.75C10.275 6.75 9.75 6.225 9.75 5.625C9.75 5.025 10.275 4.5 10.875 4.5ZM13.125 7.5C13.725 7.5 14.25 8.025 14.25 8.625C14.25 9.225 13.725 9.75 13.125 9.75C12.525 9.75 12 9.225 12 8.625C12 8.025 12.525 7.5 13.125 7.5Z" fill="#012033" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1425_8735">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="bg-[#FCAB64] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Creative
                                    Excellence</h1>
                            </div>
                            <div className="sm:w-2/3 pl-28 sm:pl-36">
                                <p>We don’t just create marketing
                                    campaigns; we create meaningful
                                    experiences.</p>
                                <p>Strategic storytelling to make your
                                    brand stand out for lasting impact.</p>
                                <p>Uniform branding across channels
                                    to foster brand recognition.</p>
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
                                        <g clip-path="url(#clip0_1425_8688)">
                                            <path d="M16.6856 9.2301L17.9743 10.528L11.9637 16.5938L8.76967 13.3721L10.0583 12.0743L11.9637 13.9888L16.6856 9.2301ZM7.38903 1.40625C8.3655 1.40625 9.30202 1.79416 9.99247 2.48463C10.6829 3.1751 11.0708 4.11159 11.0708 5.08807C11.0708 6.06455 10.6829 7.00103 9.99247 7.69147C9.30202 8.382 8.3655 8.7699 7.38903 8.7699C6.41255 8.7699 5.47606 8.382 4.78559 7.69147C4.09511 7.00103 3.70721 6.06455 3.70721 5.08807C3.70721 4.11159 4.09511 3.1751 4.78559 2.48463C5.47606 1.79416 6.41255 1.40625 7.38903 1.40625ZM7.38903 3.24716C6.90078 3.24716 6.43255 3.44111 6.08731 3.78635C5.74207 4.13159 5.54812 4.59983 5.54812 5.08807C5.54812 5.57631 5.74207 6.04455 6.08731 6.38979C6.43255 6.73502 6.90078 6.92898 7.38903 6.92898C7.87725 6.92898 8.34547 6.73502 8.69077 6.38979C9.036 6.04455 9.22995 5.57631 9.22995 5.08807C9.22995 4.59983 9.036 4.13159 8.69077 3.78635C8.34547 3.44111 7.87725 3.24716 7.38903 3.24716ZM7.38903 9.69037C8.01495 9.69037 8.76967 9.77318 9.60735 9.92962L8.07015 11.4668L7.38903 11.4392C4.65528 11.4392 1.77426 12.7831 1.77426 13.3721V14.3846H7.48108L9.22995 16.1336H0.0253906V13.3721C0.0253906 10.9237 4.93141 9.69037 7.38903 9.69037Z" fill="#012033" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1425_8688">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="bg-[#FCAB64] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Partnership
                                    Approach</h1>
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

                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 16.2617H1.5V2.76172H3V14.7617H4.5V8.01173H7.5V14.7617H9V5.01172H12V14.7617H13.5V11.0117H16.5V16.2617Z" fill="#012033" />
                                    </svg>

                                </div>
                                <div className="bg-[#FCAB64] w-2 h-8"></div>
                                <h1 className='text-2xl font-bold'>Data-Driven
                                    Success</h1>
                            </div>
                            <div className="sm:w-2/3 pl-28 sm:pl-36">
                                <p>Data-driven performance
                                    solutions for informed decision-
                                    making.</p>
                                <p>Achieve higher click-through rates
                                    and conversions to amplify your
                                    ROI.</p>
                                <p>Adjust and customize to quickly
                                    adapt for the best possible results.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="bg-[#D9D3D3] mt-10 py-20 px-5 sm:pl-52">
                <div className="pill bg-[#FCAB64] w-max px-10 rounded-full py-2 shadow-xl   ">Impact</div>
                <div>
                    <div className=" border-black flex flex-col sm:flex-row sm:justify-end my-10 pt-10 sm:px-32 gap-20   border-t-2">
                        <div>

                            <svg width="118" height="119" viewBox="0 0 118 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1425_8754)">
                                    <path d="M50.2473 17.5023C59.4976 26.7526 59.4976 41.7504 50.2473 51.0008C40.9969 60.2511 25.9992 60.2511 16.7488 51.0008C7.49846 41.7504 7.49846 26.7526 16.7488 17.5023C25.9992 8.25194 40.9969 8.25194 50.2473 17.5023Z" fill="#012033" />
                                    <path d="M105.686 13.0635V55.4375H63.3115V13.0635H105.686Z" fill="#FCAB64" stroke="#FCAB64" stroke-width="5" />
                                    <path d="M50.2473 67.9984C59.4976 77.2487 59.4976 92.2465 50.2473 101.497C40.9969 110.747 25.9992 110.747 16.7488 101.497C7.49846 92.2465 7.49846 77.2487 16.7488 67.9984C25.9992 58.748 40.9969 58.748 50.2473 67.9984Z" fill="#012033" />
                                    <path d="M101.247 67.9984C110.498 77.2487 110.498 92.2465 101.247 101.497C91.9969 110.747 76.9992 110.747 67.7488 101.497C58.4985 92.2465 58.4985 77.2487 67.7488 67.9984C76.9992 58.748 91.9969 58.748 101.247 67.9984Z" fill="#012033" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1425_8754">
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
                            <p>Coltfox Digital was made for franchise growth. Our custom
                                approach enhances visibility, attracts potential franchisees,
                                and reinforces a compelling brand identity. Whether you’re a
                                franchisor looking to expand into new territories or a home-
                                town franchisee looking to attract customers and increase
                                loyalty, our team of trailblazers continues to deliver long-term
                                sustainable solutions.
                            </p>
                            <p>
                                Ensure brand consistency across all locations to create a
                                unified customer experience.                            </p>
                            <p>
                                Create unique content for each franchise location while
                                maintaining brand consistency.
                            </p>
                            <p>Maintain consistent brand identity and strategy in the midst
                                of expansion.</p>
                        </div>
                    </div>
                    <div className=" border-black flex flex-col sm:flex-row sm:justify-end my-10 pt-10 sm:px-32 gap-20   border-t-2">
                        <div>

                            <svg width="118" height="117" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1425_8778)">
                                    <g clip-path="url(#clip1_1425_8778)">
                                        <path d="M109.245 58.5016C118.496 49.2513 118.496 34.2535 109.245 25.0031C99.995 15.7528 84.9972 15.7528 75.7469 25.0031L42.2484 58.5016C32.998 67.752 32.998 82.7498 42.2484 92.0001C51.4987 101.25 66.4965 101.25 75.7469 92.0001L109.245 58.5016Z" fill="#012033" />
                                        <path d="M42.2477 25.0008C32.9974 15.7504 17.9996 15.7504 8.74924 25.0008C-0.501111 34.2511 -0.501108 49.2489 8.74924 58.4992L42.2477 91.9977C51.4981 101.248 66.4958 101.248 75.7462 91.9977C84.9965 82.7474 84.9965 67.7496 75.7462 58.4992L42.2477 25.0008Z" fill="#012033" />
                                        <path d="M88.961 75.2481L58.998 45.2852L29.0351 75.2481L58.998 105.211L88.961 75.2481Z" fill="#FCAB64" stroke="#FCAB64" stroke-width="5" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1425_8778">
                                        <rect width="118" height="117" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_1425_8778">
                                        <rect width="118" height="117" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className='w-full'>
                            <h1 className="text-3xl font-bold">NON - PROFIT</h1>
                            <p className='text-sm mt-2'>Your impact partner.</p>
                        </div>
                        <div>
                            <p>We believe in the power of purpose – meaningful work that connects and moves the masses. At Coltfox Digital, non-profit organizations are at the heart of our mission. We work hand in hand to amplify your cause, tell your story, and inspire support. Together, we’ll build awareness, change behavior, increase donations, find volunteers, and master your mission.
                            </p>
                            <p>
                                <ul>

                                    <li>⚫ Measure the impact of your marketing efforts in terms of donations or support.</li>
                                    <li>⚫ Maintain a consistent message and donor experience across communication channels.</li>
                                    <li>⚫ Consistently generate new donors and volunteers passionate about your cause.</li>
                                </ul>
                            </p>
                            <p>
                                Ensure digital marketing consistency across digital platforms
                                to improve customer experience.
                            </p>
                        </div>
                    </div>
                    <div className=" border-black flex flex-col sm:flex-row sm:justify-end my-10 pt-10 sm:px-32 gap-20   border-t-2">
                        <div>

                            <svg width="118" height="117" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1425_8783)">
                                    <g clip-path="url(#clip1_1425_8783)">
                                        <path d="M102.143 112.619V26.3359L15.8595 26.3359V112.619H102.143Z" fill="#012033" />
                                        <path d="M77.731 47.5347C87.4858 37.7799 87.4858 21.9643 77.731 12.2095C67.9762 2.4547 52.1605 2.45469 42.4058 12.2095C32.651 21.9643 32.651 37.7799 42.4058 47.5347C52.1605 57.2895 67.9762 57.2895 77.731 47.5347Z" stroke="#FCAB64" stroke-width="5.89482" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1425_8783">
                                        <rect width="118" height="117" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_1425_8783">
                                        <rect width="118" height="117" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className='w-full'>
                            <h1 className="text-3xl font-bold">E-commerce</h1>
                            <p className='text-sm mt-2'>Digital growth specialists.</p>
                        </div>
                        <div>
                            <p>At Coltfox Digital. we help you push the boundaries of e commerce to achieve profitable and sustainable long-term success by fusing art and technology to drive sales and enhance customer experiences. E commerce marketing is perpetually data-driven, and you can use this valuable data to accurately measure the performance of your marketing and make strategic decisions for optimum results.
                            </p>
                            <p>
                                <li>Attract and convert a steady flow of leads who become loyal customers.</li>
                                <li>Accurately measure the effectiveness of campaigns and know which channels provide the best ROI.</li>
                                <li>Use high-quality, engaging content to increase visibility and credibility.</li>
                            </p>
                            <p>
                                Create unique content for each E-Commerce Platforms and
                                maintaining products consistency and sale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Industries