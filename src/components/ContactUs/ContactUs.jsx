'use client'
import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAddCall, MdAddLocationAlt, MdMarkEmailRead } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_allih9w', 'template_49b5xew', form.current, {
                publicKey: 'zX6tgAJJyr1MY3rZr',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your mail has been sent successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <section id='contact' className='bg-[#0d0d0d] min-h-screen lg:px-32 pt-20 pb-20'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center'>
                <h1 className='text-center text-2xl text-white'>Contact Us</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='mt-20 flex flex-col lg:flex-row justify-center lg:space-x-40'>
                <div className='text-white mx-6 mb-20'>
                    <div data-aos="fade-right" data-aos-delay="1000">
                        <p>Contact Info</p>
                        <h1 className='text-4xl'>Get in touch</h1>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2000" className='mt-10 flex space-x-3'>
                        <MdMarkEmailRead className='text-xl text-[#07dde1]' />
                        <div>
                            <p>Talk us:</p>
                            <h4 className='font-bold'>kalidashodekare14@gmail.com</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2200" className='mt-10 flex space-x-3'>
                        <MdAddCall className='text-xl text-[#07dde1]' />
                        <div>
                            <p>Call us:</p>
                            <h4 className='font-bold'>+8801728659562</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2300" className='mt-10 flex space-x-3'>
                        <MdAddLocationAlt className='text-xl text-[#07dde1]' />
                        <div>
                            <p>Address:</p>
                            <h4 className='font-bold'>Bairbari, Palashbari-5100, <br /> Birganj, Dinajpur</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2400" className='space-y-3'>
                        <h4 className='mt-10 uppercase'>Follow Us:</h4>
                        <div className='flex items-center space-x-5'>
                            <a target='_blank' href="https://www.facebook.com/Shakti.Adhikari.68">
                                <FaFacebook />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/developer-kalidash">
                                <FaLinkedin />
                            </a>
                            <a target='_blank' href="https://github.com/kalidashodekare14">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='space-y-8 mx-5'>
                    <div data-aos="fade-right" data-aos-delay="2500" className='flex flex-col lg:flex-row lg:space-x-3 space-y-6 lg:space-y-0'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">First Name*</label>
                            <input className='input bg-opacity-0 border  border-[#07dde1] text-white' placeholder='Your First Name' type="text" name="user_first_name" />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">Last Name*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1] text-white' placeholder='Your Last Name' type="text" name="user_last_name" />
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2600" className='flex flex-col lg:flex-row lg:space-x-3  space-y-6 lg:space-y-0'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">Email*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1] text-white' placeholder='Your Email' type="text" name="user_email" />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">Phone*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1] text-white' placeholder='Your Phone Number' type="text" name="phone_number" />
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2800">
                        <label className='text-white' htmlFor="">Message*</label>
                        <textarea className='textarea h-[20vh] w-full bg-opacity-0 border border-[#07dde1] text-white' placeholder='Your Message' name="message" ></textarea>
                    </div>
                    <button data-aos="fade-right" data-aos-delay="2900" className='btn w-60 bg-[#07dde1] border-0 '>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;