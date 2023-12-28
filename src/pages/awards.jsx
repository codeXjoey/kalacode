import React from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import arrow from '../assets/Vector (2).png'
import Footer from '../components/footer/footer'
import service from '../assets/service.png'
const Awards = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            <div className=' px-5 sm:pl-52'>
                <div className="flex">
                    <div>
                        <h1 className="text-7xl leading-[6rem] text-[#DF2323] font-black">Empowering <br /> Insights and <br /> Perspectives <br /> </h1>
                    </div>
                </div>
            </div>
            <div className='px-44 mb-28'>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start">
                    <img className='w-72' src={service} alt="" />
                    <p className='text-xl px-20  font-black'>GIANT Reflections: Our First <br /> Canadian Marketing Award Win!</p>
                </div>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start">
                    <img className='w-72' src={service} alt="" />
                    <p className='text-xl px-20  font-black'>GIANT Reflections: Our First <br /> Canadian Marketing Award Win!</p>
                </div>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start">
                    <img className='w-72' src={service} alt="" />
                    <p className='text-xl px-20  font-black'>GIANT Reflections: Our First <br /> Canadian Marketing Award Win!</p>
                </div>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start">
                    <img className='w-72' src={service} alt="" />
                    <p className='text-xl px-20  font-black'>GIANT Reflections: Our First <br /> Canadian Marketing Award Win!</p>
                </div>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start">
                    <img className='w-72' src={service} alt="" />
                    <p className='text-xl px-20  font-black'>GIANT Reflections: Our First <br /> Canadian Marketing Award Win!</p>
                </div>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start">
                    <img className='w-72' src={service} alt="" />
                    <p className='text-xl px-20  font-black'>GIANT Reflections: Our First <br /> Canadian Marketing Award Win!</p>
                </div>
            </div>


            <div className="bg-[#D9D3D3]  text-center">
                <div className="px-44 pt-10">
                    <div className="yelCircle m-auto my-20 w-32 h-32 rounded-full border border-yellow-300"></div>
                    <h1 className='text-6xl text-[#DF2323] font-black'>Close The Loop</h1>
                    <p className='text-lg my-10 text-[#DF2323]'>We start with your audience</p>
                    <p className='text-lg font-bold'>Lorem ipsum dolor sit amet. Sed consequuntur minus sed numquam dolorum qui magnam eligendi ut laudantium iure vel ullam expedita vel dolorem odio ut quaerat sapiente. Ea voluptatibus autem eos autem consequatur ut galisum dolorem ut debitis animi quo iste voluptatum cum cupiditate cupiditate. </p>
                </div>
                <div className="bg-[#DF2323] h-[1px] my-20"></div>
                <div className="px-44 pb-20 text-center">
                    <div className=" w-fit m-auto my-20 ">
                        <svg width="111" height="114" viewBox="0 0 181 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M180 74.5C180 115.087 146.875 148 106 148C65.1246 148 32 115.087 32 74.5C32 33.9134 65.1246 1 106 1C146.875 1 180 33.9134 180 74.5Z" stroke="black" stroke-width="2" />
                            <rect x="1" y="82" width="103" height="101" stroke="black" stroke-width="2" />
                            <path d="M104 83H33C35.7017 100.857 40.8556 109.791 53.3861 124.739C71.5018 140.302 82.7314 145.208 104 147V83Z" fill="#FCAB64" />
                        </svg>
                    </div>
                    <h1 className='text-6xl text-[#DF2323] font-black'>Continue Partnership</h1>
                    <p className='text-lg my-10 text-[#DF2323]'>We start with your audience</p>
                    <p className='text-lg font-bold'>Lorem ipsum dolor sit amet. Sed consequuntur minus sed numquam dolorum qui magnam eligendi ut laudantium iure vel ullam expedita vel dolorem odio ut quaerat sapiente. Ea voluptatibus autem eos autem consequatur ut galisum dolorem ut debitis animi quo iste voluptatum cum cupiditate cupiditate. </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Awards