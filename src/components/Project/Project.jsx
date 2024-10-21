import Image from 'next/image';
import React from 'react';
import { FaEye, FaGithub, FaNode, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Project.css'
import Link from 'next/link';


const Project = () => {
    return (
        <section id='projects' className='bg-[#0d0d0d] min-h-screen lg:px-20'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white'>Latest Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                <div>
                    <div className="main-project">
                        <div className='rounded-2xl flex flex-col items-center relative group'>
                            <div className='relative h-[350px] w-full rounded-2xl overflow-hidden'>
                                <Image className='h-[350px] w-full rounded-2xl group-hover:scale-110 duration-300' width={500} height={300} src="/project/project1.png" alt="" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

                            </div>
                            <div className='absolute bottom-9 bg-opacity-60  projectName opacity-1 group-hover:opacity-0 duration-300'>
                                <h1 className='text-white text-2xl'>EasyStore (Ecommerce Project)</h1>
                                <p className='text-white'>Fast, secure, hassle-free shopping.</p>
                            </div>
                            <div className='absolute bottom-5 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-transform translate-y-10 duration-500 ease-in-out group-hover:translate-y-0'>
                                <div className='grid grid-cols-4 gap-2'>
                                    <div className='text-white bg-[#7e7c7c91] px-1 py-1 rounded-3xl'>
                                        <h1>react.js</h1>
                                    </div>
                                    <div className='text-white bg-[#7e7c7c91] px-1 py-1 rounded-3xl'>
                                        <h1>node.js</h1>
                                    </div>
                                    <div className='text-white bg-[#7e7c7c91] px-1 py-1 rounded-3xl'>
                                        <h1>express.js</h1>
                                    </div>
                                    <div className='text-white bg-[#7e7c7c91] px-1 py-1 rounded-3xl'>
                                        <h1>mongodb</h1>
                                    </div>
                                    <div className='text-white bg-[#7e7c7c91] px-1 py-1 rounded-3xl'>
                                        <h1>react.js</h1>
                                    </div>
                                    <div className='text-white bg-[#7e7c7c91] px-1 py-1 rounded-3xl'>
                                        <h1>tailwind css</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Project;