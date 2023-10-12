import gsap from 'gsap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {FiX} from 'react-icons/fi'
 import './menu.css'

const NavbarAndFullscreenMenu = () => {
    const [showCard1, setShowCard1] = useState(false);
    const [showCard2, setShowCard2] = useState(false);
    const [showCard3, setShowCard3] = useState(false);

    const slideInCard = (cardId, direction) => {
        gsap.from(cardId, {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0',
            y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : '0',
            duration: 0.2,
        });
    };

    const handleMenuClick = () => {
        // Slide in each card with a delay
        slideInCard('#card1', 'left');
        slideInCard('#card2', 'bottom');
        slideInCard('#card3', 'right');
        slideInCard('#card4', 'top');

        // Show the fullscreen menu
        const fullscreenMenu = document.getElementById('fullscreen-menu');
        fullscreenMenu.style.display = 'flex';
    };

    useEffect(() => {

        const menuButton = document.querySelector(".menuButton");
        const fullscreenMenu = document.getElementById("fullscreen-menu");
        const closeButton = document.getElementById("close-menu");
        menuButton.addEventListener("click", function () {
            fullscreenMenu.style.display = "flex";
        });
        closeButton.addEventListener("click", function () {
            fullscreenMenu.style.display = "none";
        });

    })

    // Rest of your code for the component

    return (
        <div className='z-[99999]'>

            <nav className='navbar'>
                <Link to={'/'}>
                    <img className='w-[150px] pl-6' src='/images/Group 80.png' alt='logo'></img>
                </Link>
                <button className='menuButton' onClick={() => handleMenuClick()}>
                    <FaBars />
                </button>

            </nav>

            <div id="fullscreen-menu">
                <div id="card1" className={`card ${showCard1 ? 'slide-in show' : ''}`}>
                    <img src="/qr-images/qr-2.png" alt="" className="image" />
                    <p className='text-sm  mt-2' > #2023000282 <br />  <span className='sm:text-2xl  font-bold '> About Us  </span> </p>
                </div>
                <div id="card2" className={`card ${showCard2 ? 'slide-in show' : ''}`}>
                    <Link to={'/contact-us'}>
                        <img src="/qr-images/qr-3.png" alt="" className="image" />
                        <p className='text-sm  mt-2'>  #2023000282 <br /> <span className='sm:text-2xl font-bold '> Contact Us  </span> </p>
                    </Link>
                </div>

                <div id="card3" className={`card ${showCard3 ? 'slide-in show' : ''}`}>
                    <Link to={'/services'}>
                        <img src="/qr-images/qr-4.png" alt="" className="image" />
                        <p className='text-sm  mt-2'> #2023000282 <br /> <span className='sm:text-2xl font-bold '> Services  </span> </p>
                    </Link>
                </div>
                {/*         
        <div id="card4" className={`card ${showCard4 ? 'slide-in show' : ''}`}>
          <img src="/qr-images/qr-3.png" alt="" className="image" />
          <p className='text-sm  mt-2'> #2023000282 <br /> <span className='text-2xl font-bold '> Contact Us  </span> </p>
        </div> */}

                <button id="close-menu" className="custom-close-button">
                    <div className="circle">
                        <FiX className="close-icon" /> {/* Add the close icon here */}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default NavbarAndFullscreenMenu;
