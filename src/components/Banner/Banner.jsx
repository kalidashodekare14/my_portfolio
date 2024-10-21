'use client'
import { useEffect, useState } from 'react';
import { FaCss3, FaFacebook, FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaNode, FaReact, FaTwitter } from "react-icons/fa";
import Cursor from '../Cursor/Cursor';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';



const Banner = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        AOS.init({});
        setIsClient(true)

    }, [])

    return (
        <div id='home' className=' bg-[#0d0d0d] flex flex-col-reverse lg:flex-row justify-center items-center space-y-10 min-h-screen lg:px-32'>
            {
                isClient && !isMobile && <Cursor />
            }
            <div className='space-y-4 text-white'>
                <h6 data-aos="fade-right" data-aos-duration="1000" className='text-center lg:text-left'>🖐 Hi, I am <span className='text-[#02dde8]'>Kalidash Odekare</span></h6>
                <h1 data-aos="fade-right" data-aos-delay="1000" className='lg:text-5xl text-3xl text-center lg:text-left'>
                    <Typewriter
                        words={['Web Developer', 'Front End Developer']}
                        loop
                        cursor
                        cursorStyle='...'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={500}

                    />
                </h1>
                <p data-aos="fade-right" data-aos-delay="2000" className='lg:w-[60%] text-center lg:text-left'>I am a frontend developer, proficient in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, Node.js, and MongoDB. My goal is to create high quality web applications and improve user experience. In future, I would like to improve myself by learning new technologies and techniques in web development.</p>
                <div className='flex lg:justify-start justify-center items-center space-x-5 text-2xl'>
                    <a target='_blank' href="https://www.facebook.com/Shakti.Adhikari.68">
                        <FaFacebook data-aos="fade-up" data-aos-delay="2200" />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/developer-kalidash">
                        <FaLinkedin data-aos="fade-up" data-aos-delay="2500" />
                    </a>
                    <a target='_blank' href="https://github.com/kalidashodekare14">
                        <FaGithub data-aos="fade-up" data-aos-delay="2300" />
                    </a>
                </div>
                <div className='flex lg:justify-start justify-center items-center'>
                    <Link data-aos="fade-right" data-aos-delay="2600" download href="/dawnload.pdf">
                        <button className='btn bg-opacity-0 border text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1] mb-5'>Dawnload Resume</button>
                    </Link>
                </div>
            </div>
            <div className='relative '>
                <div data-aos="fade-up" data-aos-duration="1000" className='lg:w-96'>
                    <Image width={500} height={300} className='flashMove' src="/man.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;