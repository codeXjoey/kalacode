import NavbarAndFullscreenMenu from '../components/menu/menu'
import Footer from '../components/footer/footer'

const Contact = () => {
    return (
        <div>
            <NavbarAndFullscreenMenu />
            <div className="approachHead px-8 sm:px-20 text-3xl sm:text-[4rem] leading-[5rem] font-black text-[#000]  ">
                <h1>Tell us above <br /> your next</h1>

            </div>
            <div className="redLine bg-[#DF2323] ml-5 rounded-full font-bold sm:ml-20 my-8 text-3xl text-white p-8 sm:text-[4rem] w-min">Project</div>
            <div className='px-44 mb-20 flex justify-between'>
                <svg width="45" height="100" viewBox="0 0 45 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1171_1187)">
                        <path d="M22.4575 30.0288L22.3896 86.0287M22.3896 86.0287L30.8972 79.789M22.3896 86.0287L13.8972 79.7684" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <rect x="43.8504" y="1.05347" width="109.856" height="42.7157" rx="21.3579" transform="rotate(90.0695 43.8504 1.05347)" stroke="#FE7272" stroke-width="2" />
                    <defs>
                        <clipPath id="clip0_1171_1187">
                            <rect x="44.8516" y="0.0546875" width="111.856" height="44.7157" rx="22.3579" transform="rotate(90.0695 44.8516 0.0546875)" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <p className=' w-1/3 text-2xl text-start'>Find out our project from below and let’s make your project dreams comes true!</p>
            </div>



            <div className="blackLine  m-auto h-[1px] bg-black w-[90%]  mb-10 "></div>


            <div className="form px-20">
                <h1 className='text-4xl font-bold'>Your  Contact information</h1>
                <form className='mt-4 ml-6' action="#" method="post">
                    <div className="mb-4">
                        <input type="text" id="field1" name="field1" placeholder="Whats your name  *" className="w-full shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white" />
                    </div>

                    <div className="mb-4">
                        <input type="text" id="field2" name="field2" placeholder="Whats your company *" className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white" />
                    </div>

                    <div className="mb-4">
                        <input type="text" id="field3" name="field3" placeholder="Whats your official email *" className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white" />
                    </div>

                    <div className="mb-4">
                        <input type="text" id="field4" name="field4" placeholder="Whats your Phone number *" className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white" />
                    </div>

                    <div className="mb-4">
                        <input type="text" id="field5" name="field5" placeholder="Your project name  *" className="w-full  shadow-inner text-xl shadow-black/30 border border-none rounded-full p-4 bg-white" />
                    </div>

                    {/* <button type="submit" className="bg-[#DF2323] float-right mb-20 text-white px-4 py-2 rounded-md  ">Submit</button> */}
                </form>
            </div>

            <div className="blackLine  m-auto h-[1px] bg-black w-[90%]  my-20 "></div>

            <div className="form px-20">
                <h1 className='text-4xl font-bold'>Budget</h1>
                <div className="flex mt-5 gap-20 flex-wrap px-20 justify-center items-center">
                    <div className="pill py-4 pl-4 pr-20 text-white bg-[#DF2323] rounded-full text-2xl">Under 10.000 $</div>
                    <div className="pill py-4 pl-4 pr-20 text-white bg-[#DF2323] rounded-full text-2xl">10.000 $ - 20.000 $</div>
                    <div className="pill py-4 pl-4 pr-20 text-white bg-[#DF2323] rounded-full text-2xl">30.000 $ - 40.000 $</div>
                    <div className="pill py-4 pl-4 pr-20 text-white bg-[#DF2323] rounded-full text-2xl">50.000 $ - 60.000 $</div>
                    <div className="pill py-4 pl-4 pr-20 text-white bg-[#DF2323] rounded-full text-2xl">Not decided </div>
                </div>

                <h1 className='text-4xl font-bold'>Tell us about your project in brief</h1>
                <textarea className='shadow-inner shadow-black/30 border-none w-full my-5 bg-white rounded-3xl p-5 text-xl' name="" id="" cols="30" placeholder='Brief us about your project *' rows="10"></textarea>

            </div>

            <Footer />

        </div>
    )
}

export default Contact