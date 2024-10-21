import React from 'react';
import { FaFacebook, FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#0d0d0d] lg:px-32 lg:p-10 space-y-20'>
            <div className='space-y-5 text-center lg:w-[500px] m-auto'>
                <div className='flex justify-center flex-row items-center text-white'>
                    <img className='w-20' src="/logo.png" alt="" />
                    <h1 className='text-2xl'>Code Crux</h1>
                </div>
                <p className='text-white'>Experienced Front-End Developer Proficient in creating responsive web interfaces and optimizing user experiences.</p>
                <div className='space-y-3'>
                    <h2 className='text-white'>Follow Me</h2>
                    <div className='flex  space-x-5 justify-center text-white items-center'>
                        <a target='_blank' href="https://www.facebook.com/Shakti.Adhikari.68">
                            <FaFacebook />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/developer-kalidash">
                            <FaLinkedin />
                        </a>
                        <a target='_blank' href="https://github.com/kalidashodekare14">
                            <FaGithubAlt />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center border-t lg:py-10'>
                <div className='text-white'>
                    <h4>Portfolio- &copy;2023 All Rights Reserved</h4>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white lg:space-x-3'>
                    <p className='mb-3'>Home</p>
                    <p className='mb-3'>About Me</p>
                    <p className='mb-3'>Skill</p>
                    <p className='mb-3'>Portfolio</p>
                    <p className='mb-3'>Projects</p>
                    <p className='mb-3'>Contact Us</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;