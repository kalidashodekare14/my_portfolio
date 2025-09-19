'use client'
import React, { useEffect } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])


    return (
        <div id='education' className='lg:h-[110vh]  bg-[#110f17] dark:bg-white font-rubik px-32'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-white dark:text-black text-center text-4xl pt-10 '>Education</h1>
                <div className='border-2 border-[#07dde1] w-32 m-auto'></div>
            </div>
            {/* <div>
                <div className='flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-5 mt-20 mb-5 '>
                    <div data-aos="fade-right" data-aos-delay="1000" className='hover:bg-[#07dde12d] mx-3 duration-500 transition text-white dark:text-black border border-[#02bfe2] lg:w-[40%]  p-5 space-y-3 rounded-lg'>
                        <p className='flex items-center space-x-2'>
                            <span>
                                <MdOutlineDateRange className='text-[#02bfe2]' />
                            </span>
                            <span className='text-[#ffffff9f] dark:text-black'>2023-2024</span>
                        </p>
                        <h1 className='font-bold text-xl text-[#02bfe2] '>Secondary (X)</h1>
                        <p className='text-[16px] text-[#ffffff9f] dark:text-black'>Completed SSC from B.K High School, Dinajpur, in 2022 with a GPA of 3.63. Actively participated in debate team and science club activities.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2000" className='hover:bg-[#07dde12d] mx-3 duration-500 transition text-white border border-[#02bfe2] lg:w-[40%] p-5 space-y-3 rounded-lg'>
                        <p className='flex items-center space-x-2'>
                            <span>
                                <MdOutlineDateRange className='text-[#02bfe2]' />
                            </span>
                            <span className='text-[#ffffff9f] dark:text-black'>2023-Present</span>
                        </p>
                        <h1 className='font-bold text-xl text-[#02bfe2]'>Senior Secondary (XII)</h1>
                        <p className='text-[16px] text-[#ffffff9f] dark:text-black'>Currently pursuing Senior Secondary (XII) at Goreya Degree College under Dinajpur, with a focus on Humanities. Expected to complete in 2025</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div data-aos="fade-right" data-aos-delay="2200" className='hover:bg-[#07dde12d] mx-3 duration-500 transition text-white border border-[#02bfe2] lg:w-[40%] p-5 space-y-3 rounded-lg'>
                    <p className='flex items-center space-x-2'>
                        <span>
                            <MdOutlineDateRange className='text-[#02bfe2]' />
                        </span>
                        <span className='text-[#ffffff9f] dark:text-black'>2023-Present</span>
                    </p>
                    <h1 className='font-bold text-[#02bfe2] text-xl'>Web Development Course</h1>
                    <h5 className='text-[#ffffff9f] dark:text-black'>Institution: Programming-hero</h5>
                    <p className='text-[16px] text-[#ffffff9f] dark:text-black'>Completing a comprehensive web development course covering HTML, CSS, JavaScript and various web development frameworks. Gaining hands-on experience through multiple projects and practical assignments.</p>
                </div>
            </div> */}
            <ul className="my-10 text-white timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li data-aos="fade-right" data-aos-delay="1000">
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic text-[#ffffff9f] dark:text-black">2023-2024</time>
                        <div className="text-lg font-black text-[#02bfe2]">Secondary (X)</div>
                        <span className='text-[#ffffff9f] dark:text-black'>Completed SSC from B.K High School, Dinajpur, in 2022 with a GPA of 3.63. Actively participated in debate team and science club activities.</span>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-left" data-aos-delay="2000">
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic text-[#ffffff9f] dark:text-black">2023-Present</time>
                        <div className="text-lg font-black text-[#02bfe2]">Senior Secondary (XII)</div>
                        <span className='text-[#ffffff9f] dark:text-black'>Currently pursuing Senior Secondary (XII) at Goreya Degree College under Dinajpur, with a focus on Humanities. Expected to complete in 2025</span>
                    </div>
                    <hr />
                </li>
                <li data-aos="fade-right" data-aos-delay="2200">
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic text-[#ffffff9f] dark:text-black">2023-Present</time>
                        <div className="text-lg font-black text-[#02bfe2]">Web Development Course</div>
                        <div className='text-[#ffffff9f] dark:text-black'>Institution: Programming-hero</div>
                        <span className='text-[#ffffff9f] dark:text-black'>Completing a comprehensive web development course covering HTML, CSS, JavaScript and various web development frameworks. Gaining hands-on experience through multiple projects and practical assignments.</span>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Education;