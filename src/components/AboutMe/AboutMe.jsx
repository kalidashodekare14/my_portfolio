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
        <section id='about' className='overflow-hidden relative  bg-[#110f17] dark:bg-white min-h-screen py-5 pt-20'>
            <div className='z-10 absolute -left-10 -top-10 w-[30rem] h-[30rem] bg-[#02dde8] rounded-full opacity-20 blur-3xl'></div>
            <div className='z-10 absolute -right-10 -bottom-10 w-[30rem] h-[30rem] bg-[#02dde8] rounded-full opacity-20 blur-3xl'></div>
            <div className='z-20 lg:mx-32 lg:my-10 flex flex-col lg:flex-row justify-between items-center lg:space-x-10 space-y-3'>
                <div data-aos="fade-right" data-aos-delay="1000" className='z-20 lg:w-[40%] mx-5 text-white'>
                    <Image className=' w-full border-2  border-[#02ddd9b4] hover:border-[#02ddd9] rounded-[50px] duration-300' src={image} width={500} height={300} alt='image' />
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" className='z-20 mx-3 lg:w-[50%]  text-white dark:text-black space-y-5 font-rubik'>
                    <h1 className=' text-4xl text-white dark:text-black'>About Me</h1>
                    <h2 className='text-2xl text-[#02dde8] dark:text-black'>Frontend Developer</h2>
                    <p data-aos="fade-right" data-aos-delay="1000" className='text-[#ffffff9f] dark:text-black'>I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS, with a strong focus on building user-friendly, responsive, and high-performance web applications. I also have hands-on experience with backend technologies such as Node.js, Express.js, and MongoDB, enabling me to contribute effectively to MERN stack development when required. I enjoy transforming UI/UX designs into clean, scalable, and maintainable code while following best practices. I am continuously learning modern web technologies and improving my problem-solving skills. I work well in collaborative team environments, value clean code and clear communication, and aim to grow into a proficient Full Stack Developer within the next five years.</p>
                    {/* <p data-aos="fade-right" data-aos-delay="1000" className='text-[#ffffff9f] dark:text-black'>I am a Frontend Developer skilled in React.js, Next.js, and Tailwind CSS. Additionally, I have experience with backend technologies such as Node.js, Express.js, and MongoDB, which enables me to work on MERN Stack Development when needed. I build user-friendly and responsive web applications. I am continuously learning new technologies and striving to improve my skills. I enjoy working in a team environment and aim to become a proficient Full Stack Developer within the next five years.</p> */}
                    {/* <button data-aos="fade-right" data-aos-delay="1000" className='btn border text-white dark:text-black border-[#07dde1] bg-opacity-0'>Read More</button> */}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;