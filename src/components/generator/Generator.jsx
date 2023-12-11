/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from '../../assets/Group 80.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import images from '../../pages/data';
import NavbarAndFullscreenMenu from '../menu/menu';
import CursorAnimation from '../cursor-animation/curosor';
import { useParams } from 'react-router-dom';

const Generate = () => {
  const { qrCodeId } = useParams();
  const [showForm, setShowForm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [linkValue, setLinkValue] = useState('https://kalacode.com/');
  const [imageUrl, setimageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const data = images.slice(4, 6);
  const [isSelected, setisSelected] = useState(data[0])
  const [promptValue, setPromptValue] = useState(null);

  let qrCodes = [
    {
      'image': '/textures/qr-code-1.png',
      'prompt': 'humanoid android, covered in white porcelain skin, blue eyes, white wispy ghost wearing ornate armour 4k realistic fantasy, insane details, ghost phantom effect, hyper detailed, photoreal, photography, cinematic lighting, hdr, hd, cinematography, realism, fine art digital, HD, Mark Molnar mystical, redshift rendering, 8k –v 4',
      'id': '1'
    },
    {
      'image': '/textures/qr-code-2.png',
      'prompt': 'character design, cyborg shadowrunner watching arm decompose into cybernetic tentacles in the style of live action movie version of appleseed –v 4',
      'id': '2'
    },
    {
      'image': '/textures/qr-code-3.png',
      'prompt': 'twin girls and fawn in moonlit snowy forest by Ray Caesar –v 4',
      'id': '3'
    }, {
      'image': '/textures/qr-code-4.png',
      'prompt': 'cyberpunk girl in jacket, colorful tattoos, harlequin cyberpunk, highly detailed, Anna-Lou Leibovitz, dark environment, neon colors, back lighting, Cinematic scene, Cinematic lighting, movie poster, dramatic color variations, strong contrast lighting, 8K, hypermaximalist, detailed intricate, ray tracing, insane detailse ink illustration',
      'id': '4'
    },
    {
      'image': '/textures/qr-code-5.png',
      'prompt': 'fanatic warrior, portrait, Arabic female, bald, determined, ornamental scars, scifi military armor in black and gold, space opera',
      'id': '5'
    },
    {
      'image': '/textures/qr-code-6.png',
      'prompt': 'sci-fi cosmic diarama of a quasar and jellyfish in a resin cube, volumetric lighting, high resolution, hdr, sharpen, Photorealism',
      'id': '6'
    },
    {
      'image': '/textures/qr-code-7.png',
      'prompt': 'maze, Narrow steep staircase, Old Building, Floating buildings, Urban, City rain, art by miyazaki and Ian McQue and Akihiko Yoshida and Katsuya Terada, colorful, trending on artstation, gorgeous, ultra-detailed, realistic, 8k, octane render, hyper detailed, cinematic',
      'id': '7'
    },
    {
      'image': '/textures/qr-code-8.png',
      'prompt': ': tree of life intricate, leaf fractal structure, ethereal, fractalpunk, octane render, unreal engine, blender render, immersive detail, enhanced quality',
      'id': '8'
    },
    {
      'image': '/textures/qr-code-9.png',
      'prompt': 'anthropomorphic profile of the white snow owl Crystal priestess , art deco painting, pretty and expressive eyes, ornate costume, mythical, ethereal, intricate, elaborate, hyperrealism, hyper detailed, 3D, 8K, Ultra Realistic, high octane, ultra resolution, amazing detail, perfection, In frame, photorealistic, cinematic lighting, visual clarity, shading , Lumen Reflections, Super-Resolution, gigapixel, color grading, retouch, enhanced, PBR, Blender, V-ray, Procreate, zBrush, Unreal Engine 5, cinematic, volumetric, dramatic, neon lighting, wide angle lens',
      'id': '9'
    },
    {
      'image': '/textures/qr-code-10.png',
      'prompt': 'an egg covered in a highly intricate filligree pattern in different coours extreme detail photographic quality',
      'id': '10'
    },
    {
      'image': '/textures/qr-code-11.png',
      'prompt': 'a cover photography, body and face photo, a beautiful young woman covered in water and liquid, clothes old and ragged, half buried on trash and garbage, hyper realistic, model photography, 500px poses, detailed, intricate',
      'id': '11'
    },
    {
      'image': '/textures/qr-code-12.png',
      'prompt': 'double exposure of full portrait of a detailed skull & mushroom hybrid, mossy scales, dark environment, mushroom scales, forest god, bright eyes, sharp fangs and big horns finely detailed, surrounded by forest, cinematic lighting, 4k, 8k, unreal engine 5, octane render',
      'id': '3'
    },

    {
      'image': '/textures/qr-code-15.png',
      'prompt': 'close-up little cute ginger syberian cat, full body, front facing, samurai armor, anthropomorphic, soft cinematic lighting, 8k',
      'id': '12'
    },
    {
      'image': '/textures/qr-code-16.png',
      'prompt': 'belle epoque, christmas, red house in the forest, photo realistic, 8k ',
      'id': '13'
    },
    {
      'image': '/textures/qr-code-17.png',
      'prompt': 'tented resort in the desert, rocky and sandy terrain, 5 star hotel, beautiful landscape, landscape photography, depth of view, Fujifilm GFX 100 –uplight',
      'id': '14'
    },
    {
      'image': '/textures/qr-code-18.png',
      'prompt': 'Eiffel tower, colorful paining style',
      'id': '15'
    },
    {
      'image': '/textures/qr-code-19.png',
      'prompt': 'a painting of a colorful fruit stall in a busy market, Andreas Rocha, matte painting concept art, a detailed matte painting, detailed background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)',
      'id': '16'
    },
    {
      'image': '/textures/qr-code-20.png',
      'prompt': 'masterpiece, best quality, mecha, no humans, black armor, blue eyes, science fiction, fire, laser canon beam, war, conflict, destroyed city background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)',
      'id': '17'
    },
    {
      'image': '/textures/qr-code-21.png',
      'prompt': 'a detailed painting of a showey hillside on a cold winter day, clue sky background with birds flying and trees, Andreas Rocha, matte painting concept art, a detailed matte painting, detailed background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)',
      'id': '18'
    },
    {
      'image': '/textures/qr-code-22.png',
      'prompt': 'majestic knight, portrait, finely detailed armor, cinematic lighting, intricate filigree metal design, 4k, 8k, unreal engine, octane render',
      'id': '19'
    },
    {
      'image': '/textures/qr-code-23.png',
      'prompt': 'masterpiece, best quality, mecha, no humans, black armor, blue eyes, science fiction, fire, laser canon beam, war, conflict, destroyed city background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)',
      'id': '20'
    },
    {
      'image': '/textures/qr-code-21.png',
      'prompt': 'a detailed painting of a showey hillside on a cold winter day, clue sky background with birds flying and trees, Andreas Rocha, matte painting concept art, a detailed matte painting, detailed background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)',
      'id': '21'
    }
  ]

  useEffect(() => {
    const selectedQrCode = qrCodes.find((qrCode) => qrCode.id === qrCodeId);

    if (selectedQrCode) {
      setPromptValue(selectedQrCode.prompt);
    } else {
      // Handle the case where qrCodeId is not found
      console.error(`QR code with ID ${qrCodeId} not found.`);
      setPromptValue('a detailed painting of a showey hillside on a cold winter day, clue sky background with birds flying and trees, Andreas Rocha, matte painting concept art, a detailed matte painting, detailed background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)');
    }
  }, [qrCodeId]);


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
      selected_model: "dream_shaper",
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
    setShowForm(false);
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
      <NavbarAndFullscreenMenu />
      <div className='h-screen bg-black z-[100000000]'>
        <div className="flex justify-between z-50 items-center px-4 sm:px-12 ">
          <div className="sm:w-auto  z-50 w-full ">

          </div>
        </div>
        <div className="flex h-[86vh] sm:h-[90vh]  mt-20 sm:mt-12  flex-col items-center justify-center">
          {showForm && !showModal && (
            <div className={`z-50 relative border-2   flex flex-col justify-center py-10 qr-gen-form w-[90%] max-w-5xl sm:w-full text-white ${showForm ? 'fade-in' : 'fade-out'}`}>
              <div className="corner-border-generated"></div>
              <div className="corner-border-generated"></div>
              <div className="corner-border-generated"></div>
              <div className="corner-border-generated"></div>
              <div className="px-1  sm:px-4 w-full form-text relative mx-auto max-w-screen-lg">
                <h1 className="text-xl mt-2 sm:py-2 sm:text-5xl uppercase text-center">
                  Artistic QR Code Generator
                </h1>
                <p className="mt-3 sm:px-20 opacity-70 text-sm text-center  pb-3 px-5">
                  Create AI powered qr codes for free, just key in the info below and get started
                </p>
                <div className="sm:mt-2 p-3 pt-2 bg-transparent shadow-lg max-w-3xl mx-auto">
                  <form>
                    <div className="mb-4 sm:mb-3">
                      <label htmlFor="link" className="block text-[14px] text-white/100 sm:text-[1rem]">Add your link</label>
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
                      <label htmlFor="prompt" className="block pb-1 text-[14px] text-white/100 sm:text-[1rem]">Add your prompt</label>
                      <textarea
                        id="prompt"
                        rows={5}
                        className="w-full px-4 py-2 sm:mt-2 text-[12px] sm:text-[16px]  bg-black mb-5 text-white/80 border-2 border-gray-400/30 outline-none"
                        placeholder="a detailed painting of a quaint cottage in the british countryside on a summers day, clue sky background with birds flying and trees, Andreas Rocha, matte painting concept art, a detailed matte painting, detailed background, ((illustration)), (((masterpiece))), ((best quality)), (High resolution)"
                        value={promptValue}
                        onChange={(e) => setPromptValue(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="flex sm:flex-row  flex-col sm:gap-32 justify-center">
                      <div className="text-center my-4 relative">
                        <button className="relative  px-14 py-4 text-white border-[1px] border-white/30  bg-transparent overflow-hidden  flex-1 btn  button   text-center  sm:px-15   transition duration-500 ease-in-out"
                          onClick={handleGenerateButtonClick} // Use the new function here

                        >

                          <div className="corner-button z-50"></div>
                          <div className="corner-button z-50"></div>
                          <div className="corner-button z-50"></div>
                          <div className="corner-button z-50"></div>
                          <span className="btn-content ">
                            <span className="btn-inner-content  ">
                              <span>Generate Now</span>
                            </span>
                          </span>
                        </button>
                      </div>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {showModal && (
            <div className={`fixed inset-0 flex modal-text items-center justify-center ${showModal ? 'fade-in' : 'fade-out'}`}>

              <div className="w-full backdrop-blur-sm max-w-7xl mt-6 sm:mt-0 p-2 mx-auto rounded" id="myModal">
                <div className="flex flex-col items-center justify-center w-full z-50 ">
                  {loading ? (
                    <div className="loader animate-spin w-12 h-12  rounded-full border-4 border-blue-500 border-t-transparent"></div>
                  ) : (
                    <div className={`bg-black  pb-5 sm:py-6  outline outline-offset-0 outline-white/5  bg-opacity-20 sm:w-[60rem] flex justify-center items-center flex-col relative ${showModal ? 'fade-in' : 'fade-out'}`}>
                      <div className="corner-border-generated"></div>
                      <div className="corner-border-generated"></div>
                      <div className="corner-border-generated"></div>
                      <div className="corner-border-generated"></div>
                      <button className="absolute  top-0 right-0 p-2 sm:m-4 text-white" onClick={closeModal}>
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
