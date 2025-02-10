'use client'
import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, } from "react-icons/fa";
import Cursor from '../Cursor/Cursor';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import image from '../../../public/img.png'




const Banner = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        AOS.init({
            once: true
        });
        setIsClient(true)

    }, [])

    return (
        <div id='home' className='bg-black dark:bg-white flex flex-row justify-center items-center space-y-10  py-20  lg:px-20'>
            <div className='lg:w-[60%] p-3  font-rubik space-y-4 text-white dark:text-black mt-10'>
                <h6 data-aos="fade-right" data-aos-duration="1000" className='lg:text-left font-rubik'>🖐 Hi, I am <span className='text-[#02dde8] font-rubik'>Kalidash Odekare</span></h6>
                <h1 data-aos="fade-right" data-aos-delay="1000" className='lg:text-4xl text-3xl lg:text-left'>
                    <Typewriter
                        words={['Web Developer', 'MERN Stack Developer', 'Frontend Developer ']}
                        loop
                        cursor
                        cursorStyle='...'
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={500}

                    />
                </h1>
                <p data-aos="fade-right" data-aos-delay="2000" className='lg:w-[70%]  lg:text-left font-rubik text-[#ffffffc0] dark:text-black'>I create websites with attractive and unique designs and functionalities.</p>
                <div className='flex lg:justify-start justify-left items-center space-x-5 text-2xl'>
                    <a target='_blank' href="https://www.facebook.com/developerKalidash">
                        <FaFacebook data-aos="fade-up" data-aos-delay="2200" />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/developer-kalidash">
                        <FaLinkedin data-aos="fade-up" data-aos-delay="2500" />
                    </a>
                    <a target='_blank' href="https://github.com/kalidashodekare14">
                        <FaGithub data-aos="fade-up" data-aos-delay="2300" />
                    </a>
                </div>
                <div className='flex lg:justify-start justify-left items-left'>
                    <Link data-aos="fade-right" data-aos-delay="2600" download href="/dawnload.pdf">
                        <button className='btn bg-opacity-0 border text-white dark:text-black  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black dark:hover:text-black border-[#07dde1] mb-5 font-rubik'>Dawnload Resume</button>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="2700" className='hidden lg:flex max-w-[35%] '>
                <Image className='shadowStyle  w-full border-2  border-[#02ddd9b4] hover:border-[#02ddd9] rounded-[50px] duration-300' src={image} width={500} height={300} alt='image' />
            </div>
        </div>
    );
};

export default Banner;