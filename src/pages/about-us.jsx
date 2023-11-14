import React, { useEffect, useState } from 'react';
import NavbarAndFullscreenMenu from '../components/menu/menu';
import './pages.css'; // Create a CSS file for styling

const AboutUs = () => {
    const [completedProjects, setCompletedProjects] = useState(0);
    const [awards, setAwards] = useState(0);
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [accordion1Open, setAccordion1Open] = useState(false);
    const [accordion2Open, setAccordion2Open] = useState(false);
    const [accordion3Open, setAccordion3Open] = useState(false);
    const [accordion4Open, setAccordion4Open] = useState(false);

    const toggleAccordion1 = () => {
        setAccordion1Open(!accordion1Open);
    };

    const toggleAccordion2 = () => {
        setAccordion2Open(!accordion2Open);
    };

    const toggleAccordion3 = () => {
        setAccordion3Open(!accordion3Open);
    };

    const toggleAccordion4 = () => {
        setAccordion4Open(!accordion4Open);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (completedProjects < 100) setCompletedProjects(completedProjects + 2);
            if (awards < 30) setAwards(awards + 1);
            if (yearsOfExperience < 8) setYearsOfExperience(yearsOfExperience + 1);
        }, 100);

        return () => clearInterval(interval);
    }, [completedProjects, awards, yearsOfExperience]);
    return (
        <div className='aboutUsSection'>
            <NavbarAndFullscreenMenu />
            <div className="banner">
                <div className="centered">
                    <h1 className='  bg-clip-text text-transparent noise bg-gradient-to-b from-yellow-200 via-orange-500 to-brown-700 font-black text-9xl '>About Us</h1>
                    <div className="description">
                        <p>We are creative digital design,development + Technology agency,</p>
                        <p>specialized in creating elegant solutions to real-world problems.</p>
                    </div>
                </div>
            </div>
            <div className="bottom-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
                    <path opacity="0.6" d="M7.74219 2L17.5014 14L27.2607 2" stroke="#F22929" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.6" d="M2 8L17.5 28L33 8" stroke="#F22929" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>


            <div className="newAboutSection py-20 px-40">
                <div className=" font-bold text-7xl text-red-600 ">Power At Your Fingertips</div>
                <div className=" text-stone-300 text-2xl  font-medium  mt-3 sub-title">Astute thinkers and skilled creators</div>
                <div className="zig-zag-paragraph">
                </div>
                <div className="zigzag-paragraph left text-lg w-1/2 mt-9">
                    <p className='text-stone-300'>
                        Kala – The heart of creativity blending its core with code forms Kalacode a brand itself to deliver best in class immersive technology solutions and experiences for businesses worldwide. As technology has evolved, so have we. Since 2016 Hudbil Private Limited has embarked and harnessed our powers in creativity, marketing, and development to attain dozens of innovative patents, forward-thinking clients, and world-class partnerships, becoming one of the leading creative marketing and development agencies in the immersive technology space.
                    </p>
                </div>
                <div className="zigzag-paragraph right flex justify-between text-lg items-center w-full mt-9">
                    <div className="ourStory ml-[-40px] flex items-center">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h1 className='text-red-600 text-4xl pt-10 font-extrabold '>Our <br /> Story</h1>
                    </div>
                    <p className='text-stone-300 ml-[50%]'>
                        Kalacode has started its journey to embark the root of experience in reality for the world of digital era. A fusion of brains, boldness, and brilliance, the world’s leading companies turn to us for trusted advice and best-in-class immersive experiences that deliver real commercial value for their customers with the help of AI/AR to bring a product to its original reality by just power at your fingertips.
                    </p>
                </div>
                <div className="zigzag-paragraph left text-lg w-1/2 mt-9">
                    <p className='text-stone-300'>
                        We call ourselves immersive technology trailblazers. We don’t just know immersive technology; we’re leading the way with its application. We boast proprietary 3D workflows and are responsible for the world’s firsts in AR, including the world’s largest deployment of Web AR.</p>
                    <p className='text-stone-300 mt-3'>We’re business and technology specialists.</p>
                </div>
            </div>

            <div className="aboutSection1 py-20 px-52 bg-[#EBC095]">
                <div className="zigzag-paragraph right gap-20 flex justify-between text-lg items-center w-full mt-9">
                    <div className="ourStory ml-[-60px] flex items-center">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h1 className='text-red-600 text-4xl pt-5 font-extrabold '>Our <br /> Values</h1>
                    </div>
                    <p className='text-black mt-10'>
                        Our core of the sight We have vast experience in developing both large projects and small start-ups. Thanks to a large team of experienced professionals, we are ready. to solve the most complex tasks, especially in design and web' development.
                    </p>
                </div>
                <div className="counter">
                    <div className="flex gap-40  justify-center space-x-8 p-8">
                        <div className="text-start">
                            <h2 className="text-4xl text-[#F22929] font-bold ">{completedProjects}+</h2>
                            <p className=" text-[#404040] ">Completed Projects</p>
                        </div>
                        <div className="text-start">
                            <h2 className="text-4xl text-[#F22929] font-bold ">{awards}+</h2>
                            <p className=" text-[#404040] ">Awards</p>
                        </div>
                        <div className="text-start">
                            <h2 className="text-4xl text-[#F22929] font-bold ">{yearsOfExperience}</h2>
                            <p className=" text-[#404040] ">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="whyUsSection flex gap-20 px-40 py-20 bg-[#f02424]">
                <div className="left w-1/2">
                    <h1 className='text-9xl text-white opacity-70   pb-8 font-black'>Why us</h1>
                    <p className='text-[#fff] text-lg'>In a world proliferated with downloadable templates, icons and colour schemes, people often overlook design and focus on fast delivery of functionality. But we believe that there is space for creativity and quality in design, because design is how it works.</p>
                </div>

                <div className="right w-1/2">
                    <div className="accordion cursor-pointer pb-20 ">
                        <div className="accordion-header flex flex-row-reverse gap-[20rem]   justify-center items-center " onClick={toggleAccordion1}>
                            <span className="plus-sign bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D] text-3xl font-extrabold">{accordion1Open ? '-' : '+'}</span>
                            <h3 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D]  '>Accordion 1</h3>
                        </div>
                        {accordion1Open && (
                            <div className="accordion-content p-10">
                                Content for Accordion 1
                            </div>
                        )}
                    </div>
                    <div className="accordion cursor-pointer pb-20">
                        <div className="accordion-header flex flex-row-reverse gap-[20rem]   justify-center items-center " onClick={toggleAccordion2}>
                            <span className="plus-sign bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D] text-3xl font-extrabold">{accordion2Open ? '-' : '+'}</span>
                            <h3 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D] '>Accordion 2</h3>
                        </div>
                        {accordion2Open && (
                            <div className="accordion-content">
                                Content for Accordion 2
                            </div>
                        )}
                    </div>
                    <div className="accordion cursor-pointer pb-20">
                        <div className="accordion-header flex flex-row-reverse gap-[20rem]   justify-center items-center " onClick={toggleAccordion3}>
                            <span className="plus-sign bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D] text-3xl font-extrabold">{accordion3Open ? '-' : '+'}</span>
                            <h3 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D] '>Accordion 3</h3>
                        </div>
                        {accordion3Open && (
                            <div className="accordion-content">
                                Content for Accordion 3
                            </div>
                        )}
                    </div>
                    <div className="accordion cursor-pointer pb-20">
                        <div className="accordion-header flex flex-row-reverse gap-[20rem]   justify-center items-center " onClick={toggleAccordion4}>
                            <span className="plus-sign bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D] text-3xl font-extrabold">{accordion4Open ? '-' : '+'}</span>
                            <h3 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#F0F0F0] to-[#C1A38D]    '>Accordion 4</h3>
                        </div>
                        {accordion4Open && (
                            <div className="accordion-content">
                                Content for Accordion 4
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="ourServices bg-black">
                <div className="topServices py-20 px-28 ">
                    <div className="gap-12 flex justify-between text-lg items-start w-full mt-9">
                        <div className="ourStory  flex items-center">
                            <div className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                    <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 className='text-red-600 text-4xl pt-10 font-extrabold '>Our <br /> Services</h1>
                        </div>
                        <p className='text-white w-1/2 mt-10'>
                            We have many specializations in specific areas and can cover most of the company's needs in the IT Field.
                        </p>
                        <p className='text-white w-1/2 mt-10'>
                            Moreover, we provide support and advice to clients after the completion of our work.
                        </p>
                    </div>
                </div>
                <div className="flex mb-7 items-center gap-14">
                    <div className="brownCard p-10 w-1/2 bg-gradient-to-b from-[#B18060] from-70%  to-[#F1D0B0] rounded-tr-[45px]  rounded-br-[45px]">
                        <div className="ourStory  flex items-center">
                            <div className="mr-2 rotate-180 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                    <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 className='text-white text-4xl font-extrabold '>Augmented Reality</h1>
                        </div>
                        <p className='text-[20px] text-[#fff] p-6'>
                            Augmented reality is an interactive experience in which a real world environment is enhanced with computer-generated visual elements, sounds, and other stimuli. It can provide a user with a heightened, more immersive experience than they would experience otherwise that adds to the user's enjoyment or understanding.
                        </p>
                    </div>
                    <div className="servImage h-[18rem] rotate-45">
                        <img className='w-full h-full' src="/src/assets/services.png" alt="" />
                    </div>
                </div>


                <div className="flex flex-row-reverse items-center gap-14">
                    <div className="brownCard p-10 w-1/2 bg-gradient-to-b from-[#B18060] from-70%  to-[#F1D0B0] rounded-tl-[45px]  rounded-bl-[45px]">
                        <div className="ourStory  flex items-center">
                            <div className="mr-2 rotate-180 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                    <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 className='text-white text-4xl font-extrabold '>Augmented Reality</h1>
                        </div>
                        <p className='text-[20px] text-[#fff] p-6'>
                            Augmented reality is an interactive experience in which a real world environment is enhanced with computer-generated visual elements, sounds, and other stimuli. It can provide a user with a heightened, more immersive experience than they would experience otherwise that adds to the user's enjoyment or understanding.
                        </p>
                        <div className="flex">
                            
                        </div>

                    </div>
                    <div className="servImage h-[18rem] rotate-45">
                        <img className='w-full h-full' src="/src/assets/services.png" alt="" />
                    </div>
                </div>

                <div className="flex mb-7 items-center gap-14">
                    <div className="brownCard p-10 w-1/2 bg-gradient-to-b from-[#B18060] from-70%  to-[#F1D0B0] rounded-tr-[45px]  rounded-br-[45px]">
                        <div className="ourStory  flex items-center">
                            <div className="mr-2 rotate-180 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                    <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 className='text-white text-4xl font-extrabold '>Augmented Reality</h1>
                        </div>
                        <p className='text-[20px] text-[#fff] p-6'>
                            Augmented reality is an interactive experience in which a real world environment is enhanced with computer-generated visual elements, sounds, and other stimuli. It can provide a user with a heightened, more immersive experience than they would experience otherwise that adds to the user's enjoyment or understanding.
                        </p>
                    </div>
                    <div className="servImage h-[18rem] rotate-45">
                        <img className='w-full h-full' src="/src/assets/services.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-row-reverse items-center gap-14">
                    <div className="brownCard p-10 w-1/2 bg-gradient-to-b from-[#B18060] from-70%  to-[#F1D0B0] rounded-tl-[45px]  rounded-bl-[45px]">
                        <div className="ourStory  flex items-center">
                            <div className="mr-2 rotate-180 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                    <path d="M13.418 13.125L32.5846 31.875M32.5846 31.875V13.125M32.5846 31.875H13.418" stroke="#DB1F1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 className='text-white text-4xl font-extrabold '>Augmented Reality</h1>
                        </div>
                        <p className='text-[20px] text-[#fff] p-6'>
                            Augmented reality is an interactive experience in which a real world environment is enhanced with computer-generated visual elements, sounds, and other stimuli. It can provide a user with a heightened, more immersive experience than they would experience otherwise that adds to the user's enjoyment or understanding.
                        </p>
                        <div className="flex">
                            
                        </div>

                    </div>
                    <div className="servImage h-[18rem] rotate-45">
                        <img className='w-full h-full' src="/src/assets/services.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
