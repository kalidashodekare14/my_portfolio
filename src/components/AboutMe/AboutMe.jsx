'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../../public/img.png'

const AboutMe = () => {


    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])


    return (
        <section id='about' className='relative  bg-[#110f17] dark:bg-white min-h-screen py-5 pt-20'>
            <div className='z-10 absolute -left-10 -top-10 w-[30rem] h-[30rem] bg-[#02dde8] rounded-full opacity-20 blur-3xl'></div>
            <div className='z-10 absolute -right-10 -bottom-10 w-[30rem] h-[30rem] bg-[#02dde8] rounded-full opacity-20 blur-3xl'></div>
            <div className='z-20 lg:mx-32 lg:my-10 flex flex-col lg:flex-row justify-between items-center lg:space-x-10 space-y-3'>
                <div data-aos="fade-right" data-aos-delay="1000" className='z-20 lg:w-[40%] mx-5 text-white'>
                    <Image className=' w-full border-2  border-[#02ddd9b4] hover:border-[#02ddd9] rounded-[50px] duration-300' src={image} width={500} height={300} alt='image' />
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" className='z-20 mx-3 lg:w-[50%]  text-white dark:text-black space-y-5 font-rubik'>
                    <h1 className=' text-4xl text-white dark:text-black'>About Me</h1>
                    <h2 className='text-2xl text-[#02dde8] dark:text-black'>MERN Stack and Frontend Developer</h2>
                    <p data-aos="fade-right" data-aos-delay="1000" className='text-[#ffffff9f] dark:text-black'>I am a MERN Stack and Frontend Developer with expertise in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, Node.js, and MongoDB. My goal is to develop high-quality web applications and enhance user experiences. I aspire to become a skilled full-stack developer in the future and explore cutting-edge technologies.</p>
                    <button data-aos="fade-right" data-aos-delay="1000" className='btn border text-white dark:text-black border-[#07dde1] bg-opacity-0'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;