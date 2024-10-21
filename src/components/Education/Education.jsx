'use client'
import React, { useEffect } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {

    useEffect(() => {
        AOS.init({});
    }, [])


    return (
        <div id='education' className='lg:h-[110vh]  bg-[#110f17]'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-white text-center text-4xl pt-10 '>Education</h1>
                <div className='border-2 border-[#07dde1] w-32 m-auto'></div>
            </div>
            <div>
                <div className='flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-5 mt-20 mb-5 '>
                    <div data-aos="fade-right" data-aos-delay="1000" className='hover:bg-[#07dde12d] mx-3 duration-500 transition text-white border border-[#02bfe2] lg:w-[40%]  p-5 space-y-3 rounded-lg'>
                        <p className='flex items-center space-x-2'>
                            <span>
                                <MdOutlineDateRange className='text-[#02bfe2]' />
                            </span>
                            <span className='text-[#ffffff6a]'>2023-2024</span>
                        </p>
                        <h1 className='font-bold text-xl text-[#02bfe2]'>Secondary (X)</h1>
                        <p className='text-[16px] text-[#ffffff6a]'>Completed SSC from B.K High School, Dinajpur, in 2022 with a GPA of 3.63. Actively participated in debate team and science club activities.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2000" className='hover:bg-[#07dde12d] mx-3 duration-500 transition text-white border border-[#02bfe2] lg:w-[40%] p-5 space-y-3 rounded-lg'>
                        <p className='flex items-center space-x-2'>
                            <span>
                                <MdOutlineDateRange className='text-[#02bfe2]' />
                            </span>
                            <span className='text-[#ffffff6a]'>2023-Present</span>
                        </p>
                        <h1 className='font-bold text-xl text-[#02bfe2]'>Senior Secondary (XII)</h1>
                        <p className='text-[16px] text-[#ffffff6a]'>Currently pursuing Senior Secondary (XII) at Goreya Degree College under Dinajpur, with a focus on Humanities. Expected to complete in 2025</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div data-aos="fade-right" data-aos-delay="2200" className='hover:bg-[#07dde12d] mx-3 duration-500 transition text-white border border-[#02bfe2] lg:w-[40%] p-5 space-y-3 rounded-lg'>
                    <p className='flex items-center space-x-2'>
                        <span>
                            <MdOutlineDateRange className='text-[#02bfe2]' />
                        </span>
                        <span className='text-[#ffffff6a]'>2023-Present</span>
                    </p>
                    <h1 className='font-bold text-[#02bfe2] text-xl'>Web Development Course</h1>
                    <h5 className='text-[#ffffff6a]'>Institution: Programming-hero</h5>
                    <p className='text-[16px] text-[#ffffff6a]'>Completing a comprehensive web development course covering HTML, CSS, JavaScript and various web development frameworks. Gaining hands-on experience through multiple projects and practical assignments.</p>
                </div>
            </div>
        </div>
    );
};

export default Education;