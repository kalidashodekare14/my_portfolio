import Image from 'next/image';
import React from 'react';
import { FaEye, FaGithub, FaLink, FaNode, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Project.css'
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import project1 from '../../../public/project/healthcare.png'
import project2 from '../../../public/project/easystore.png'
import project3 from '../../../public/project/precision.png'


const Project = () => {



    return (
        <section id='projects' className='bg-[#0d0d0d] min-h-screen lg:px-20 font-rubik'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white'>Latest Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                <div className='border text-white'>
                    <div className='h-60'>
                        <Image className='w-full h-full' src={project1} width={500} height={300} alt='HealthCare' />
                    </div>
                    <div className='space-y-3 p-3 font-rubik'>
                        <div className='space-y-3'>
                            <h1 className='text-3xl text-[#02bfe2]'>HealthCare</h1>
                            <p className='text-[#ffffff9f]'>The Healthcare project is designed for patients. Here, you can easily book doctor appointments online without any hassle, make payments if required, and receive doctor consultations and treatments. Patients can view their booked appointments, and there is a dashboard that the admin can control.</p>
                            <p className='text-[#ffffff9f]'>Technology: Next.js, Tailwind CSS, NextAuth.js, MongoDB, Next.js API Routes</p>
                        </div>
                        <div className='space-x-2'>
                            {/* <button className='btn bg-opacity-0  mb-5 font-rubik'>Dawnload Resume</button> */}
                            <Link href={'https://health-care14.vercel.app'} target='_blank'>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaLink />
                                    Live Link
                                </button>
                            </Link>
                            <Link href={"https://github.com/kalidashodekare14/HealthCare"} target='_blank'>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaGithub />
                                    Client
                                </button>
                            </Link>
                            <Link href={""}>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaGithub />
                                    Server
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border text-white'>
                    <div className='h-60'>
                        <Image className='w-full h-full' src={project2} width={500} height={300} alt='HealthCare' />
                    </div>
                    <div className='space-y-3 p-3 font-rubik'>
                        <div className='space-y-3'>
                            <h1 className='text-3xl text-[#02bfe2]'>EasyStore</h1>
                            <p className='text-[#ffffff9f]'>EasyStore is an eCommerce platform focused on grocery products. It allows users to filter products for convenient shopping and make secure payments through SSLCOMMERZ, a trusted payment gateway. Users can track their payment status, and the platform includes a dashboard that the admin can manage.</p>
                            <p className='text-[#ffffff9f]'>Technology: React.js, Tailwind CSS, Node.js, Express.js, MongoDB</p>
                        </div>
                        <div className='space-x-2'>
                            {/* <button className='btn bg-opacity-0  mb-5 font-rubik'>Dawnload Resume</button> */}
                            <Link href={'https://easystore-9fd6e.web.app'} target='_blank'>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaLink />
                                    Live Link
                                </button>
                            </Link>
                            <Link href={"https://github.com/kalidashodekare14/easyStore-Client"} target='_blank'>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaGithub />
                                    Client
                                </button>
                            </Link>
                            <Link href={"https://github.com/kalidashodekare14/easyStore-Server"}>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaGithub />
                                    Server
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border text-white'>
                    <div className='h-60'>
                        <Image className='w-full h-full' src={project3} width={500} height={300} alt='HealthCare' />
                    </div>
                    <div className='space-y-3 p-3 font-rubik'>
                        <div className='space-y-3'>
                            <h1 className='text-3xl text-[#02bfe2]'> Precision Medical Camp</h1>
                            <p className='text-[#ffffff9f]'>The Medical Management Camp is designed for patients. Patients can join the camp based on their specific health issues and receive treatment. The platform includes a dashboard where they can manage their camp activities and make payments.</p>
                            <p className='text-[#ffffff9f]'>Technology: React.js, Tailwind CSS, Node.js, Express.js, MongoDB</p>
                        </div>
                        <div className='space-x-2'>
                            {/* <button className='btn bg-opacity-0  mb-5 font-rubik'>Dawnload Resume</button> */}
                            <Link href={'https://precision-medical-camp.web.app'} target='_blank'>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaLink />
                                    Live Link
                                </button>
                            </Link>
                            <Link href={"https://github.com/kalidashodekare14/precision-medical-camp"} target='_blank'>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaGithub />
                                    Client
                                </button>
                            </Link>
                            <Link href={"https://github.com/kalidashodekare14/precision-medical-camp-server"}>
                                <button className='btn rounded-none border bg-black text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                    <FaGithub />
                                    Server
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;