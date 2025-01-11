"use client"
import Image from 'next/image';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Link } from 'react-scroll'


const Navbar = () => {

    const links = <>
        <li className='font-rubik'>
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                className={'text-white'}>
                Home
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                duration={500}
                className={'text-white'}>
                About Me
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                className='text-white'>
                My Skills
            </Link>
        </li>
        <li className='font-rubik'>
            <Link to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                className='text-white'>
                Education
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                className='text-white'>
                Projects
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                className='text-white'>
                Contact Us
            </Link>
        </li>

    </>

    return (
        <nav className="navbar z-50 fixed bg-[#0d0d0d] lg:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm bg-[#0d0d0d] dropdown-content mt-3 z-[1] p-2 shadow border rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white text-xl font-rubik">
                    <Image width={500} height={300} className='w-10' src="/logo.png" alt="" />
                    Dev Kalidash
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end font-rubik">
                <Link to='contact'>
                <button className='btn bg-opacity-0 border text-white  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1] mb-5 rounded-none'>Hire Me</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;