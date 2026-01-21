import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#0d0d0d] dark:bg-white lg:px-32 lg:p-10 space-y-20'>
            <div className='space-y-5 text-center lg:w-[500px] m-auto'>
                <div className='flex justify-center gap-3 flex-row items-center text-white dark:text-black'>
                    <Image className='w-20' src="/logo.png" width={500} height={300} alt="" />
                    <h1 className='text-2xl'>Dev Kalidash</h1>
                </div>
                <p className='text-white dark:text-black'>Experienced MERN Stack and Frontend Developer Proficient in creating responsive web interfaces and optimizing user experiences.</p>
                <div className='space-y-3'>
                    <h2 className='text-white dark:text-black text-xl'>Follow Me</h2>
                    <div className='flex  space-x-5 justify-center text-white dark:text-black items-center text-xl'>
                        <Link target='_blank' href="https://www.linkedin.com/in/kalidash-odekare-webdev">
                            <FaLinkedin />
                        </Link>
                        <Link target='_blank' href="https://github.com/kalidashodekare14">
                            <FaGithubAlt />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center border-t lg:py-10'>
                <div className='text-white dark:text-black'>
                    <h4>Portfolio- &copy;2023 All Rights Reserved</h4>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white dark:text-black lg:space-x-3'>
                    <Link to="home">
                        <p className='mb-3'>Home</p>
                    </Link>
                    <Link to="about">
                        <p className='mb-3'>About Me</p>
                    </Link>
                    <Link to="skills">
                        <p className='mb-3'>Skill</p>
                    </Link>
                    <Link to="education">
                        <p className='mb-3'>Portfolio</p>
                    </Link>
                    <Link to="projects">
                        <p className='mb-3'>Projects</p>
                    </Link>
                    <Link to="contact">
                        <p className='mb-3'>Contact Us</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;