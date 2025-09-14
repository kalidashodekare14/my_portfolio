import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import './Project.css'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../../../public/project/healthcare.png'
import project2 from '../../../public/project/easystore.png'
import project3 from '../../../public/project/precision.png'


const Project = () => {

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    const projectInfo = [
        {
            id: 1,
            image: "https://i.ibb.co.com/LzGY4grH/d.png",
            projectName: "BookZoneBD",
            description: "BookZoneBD is a MERN Stack project where book readers can easily browse, search, filter, add to cart, and order books. It features role-based authentication secured via JWT and Firebase.",
            technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            liveLink: "https://health-care14.vercel.app",
            githubClientLink: "https://github.com/kalidashodekare14/HealthCare",
            githubServerLink: ""

        },
        {
            id: 2,
            image: "https://i.ibb.co.com/VY18LJvS/healthcare.png",
            projectName: "HealthCare",
            description: "The Healthcare project is designed for patients. Here, you can easily book doctor appointments online without any hassle, make payments if required, and receive doctor consultations and treatments. Patients can view their booked appointments, and there is a dashboard that the admin can control.",
            technologies: ["Next.js", "Tailwind CSS", "NextAuth.js", "MongoDB", "Next.js API Routes"],
            liveLink: "https://health-care14.vercel.app",
            githubClientLink: "https://github.com/kalidashodekare14/HealthCare",
            githubServerLink: ""

        },
        {
            id: 3,
            image: "https://i.ibb.co.com/Q71VRndZ/easystore.png",
            projectName: "EasyStore",
            description: "EasyStore is an eCommerce platform focused on grocery products. It allows users to filter products for convenient shopping and make secure payments through SSLCOMMERZ, a trusted payment gateway. Users can track their payment status, and the platform includes a dashboard that the admin can manage.",
            technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            liveLink: "https://easystore-9fd6e.web.app",
            githubClientLink: "https://github.com/kalidashodekare14/easyStore-Client",
            githubServerLink: "https://github.com/kalidashodekare14/easyStore-Server"

        },
        {
            id: 4,
            image: "https://i.ibb.co.com/ch7MbRJn/precision.png",
            projectName: "Precision Medical Camp",
            description: "The Medical Management Camp is designed for patients. Patients can join the camp based on their specific health issues and receive treatment. The platform includes a dashboard where they can manage their camp activities and make payments.",
            technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            liveLink: "https://precision-medical-camp.web.app",
            githubClientLink: "https://github.com/kalidashodekare14/precision-medical-camp",
            githubServerLink: "https://github.com/kalidashodekare14/precision-medical-camp-server"

        },
    ]

    return (
        <section id='projects' className='bg-[#0d0d0d] dark:bg-white min-h-screen lg:px-20 font-rubik'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white dark:text-black'>Latest Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5'>
                {
                    projectInfo.map(project => (
                        <div key={project.id} data-aos="fade-up" data-aos-delay="1000" className=' border text-white dark:text-black'>
                            <div className='h-60'>
                                <Image className='w-full h-full' src={project.image} width={500} height={300} alt='HealthCare' />
                            </div>
                            <div className='space-y-3 p-3 font-rubik'>
                                <div className='space-y-3'>
                                    <h1 className='text-3xl text-[#02bfe2]'>{project.projectName}</h1>
                                    <p className='text-[#ffffff9f] dark:text-black'>{project.description}</p>
                                    <p className='text-[#ffffff9f] dark:text-black'>Technology: {project?.technologies.map((skill, index) => (
                                        <span key={index}>{skill}</span>
                                    ))}</p>
                                </div>
                                <div className='space-x-2'>
                                    {/* <button className='btn bg-opacity-0  mb-5 font-rubik'>Dawnload Resume</button> */}
                                    <Link href={project.liveLink} target='_blank'>
                                        <button className='btn rounded-none border bg-black dark:bg-white dark:hover:bg-[#07dde1] text-white dark:text-black  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                            <FaLink />
                                            Live Link
                                        </button>
                                    </Link>
                                    <Link href={project.githubClientLink} target='_blank'>
                                        <button className='btn rounded-none border bg-black dark:bg-white dark:hover:bg-[#07dde1] text-white  dark:text-black hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                            <FaGithub />
                                            Client
                                        </button>
                                    </Link>
                                    <Link href={project.githubServerLink}>
                                        <button className='btn rounded-none border bg-black dark:bg-white dark:hover:bg-[#07dde1] text-white dark:text-black  hover:bg-[#07dde1] hover:border-[#07dde1] ease-in duration-300 hover:text-black border-[#07dde1]'>
                                            <FaGithub />
                                            Server
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Project;