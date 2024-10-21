'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {


    useEffect(() => {
        AOS.init({});
    }, [])


    return (
        <section id='about' className=' bg-[#110f17] min-h-screen py-5'>
            {/* <div data-aos="fade-up" data-aos-duration="1000" className='text-center'>
                <h1 className='text-center text-2xl text-white'>About Me</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div> */}
            <div className='lg:mx-32 lg:my-10 flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-3'>
                <div data-aos="fade-right" data-aos-delay="1000" className='lg:w-[30%] mx-5 text-white'>
                    <Image width={500} height={300}  className='lg:w-full rounded-lg' src="/man2.png" alt="" />
                </div>
                <div data-aos="fade-right" data-aos-delay="1000" className='mx-3 lg:w-[50%]  text-white space-y-5'>
                    <h1 className=' text-4xl text-white'>About Me</h1>
                    <h2 className='text-2xl'>Front End Developer</h2>
                    <p data-aos="fade-right" data-aos-delay="1000" className=''>I am a passionate and dedicated front-end developer with expertise in HTML, CSS, JavaScript, React, Tailwind CSS and Next.JS. I am experienced in back-end development using Node.js, Express, and MongoDB. My focus is to create engaging, responsive, and user-friendly web applications. With a keen eye for design and a commitment to writing clean, maintainable code, I strive to provide high-quality solutions that enhance user experience.</p>
                    <button data-aos="fade-right" data-aos-delay="1000" className='btn border text-white border-[#07dde1] bg-opacity-0'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;