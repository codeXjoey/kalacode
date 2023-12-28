import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../components/footer/footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pages.css"
import NavbarAndFullscreenMenu from '../components/menu/menu';
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const typedTextSpan = document.querySelector(".head2-anm");
    const cursorSpan = document.querySelector(".typing-cursor");

    const textArray = ["ambitious - brands", "to generate", "Revenue", "Visibility", "Engagement"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 900);
      }
    }

    if (isAnimating) {
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    }
  }, [isAnimating]);

  useEffect(() => {
    // Toggle the animation after a delay
    const delay = 200; // Delay in milliseconds before starting the animation

    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    // Clean up when the component unmounts or when isAnimating becomes false
    return () => {
      clearTimeout(animationTimeout);
      setIsAnimating(false); // Reset isAnimating state
    };
  }, []); // Empty dependency array to run once when the component mounts

  //page2




  //page3
  const movableRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(0);

  const contents = [
    "Our strength lies in our commitment to data-driven performance solutions designed to increase lead generation, customer acquisition, and audience engagement.",
    "Marketing isn’t a one-off activity but a continuous process. We act as an extension to your organization, connecting the dots between ideas, strategy, and technology to deliver long-term, sustainable solutions."
  ];

  useEffect(() => {
    const animateContent = () => {
      gsap.to(movableRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // Change content
          movableRef.current.textContent = contents[contentIndex];

          // Increment contentIndex or reset to 0 if it reaches the end
          setContentIndex((prevIndex) =>
            prevIndex === contents.length - 1 ? 0 : prevIndex + 1
          );

          // Animate back to full opacity
          gsap.to(movableRef.current, {
            opacity: 1,
            duration: 1
          });
        }
      });
    };

    // Set interval to change content every 5 seconds
    const interval = setInterval(animateContent, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [contentIndex]);
  //page4
  const [selectedService, setSelectedService] = useState('Performance Marketing');

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };
  //page5
  const containerRef = useRef();
  const [selectedBox, setSelectedBox] = useState('acma');

  useEffect(() => {
    const container = containerRef.current;
    const title = container.querySelector('.page5-title');
    const description = container.querySelector('.page5-des');

    const handleMouseOver = () => {
      gsap.fromTo(
        [title, description],
        {
          opacity: 1,
          y: 50, // Initial position, adjust as needed
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('page5-title') && !e.relatedTarget.classList.contains('page5-des')) {
        gsap.to([title, description], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    };

    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleBoxClick = (boxId) => {
    setSelectedBox(selectedBox === boxId ? null : boxId);

    // Update background image based on selectedBox
    const page5Cont = containerRef.current;

    switch (boxId) {
      case 'acma':
        page5Cont.style.backgroundImage = 'url("./acmaimg.png")';
        break;
      case 'toolstation':
        page5Cont.style.backgroundImage = 'url("./toolstationimg.png")';
        break;
      case 'solo':
        page5Cont.style.backgroundImage = 'url("./soloimg.png")';
        break;
      case 'cedevita':
        page5Cont.style.backgroundImage = 'url("./cedevitaimg.png")';
        break;
      default:
        // Set a default image or handle accordingly
        page5Cont.style.backgroundImage = 'none';
        break;
    }
  };
  //page6
  useEffect(() => {
    // Set up GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page6-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1, // Adjust the scrub value as needed
      },
    });

    // Define animations for each page6-cont element
    document.querySelectorAll('.page6-cont').forEach((el, index) => {
      tl.fromTo(
        el,
        { x: '80%' }, // Initial position (right side)
        { x: '0%', duration: 1, opacity: 1 }, // Final position (left side)
        `-=${index === 0 ? 0 : 0.5}` // Adjust the delay for each element
      );
    });
  }, []);
  //page7
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page7-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1, // Adjust the scrub value as needed
      },
    });

    sectionRefs.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1 },
        `-=${index === 0 ? 0 : 0.5}` // Adjust the delay for each element
      );
    });
  }, []);
  //page8
  //page9
  //page10
  return (
    <div>
      {/*page1*/}
      <NavbarAndFullscreenMenu/>
      <div className='main-container'>
        <div className='page1-content'>
          <div className='head1'>We help</div>
          <p><span className="head2-anm"></span><span className="typing-cursor"></span></p>
          <div className='head3'>by marketing</div>
        </div>

        <button className='talk-btn'>
          Let's talk <img src='./arr-b.png' alt='Arrow' />
        </button>
      </div>

      {/*page2*/}
      <div className="page2-container">
        <div className="page2-rect">
          <div className="page2-right">
            <div className="weare">Who We Are</div>
            <div className="page2-title">Our Brands</div>
            <div className="page2-description">
              Hudbil Private Limited is an reliable company, with multiple brands under the one umbrella.
              We are here to enable you with top-notch digital solutions & products through a proven cost-saving model. This allows you to scale, optimize, expand, and enhance your business. with an individual approach. This is our game style.
            </div>
          </div>
          <div className="  px-20 w-[50%] m-auto">

            <Slider {...settings}>
              <div className="comp-c text-center mx-auto pt-10 gap-20 flex flex-col justify-center items-center" >
                <img className='w-36 mx-auto' src="hudbil-logo.png" alt="" />
                <p className='text-center mx-auto'>HUDBIL delivers B2B engaging designing and development with the latest technology tools to empower business and drive success, at speed and scale.</p>
                <button className="mx-auto learnmore">
                  Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} />
                </button>
                <div className="comp-line-design ">
                  <img src='./line-design-yellow.png' className='mx-auto' alt="line design" />
                </div>
              </div>
              <div className="comp-c text-center mx-auto pt-20 gap-20 flex flex-col justify-center items-center" >
                <img className='w-36 mx-auto' src="kalacode-logo.png" alt="" />
                <p className='mx-auto'>KALACODE delivers proprietary 3D workflows and is responsible for the world’s firsts in AR, including the world’s largest deployment of WebAR.</p>
                <button className="mx-auto learnmore">
                  Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} />
                </button>
                <div className="comp-line-design">
                  <img className='mx-auto' src='./line-design-yellow.png' alt="line design" />
                </div>
              </div>
              <div className="comp-c text-center mx-auto pt-20 gap-20 flex flex-col justify-center items-center" >
                <img className='w-36 mx-auto' src="maus-logo.png" alt="" />
                <p className='mx-auto'>MAUS is a ‘Gen-Z’ Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A user journey touch point.</p>
                <button className="learnmore mx-auto">
                  Learn more<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", fontSize: "1.5rem" }} />
                </button>
                <div className="comp-line-design">
                  <img className='mx-auto' src='./line-design-yellow.png' alt="line design" />
                </div>
              </div>
            </Slider>
          </div>

        </div>
      </div>
      {/*page3*/}
      <div className='page3-container'>
        <div className='section-heading'>Our passion lies in working closely with our clients to develop valuable digital marketing tailored to their needs.</div>
        <div className="page3-right">
          <div className="aboutus">About Us</div>
          <div className="stable-des">Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.</div>
          <div className="movable-des">
            <div className="movable" ref={movableRef}>
              {contents[contentIndex]}
            </div>
          </div>
          <div className="line-design" ><img src='./line-design-yellow.png' alt="Line Design" /></div>
          <div className="findmore-btn">Find out more<img src='./arr-b.png' className='page3-arr' alt="Arrow" /></div>
        </div>
      </div>
      {/*page4*/}
      <div className="page4-container">
        <div className="page4-left">
          <button className='whatwedo-btn'>What We Do</button>
          <div className="page4-title">Our Services</div>
          <div className="page4-des">Creative solutions from strategy through omni- channels placements to engag, acquire, and transform brands for sustained growth.</div>
          <div className="page4-line" />
          <div className="perf" onClick={() => handleServiceClick('Performance Marketing')}>
            <div className="srno">01</div>
            <div className="innertitle">Performance Marketing</div>
            <FontAwesomeIcon className="page4-arr" icon={faArrowRight} style={{ marginLeft: "325px" }} />
          </div>
          <div className="page4-line" />
          <div className="perf" onClick={() => handleServiceClick('Omni - channel Marketing')}>
            <div className="srno">02</div>
            <div className="innertitle">Omni - channel Marketing</div>
            <FontAwesomeIcon className="page4-arr" icon={faArrowRight} style={{ marginLeft: "290px" }} />
          </div>
          <div className="page4-line" />
          <div className="perf" onClick={() => handleServiceClick('Lead Generation')}>
            <div className="srno">03</div>
            <div className="innertitle">Lead Generation</div>
            <FontAwesomeIcon className="page4-arr" icon={faArrowRight} style={{ marginLeft: "430px" }} />
          </div>
          <div className="page4-line" />
          <div className="perf" onClick={() => handleServiceClick('Content Marketing')}>
            <div className="srno">04</div>
            <div className="innertitle">Content Marketing</div>
            <FontAwesomeIcon className="page4-arr" icon={faArrowRight} style={{ marginLeft: "400px" }} />
          </div>
          <div className="page4-line" />
          <button className='expl'>Explore Services<FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000", height: "25px", width: "20px", transform: 'rotate(-45deg)' }} /></button>
        </div>
        <div className="page4-right">
          <div className="changing-desof">
            <div className="innertitl">{selectedService}<img src="./arr-w-learn.png" /></div>
            {selectedService === 'Performance Marketing' && (
              <div className="titldes">ROIs are at the heart of performance marketing, as every action can be tracked and measured against key performance indicators (KPIs). Whether it be the number of clicks, page views or sales, these key metrics are crucial to measuring and enhancing performance</div>
            )}
            {selectedService === 'Omni - channel Marketing' && (
              <div className="titldes">Your customers will be happier in the long term if they feel they have several methods to reach your customer service and sales teams. Or if they can purchase your product easily regardless of their device or preferred platform.</div>
            )}
            {selectedService === 'Lead Generation' && (
              <div className="titldes"> Lead Generation brings the right opportunities into your sales teams’ calendars. We grow your pipeline by managing research, campaign creation, outbound sales and inbox management. We work as your lead gen department taking care of all the time-consuming top-of-funnel.</div>
            )}
            {selectedService === 'Content Marketing' && (
              <div className="titldes">Reach your marketing goals with a content strategy that helps you find your strongest stories, reach the right people, measure your success, and do it all as efficiently as possible. Supporting the growth of your business.
              </div>
            )}

          </div>
          <div className="line-design" ><img src='./line-design-red.png' alt="Line Design" /></div>
        </div>
      </div>
      {/*page5*/}
      <div className="page5-container">
        <div className='seeall-btn'>See all project <img src='./arr-b.png' /></div>
        <div className="page5-cont" ref={containerRef}>
          <div className="page5-title">{selectedBox ? selectedBox.toUpperCase() + '.' : ''}</div>
          <div className="page5-des">
            {selectedBox &&
              (selectedBox === 'acma' ? 'Automotive Component Manufacturers Association of India' :
                selectedBox === 'toolstation' ? 'Tool station launches latest catalog with deals and products' :
                  selectedBox === 'solo' ? 'Solo Expenses – App promotion marketing campaign' :
                    selectedBox === 'cedevita' ? 'Creating an intelligent and seamless experience for an NGO.' : '')
            }
          </div>
          <div className='viewproj-btn'>View Project<img src='./arr-b.png' /></div>
        </div>
        <div className="page5-box">
          <div className="whatwedid-btn">What We Did</div>
          <div className="box-cont">
            <div className={`box-brand ${selectedBox === 'acma' ? 'open-brand' : ''}`}
              onClick={() => handleBoxClick('acma')}>
              ACMA.<img src='./crossarr-w.png' />
            </div>
            {selectedBox === 'acma' && (
              <>
                <div className="box-des">Working closely with the ACMA team, Associations has transformed the event b2b and b2c search strategy and performance by restructuring search campaigns, rolling out into new territories, and combining their event and Google intelligent bidding to grow digital overall.</div>
                <div className="boxmid-s">
                  <div className="whitebox">SMM</div>
                  <div className="whitebox">Content Writing</div>
                  <div className="whitebox">Strategy</div>
                </div>
              </>
            )}

            <div className={`box-brand ${selectedBox === 'toolstation' ? 'open-brand' : ''}`}
              onClick={() => handleBoxClick('toolstation')}>
              Toolstation.<img src='./crossarr-w.png' />
            </div>
            {selectedBox === 'toolstation' && (
              <>
                <div className="box-des">The catalog will be available in all 550+ Tool station stores across the UK. To celebrate the launch, Coltfox did help them with hard-to-reach local construction Landing strategy in London and across the capital, making it easier attract deals.</div>
                <div className="boxmid-s">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}

            <div className={`box-brand ${selectedBox === 'solo' ? 'open-brand' : ''}`}
              onClick={() => handleBoxClick('solo')}>
              Solo.<img src='./crossarr-w.png' />
            </div>
            {selectedBox === 'solo' && (
              <>
                <div className="box-des">Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime debitis aut neque cupiditate At voluptas autem qui officiis exercitationem? Vel doloribus sint et porro aliquid ut nihil quaerat aut enim nihil ea voluptatem sunt quo quod odit.</div>
                <div className="boxmid-s">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
            <div className={`box-brand ${selectedBox === 'cedevita' ? 'open-brand' : ''}`}
              onClick={() => handleBoxClick('cedevita')}>
              Cedevita.<img src='./crossarr-w.png' />
            </div>
            {selectedBox === 'cedevita' && (
              <>
                <div className="box-des">Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime debitis aut neque cupiditate At voluptas autem qui officiis exercitationem? Vel doloribus sint et porro aliquid ut nihil quaerat aut enim nihil ea voluptatem sunt quo quod odit.</div>
                <div className="boxmid-s">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/*page6*/}
      <div className="page6-container" >
        <button className='howdowe-btn'>How We Do It</button>
        <div className="page6-title">Process & Approach</div>
        <div className="page6-cont"  >

          <div className="protitle">1. <div className="innert">Requirements</div></div>
          <div className="prodes">Our initial meeting or call will identify your objectives and decipher exactly how we can help. This involves some deep digging into your company, your competitors, your audience and, most importantly, what you want to achieve.</div>

        </div>
        <div className="page6-cont">
          <div className="protitle">2. <div className="innert">Strategy</div></div>
          <div className="prodes">We begin to explore all the possible avenues your business could take and we develop a custom strategy to hit your business goals, underpinned by a strategic digital plan. This is the step where no idea is a bad idea; really anything goes!</div>

        </div>
        <div className="page6-cont">
          <div className="protitle">3. <div className="innert">Launch</div></div>
          <div className="prodes">After refining the concept we execute the final solution, always in budget and always on time. We'll be on hand to closely monitor the launch and keep you updated We track the project or campaign to ensure the results match your objectives.</div>

        </div>
        <div className="page6-cont">
          <div className="protitle">4. <div className="innert">Enhance</div></div>
          <div className="prodes">Here we refine and optimise the project or campaign to maximise ROI and highlight key successes to carry into future projects. We cycle through a series of continuous improvement sprints to maximise and achieve optimum performance.</div>

        </div>
        <div className="page6-endcont">
          <p>For over a <div className='endcont-style'>decade</div>, we’ve been delivering ‘Marketing Experience’ that will amaze
            you</p>
          <div className="end-date">Since 2016</div>
        </div>
      </div>
      {/*page7*/}
      <div className="page7-container">
        <button className='whatwefocus-btn'>What We Focus</button>
        <div className="page7-title">Industries</div>
        <div className="page7-des">Regardless of your operation’s size, collaboration toward a shared goal leads to success.</div>
        <div className="page7-content">
          <div className="section1" ref={(ref) => (sectionRefs.current[0] = ref)}>
            <div className="section-title">FRANCHISES</div>
            <div className="page7-line" />
            <div className="sec-logo"><img src="./sec1-logo.png" alt="" /></div>
            <div className="sec-des1">Not only do we increase B2B leads for franchisors, we also help home-town franchisees generate new customers and increase customer loyalty.</div>
            <div className='learn-m'>Learn more<img src="./arr-w-learn.png" alt="" className='learn-m-arr' /></div>
          </div>
          <div className="section2" ref={(ref) => (sectionRefs.current[1] = ref)}>
            <div className="section-title">NON-PROFITS</div>
            <div className="page7-line" />
            <div className="sec-logo"><img src="./sec2-logo.png" alt="" /></div>
            <div className="sec-des2">Empowering non-profit organizations to increase engagement, loyalty, impact, and donations worldwide is our major focus.</div>
            <div className='learn-m'>Learn more<img src="./arr-w-learn.png" alt="" className='learn-m-arr' /></div>
          </div>
          <div className="section3" ref={(ref) => (sectionRefs.current[2] = ref)}>
            <div className="section-title">E-COMMERCE</div>
            <div className="page7-line" />
            <div className="sec-logo"><img src="./sec3-logo.png" alt="" /></div>
            <div className="sec-des3">We boost online retailers' digital presence, optimize conversion rates, and enhance the customer shopping experience for increased sales and profitability.</div>
            <div className='learn-m'>Learn more<img src="./arr-w-learn.png" alt="" className='learn-m-arr' /></div>
          </div>
        </div>
      </div>
      {/*page8*/}
      <div className="page8-container">
        <button className='whattheysay-btn'>What They Say</button>
        <div className="page8-title">Clients</div>
        <div className="page8-des">We’ve partnered with some truly amazing brands and organizations – locally, nationally, and internationally.</div>

        <div className='page8-scroller1' >
          <div className="scroll1-grp1">
            <div className='elem1'><img src='./kf_logo.png' alt='kf_logo logo' /></div>
            <div className='elem1'><img src='./junk_logo.png' alt='junk_logo logo' /></div>
            <div className='elem1'><img src='./sendl_logo.png' alt='sendl_logo logo' /></div>
            <div className='elem1'><img src='./sbee_logo.png' alt='sbee_logo logo' /></div>
            <div className='elem1'><img src='./cre_logo.png' alt='cre_logo logo' /></div>
            <div className='elem1'><img src='./mfr_logo.png' alt='mfr_logo logo' /></div>
            <div className='elem1'><img src='./usaid_logo.png' alt='usaid_logo logo' /></div>
          </div>
          <div className="scroll1-grp1">
            <div className='elem1'><img src='./kf_logo.png' alt='kf_logo logo' /></div>
            <div className='elem1'><img src='./junk_logo.png' alt='junk_logo logo' /></div>
            <div className='elem1'><img src='./sendl_logo.png' alt='sendl_logo logo' /></div>
            <div className='elem1'><img src='./sbee_logo.png' alt='sbee_logo logo' /></div>
            <div className='elem1'><img src='./cre_logo.png' alt='cre_logo logo' /></div>
            <div className='elem1'><img src='./mfr_logo.png' alt='mfr_logo logo' /></div>
            <div className='elem1'><img src='./usaid_logo.png' alt='usaid_logo logo' /></div>
          </div>

        </div>

        <div className='page8-scroller2'>
          <div className="scroll2-grp1">
            <div className='elem2'><img src='./acma-logo.png' alt='acma logo' /></div>
            <div className='elem2'><img src='./nuta_logo.png' alt='acma logo' /></div>
            <div className='elem2'><img src='./scoro_logo.png' alt='scoro_logo' /></div>
            <div className='elem2'><img src='./cht_logo.png' alt='cht_logo' /></div>

          </div>
          <div className="scroll2-grp1">
            <div className='elem2'><img src='./acma-logo.png' alt='acma logo' /></div>
            <div className='elem2'><img src='./nuta_logo.png' alt='nuta_logo' /></div>
            <div className='elem2'><img src='./scoro_logo.png' alt='scoro_logo' /></div>
            <div className='elem2'><img src='./cht_logo.png' alt='cht_logo' /></div>

          </div>
        </div>
      </div>
      {/*page9*/}
      <div className="page9-container">
        <div className="page9-cont">
          <div className="page9-right">
            <div className="page9-title">Its all about our clients. </div>
            <div className="page9-subtitle">(and what they say!)</div>
          </div>
          <div className="page9-des">
            <div className="comp-name">Roatan Real Estate</div>
            <div className="sign">“</div>
            <div className="comp-review">Coltfox is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of all your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do. - Marci Wiersma </div>
            <div className="page9-design1" ><img src='./line-design.png' /></div>
          </div>
        </div>


      </div>
      {/*page10*/}
      <div className="page10-container">
        <button className='whatweread-btn'>What We Read</button>
        <div className="page10-title">Our Blogs</div>
        <div className="page10-subtitle">Be inspired and informed. <button className='ournews-btn'>Our News<img src='./arr-b.png' /> </button></div>
        <div className='page10-line' />

        <div className="page10-cont">
          <div className="page10-blog1">
            <img src='./blog1.png' className='blogimg' />
            <div className='expand-blog'>
              <div className="expand-content">
                <img src="./page10-insideimg.png" alt="" />
                <img className="blog-arr" src='./page10-arrw.png' alt='' />
              </div>
            </div>
            <div className="blog-des"><div className="para">First - party data in marketing - what you need to know ?</div>
              <div className="gotoblog-btn"><img src='./crossarrimg.png' /></div></div>
            <div className="blog-btn">DATA AND ANALYTICS</div>
          </div>
          <div className="page10-blog2">
            <img src='./blog2.png' className='blogimg' />
            <div className='expand-blog'>
              <div className="expand-content">
                <img src="./page10-insideimg.png" alt="" />
                <img className="blog-arr" src='./page10-arrw.png' alt='' />
              </div>
            </div>
            <div className="blog-des"><div className="para">The power of performance creative in modern marketing</div>
              <div className="gotoblog-btn"><img src='./crossarrimg.png' /></div></div>
            <div className="blog-btn" style={{ width: "310px" }}>STRAREGY AND CREATIVE</div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Home