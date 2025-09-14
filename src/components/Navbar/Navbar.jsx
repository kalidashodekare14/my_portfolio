"use client"
import Image from 'next/image';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { Link } from 'react-scroll'


const Navbar = () => {


    const [isTheme, setIsTheme] = useState('dark')

    console.log('checking theme', isTheme)

    useEffect(() => {
        const shortedTheme = localStorage.getItem('theme')
        if (shortedTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setIsTheme('light')
        }
    }, [isTheme])


    const handleThemeToggle = () => {
        const newTheme = isTheme === 'dark' ? 'light' : 'dark'
        setIsTheme(newTheme)
        if (isTheme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', newTheme)
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', newTheme)
        }
    }



    const links = <>
        <li className='font-rubik'>
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#02dde8] border-[#02dde8] rounded-none"
                className={'text-white dark:text-black'}>
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
                className={'text-white dark:text-black'}>
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
                className={'text-white dark:text-black'}>
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
                className={'text-white dark:text-black'}>
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
                className={'text-white dark:text-black'}>
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
                className={'text-white dark:text-black'}>
                Contact Us
            </Link>
        </li>

    </>


    return (
        <nav className="navbar z-50 fixed bg-[#0d0d0d] dark:bg-white dark:text-black lg:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm bg-[#0d0d0d]  dropdown-content mt-3 z-[1] p-2 shadow border rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white  dark:text-black text-xl font-rubik">
                    <Image width={500} height={300} className='w-14' src="/logo.png" alt="" />
                    <span className='lg:flex hidden '>Dev Kalidash</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end font-rubik flex items-center gap-3">
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            checked={isTheme === 'dark'}
                            onClick={handleThemeToggle}
                            readOnly
                            className="theme-controller text-white" value="synthwave" />
                        {/* sun icon */}
                        <MdSunny
                            className="text-white dark:text-[#ffa700]  swap-on h-10 w-10 fill-current"
                        />

                        {/* moon icon */}
                        <MdDarkMode
                            className="text-white dark:text-black swap-off h-10 w-10 fill-current"
                        />
                    </label>
                </div>
                <Link to='contact'>
                    <button className='btn bg-opacity-0 border text-white  hover:bg-[#07dde1] dark:text-black hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1] mb-5 mt-1  rounded-none'>Hire Me</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;