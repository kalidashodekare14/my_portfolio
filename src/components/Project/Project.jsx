import Image from 'next/image';
import React from 'react';
import { FaEye, FaGithub, FaLink, FaNode, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Project.css'
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";


const Project = () => {
    
    return (
        <section id='projects' className='bg-[#0d0d0d] min-h-screen lg:px-32 font-rubik'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white'>Latest Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                <div>
                    <div className="main-project">
                        <div className='rounded-2xl flex flex-col justify-center items-center relative group'>
                            <div className='relative h-[350px] w-full rounded-2xl overflow-hidden'>
                                <Image className='h-[350px] w-full rounded-2xl group-hover:scale-110 duration-300' width={500} height={300} src="/project/project1.png" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

                            </div>
                            <div className='absolute bottom-9 bg-opacity-60  projectName opacity-1 group-hover:opacity-0 duration-300'>
                                <h1 className='text-white text-2xl'>EasyStore (Ecommerce Project)</h1>
                                <p className='text-white'>Fast, secure, hassle-free shopping.</p>
                            </div>
                            <div className='absolute top-5 bg-opacity-60  projectName opacity-0 group-hover:opacity-100 duration-300'>
                                <div className='flex items-center text-3xl gap-5'>
                                    <Link target='_blank' href={'https://easystore-9fd6e.web.app'}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <FaLink />
                                            </div>
                                            <p className='text-[18px] text-white'>live link</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={"https://github.com/kalidashodekare14/easyStore-Client"}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <FaGithub />
                                            </div>
                                            <p className='text-[18px] text-white'>client</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={"https://github.com/kalidashodekare14/easyStore-Server"}>
                                        <div>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <BsGithub />
                                            </div>
                                            <p className='text-[18px] text-white'>server</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='absolute bottom-5 left-5 bg-opacity-60  opacity-0 group-hover:opacity-100  duration-300 group-hover:duration-300 translate-y-5 group-hover:translate-y-0'>
                                <div className='flex flex-wrap gap-2'>
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
                <div>
                    <div className="main-project">
                        <div className='rounded-2xl flex flex-col justify-center items-center relative group'>
                            <div className='relative h-[350px] w-full rounded-2xl overflow-hidden'>
                                <Image className='h-[350px] w-full rounded-2xl group-hover:scale-110 duration-300' width={500} height={300} src="/project/project3.png" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

                            </div>
                            <div className='absolute bottom-9 bg-opacity-60  projectName opacity-1 group-hover:opacity-0 duration-300'>
                                <h1 className='text-white text-2xl'>QuickShop (Ecommerce Project)</h1>
                                <p className='text-white'>Fast, secure, hassle-free shopping.</p>
                            </div>
                            <div className='absolute top-5 bg-opacity-60  projectName opacity-0 group-hover:opacity-100 duration-300'>
                                <div className='flex items-center text-3xl gap-5'>
                                    <Link target='_blank' href={'https://quickshop-4fa4e.web.app'}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <FaLink />
                                            </div>
                                            <p className='text-[18px] text-white'>live link</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={"https://github.com/kalidashodekare14/QuickShop-Client"}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <FaGithub />
                                            </div>
                                            <p className='text-[18px] text-white'>client</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={"https://github.com/kalidashodekare14/QuickShop-Server"}>
                                        <div>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <BsGithub />
                                            </div>
                                            <p className='text-[18px] text-white'>server</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='absolute bottom-5 left-5 bg-opacity-60  opacity-0 group-hover:opacity-100  duration-300 group-hover:duration-300 translate-y-5 group-hover:translate-y-0'>
                                <div className='flex flex-wrap gap-2'>
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
                <div>
                    <div className="main-project">
                        <div className='rounded-2xl flex flex-col justify-center items-center relative group'>
                            <div className='relative h-[350px] w-full rounded-2xl overflow-hidden'>
                                <Image className='h-[350px] w-full rounded-2xl group-hover:scale-110 duration-300' width={500} height={300} src="/project/project2.png" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

                            </div>
                            <div className='absolute bottom-9 bg-opacity-60  projectName opacity-1 group-hover:opacity-0 duration-300'>
                                <h1 className='text-white text-2xl'>Precision Medical Camp</h1>
                                <p className='text-white'>Accessible, Specialized Community Healthcare.</p>
                            </div>
                            <div className='absolute top-5 bg-opacity-60  projectName opacity-0 group-hover:opacity-100 duration-300'>
                                <div className='flex items-center text-3xl gap-5'>
                                    <Link target='_blank' href={"https://precision-medical-camp.web.app"}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <FaLink />
                                            </div>
                                            <p className='text-[18px] text-white'>live link</p>
                                        </div>
                                    </Link>

                                    <Link target='_blank' href={"https://github.com/kalidashodekare14/precision-medical-camp"}>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <FaGithub />
                                            </div>
                                            <p className='text-[18px] text-white'>client</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={"https://github.com/kalidashodekare14/precision-medical-camp-server"}>
                                        <div>
                                            <div className='border w-12 p-2 bg-white rounded-full cursor-pointer'>
                                                <BsGithub />
                                            </div>
                                            <p className='text-[18px] text-white'>server</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='absolute bottom-5 left-5 bg-opacity-60  opacity-0 group-hover:opacity-100  duration-300 group-hover:duration-300 translate-y-5 group-hover:translate-y-0'>
                                <div className='flex flex-wrap gap-2'>
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