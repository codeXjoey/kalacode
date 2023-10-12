/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from '../../assets/Group 80.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import images from '../../pages/data';
import NavbarAndFullscreenMenu from '../menu/menu';

const Generate = () => {
  const [showForm, setShowForm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [linkValue, setLinkValue] = useState('https://kalacode.com/');
  const [imageUrl, setimageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const data = images.slice(4, 6);
  const [isSelected, setisSelected] = useState(data[0])
  const [promptValue, setPromptValue] = useState(data[0].description);

  const downloadImage = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank';
    link.download = 'qr_code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  async function openModal(event) {
    event.preventDefault();
    const url = linkValue;
    const promptText = promptValue;

    const payload = {
      qr_code_data: url,
      text_prompt: promptText,
      use_url_shortener: false,
      negative_prompt: 'ugly, disfigured, low quality, blurry, nsfw, text, words',
    };

    const apiUrl =
      'https://api.gooey.ai/v2/art-qr-code/?run_id=l49n5w4p&uid=RMZ2M7e255bQZhBO5XMqpXYb8zO2';

    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + 'sk-XbxlnLLL6S8doVzqTuhvdqf39pqsg9Sds4SXE7OedJH7ajCG',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        const result = await response.json();
        setimageUrl(result.output.output_images[0]);
        setShowForm(false);
        setShowModal(true);
      } else {
        console.error('Error: Unable to generate QR code');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  function closeModal() {
    setShowModal(false);
    setimageUrl('');
    setShowForm(true);
  }

  const handleGeneratedThen = () => {
    setShowForm(false);
    setShowModal(false);
  }

  const handleGenerateButtonClick = async (event) => {
    setShowModal(true);
    setLoading(true);
    await openModal(event);
    setLoading(false);

  };


  const setPromptInput = (image) => {
    setPromptValue(image.description);
    setisSelected(image);
  }


  // const seelectedImage =


  return (
    <>
    <NavbarAndFullscreenMenu/>
      <div className='h-screen bg-particle-image'>
        <div className="flex justify-between z-50 items-center px-4 sm:px-12 ">
          <div className="sm:w-auto  z-50 w-full ">
       
          </div>
        </div>
        <div className="flex h-[90vh] sm:h-[100vh]   flex-col items-center justify-center">
          {showForm && !showModal && (
            <div className="z-10 relative mt-40 flex flex-col justify-center h-full  qr-gen-form w-[90%] max-w-5xl sm:w-full text-white">
              <div className="corner-border-generated"></div>
              <div className="corner-border-generated"></div>
              <div className="corner-border-generated"></div>
              <div className="corner-border-generated"></div>
              <div className="px-1  sm:px-4 w-full form-text relative mx-auto max-w-screen-lg">
                <h1 className="text-xl mt-5 sm:py-2 sm:text-5xl uppercase text-center">
                  Artistic QR Code Generator
                </h1>
                <p className="mt-3 sm:px-20 opacity-70 text-sm text-center  pb-5 px-5">
                  Create AI powered qr codes for free, just key in the info below and get started
                </p>
                <div className="sm:mt-2 p-3 pt-2 bg-transparent shadow-lg max-w-3xl mx-auto">
                  <form>
                    <div className="mb-4 sm:mb-4">
                      <label htmlFor="link" className="block text-[14px] text-white/100 sm:text-lg">Add your link</label>
                      <input
                        id="link"
                        type="text"
                        placeholder="https://kalacode.com/"
                        className="w-full px-3 py-2 sm:mt-2 text-[12px] sm:text-[16px] bg-black border-2 border-gray-400/30 text-white/80 outline-none"
                        value={linkValue}
                        onChange={(e) => setLinkValue(e.target.value)}
                      />
                    </div>
                    <div className="sm:mb-2">
                      <label htmlFor="prompt" className="block pb-1 text-[14px] text-white/100 sm:text-lg">Add your prompt</label>
                      <textarea
                        id="prompt"
                        rows={5}
                        className="w-full px-4 py-2 sm:mt-2 text-[12px] sm:text-[16px]  bg-black mb-5 text-white/80 border-2 border-gray-400/30 outline-none"
                        placeholder="a detailed painting of a quaint cottage in the british countryside on a summers day, clue sky background with birds flying and trees, Andreas Rocha, matte painting concept art, a detailed matte painting, detailed background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)"
                        value={promptValue}
                        onChange={(e) => setPromptValue(e.target.value)}
                      ></textarea>
                    </div>

                    <div className='flex gap-4 sm:w-[50%]  mx-auto'>
                      {data.map((image, index) => (
                        <div key={index} onClick={() => setPromptInput(image)} className={`w-30 bg-white p-1 cursor-pointer h-30 ${isSelected === image ? 'opacity-100' : 'opacity-40'}`}>
                          <img className='object-cover qr-border' src={image.src} alt="" />
                          <p className='text-black text-[8px]  text-center'> #2023000282 <br /> <span className='text-lg'>Hulk</span></p>
                        </div>
                      ))}
                      <div className=' w-30 px-6   sm:px-8 cursor-pointer flex justify-center items-center   h-30 glassy-background'>
                        <p className='text-white text-xs text-center'>Explore More</p>
                      </div>
                    </div>
                    <div className="text-center mt-8 sm:my-10 relative">
                      <button className="relative px-14 py-2 text-white border-2 border-gray-50/20 bg-transparent mb-2"
                        onClick={handleGenerateButtonClick} // Use the new function here

                      >

                        <div className="corner-button-generate"></div>
                        <div className="corner-button-generate"></div>
                        <div className="corner-button-generate"></div>
                        <div className="corner-button-generate"></div>
                        Generate Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {showModal && (
            <div className="fixed  inset-0 flex modal-text items-center justify-center ">

              <div className="w-full backdrop-blur-sm max-w-7xl mt-6 sm:mt-0 p-2 mx-auto rounded" id="myModal">
                <div className="flex flex-col items-center justify-center w-full z-50 ">
                  {loading ? (
                    <div className="loader animate-spin w-12 h-12  rounded-full border-4 border-blue-500 border-t-transparent"></div>
                  ) : (
                    <div className="bg-black  pb-5 sm:py-6  outline outline-offset-0 outline-white/5  bg-opacity-20 sm:w-[60rem] flex justify-center items-center flex-col relative">
                      <div className="corner-border-generated"></div>
                      <div className="corner-border-generated"></div>
                      <div className="corner-border-generated"></div>
                      <div className="corner-border-generated"></div>
                      <button className="absolute  top-0 left-0 p-2 sm:m-4 text-white" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <h1 className="text-2xl text-white sm:text-5xl px-3 py-[2.5rem] sm:pb-10 uppercase  sm:pt-5  text-center">
                        YOUR ARTISTIC QR CODE <br /> IS READY
                      </h1>
                      <div className="bg-transparent bg-black">
                        <img
                          id="qrCodeImage"
                          src={imageUrl}
                          alt="qrcode"
                          className="h-64  rounded-lg w-64 bg-none"
                        />
                      </div>
                      <div className="sm:py-5 text-center">
                        <p className="text-white text-lg py-3 text-center">Share your QR Code</p>
                        <div className="flex justify-center pb-4 space-x-4">
                          <a href="#" className="text-white">
                            <FaFacebook size={16} />
                          </a>
                          <a href="#" className="text-white">
                            <FaTwitter size={16} />
                          </a>
                          <a href="#" className="text-white">
                            <FaInstagram size={16} />
                          </a>
                          <a href="#" className="text-white">
                            <FaLinkedin size={16} />
                          </a>
                        </div>
                      </div>
                      <div className="mt-2  flex justify-center">
                        <button onClick={() => downloadImage(imageUrl)} className=" relative font-bold outline outline-offset-2 outline-gray-400/50  outline-1 text-black bg-white px-10 py-2">
                          <div className="corner-button"></div>
                          <div className="corner-button"></div>
                          <div className="corner-button"></div>
                          <div className="corner-button"></div>
                          DOWNLOAD NOW
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Generate;
