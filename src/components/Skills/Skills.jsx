'use client'
import React, { useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar"
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';
import { FaCss3, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";


const Skills = () => {

    useEffect(() => {
        AOS.init({});
    }, [])


    return (
        <section id='skills' className='bg-[#0d0d0d] lg:min-h-screen pt-5 pb-10'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-white text-center text-4xl pt-10 '>My Skills</h1>
                <div className='border-2 border-[#07dde1] w-32 m-auto'></div>
            </div>
            <div className='space-y-24'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-20 gap-5 lg:mx-32 mx-3 my-10 mb-10'>
                    <div data-aos="fade-up" data-aos-delay="1000" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:scale-y-105 hover:text-[#f74a1d] text-6xl hover:text-7xl transition-all duration-200 text-[#fda5a591] items-center lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <FaHtml5 className=''></FaHtml5>
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Html</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2000" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#0068ba] text-6xl hover:scale-y-105 hover:text-7xl transition-all duration-200 text-[#6b8ba4b0] items-center lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <FaCss3 className=' '></FaCss3>
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Css</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2200" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#efd81d] hover:scale-y-105 text-6xl hover:text-7xl transition-all duration-200 text-[#b9b289] items-center lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <IoLogoJavascript className='' />
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Javascript</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2300" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#00d1f7] text-6xl hover:text-7xl hover:scale-y-105 transition-all duration-200 text-[#90c6cf] items-center lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <FaReact className=''></FaReact>
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>React</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2400" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#39abab] hover:scale-y-105 text-6xl hover:text-7xl transition-all duration-200 text-[#9fc8cf] items-center lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <RiTailwindCssFill className='' />
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Tailwind css</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2400" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#303e3e]  hover:scale-y-105 text-6xl hover:text-7xl transition-all duration-200 text-[#9fc8cf] items-center lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <RiNextjsFill className='' />
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Tailwind css</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2500" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#70a661] hover:scale-y-105 text-6xl hover:text-7xl transition-all duration-200 text-[#9fc8cf] items-center  lg:w-40 lg:h-[25vh] h-[30vh] rounded-3xl border border-[#07dde1]'>
                            <FaNode className=''></FaNode>
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Node js</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2600" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#70a661] hover:scale-y-105 text-6xl hover:text-7xl transition-all duration-200 text-[#9fc8cf] items-center  lg:w-40 lg:h-[25vh] h-[30vh]   rounded-3xl border border-[#07dde1]'>
                            <SiExpress className=' bg-white rounded-full text-black p-1' />
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Express js</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2700" className='lg:w-40 w-full h-full lg:h-[25vh]'>
                        <div className='flex justify-center hover:text-[#4ca13c] hover:scale-y-105 text-6xl hover:text-7xl transition-all duration-200 text-[#9fc8cf] items-center  lg:w-40 lg:h-[25vh] h-[30vh]  rounded-3xl border border-[#07dde1]'>
                            <SiMongodb className=''></SiMongodb>
                        </div>
                        <h1 className='text-center my-5 uppercase text-[#07dde1] text-xl'>Mongodb</h1>
                    </div>
                </div>
                {/* <div className='grid grid-cols-2 md:grid-cols-3 place-content-end gap-5  lg:mx-32 mx-3 lg:grid-cols-5'>
                    
                </div> */}
            </div>
        </section>
    );
};

export default Skills;