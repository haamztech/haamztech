import React, { useEffect, useState } from 'react';
import MAP from "@assets/map.svg";
import { FaCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Container from '../../container/container';

const Partners = () => {
    const [shaded, setShaded] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollColor);

        return () => {
            window.removeEventListener('scroll', scrollColor);
        };
    }, []);

    const scrollColor = () => {
        const heroElement = document.getElementById('hero');
        const partnersElement = document.getElementById('partners');

        if (!heroElement || !partnersElement) {
            return;
        }

        const heroSection = heroElement?.getBoundingClientRect().height - 300;
        const partnersSection = (partnersElement?.getBoundingClientRect().height * 2) / 2;
        const offset = window.pageYOffset;
        if (offset >= heroSection && offset < partnersSection) {
            setShaded(true);
        } else {
            setShaded(false);
        }
    }

    return (
        <div className={`${shaded ? 'gradient-blur-background ' : ''}w-full min-h-screen background-animation pt-[7.5rem]`} id='partners'>
            <Container>
                <div className="partners-upper-container">
                    <div className="gird-container-main">
                        <div className='gird-column-text'>
                            <div data-aos="fade-up-right">
                                <div className={`${shaded ? 'text-[#FFA12B]' : 'text-[#0b3f78]'} title`}>We are Haamztech</div>
                            </div>
                            <div data-aos="fade-up-right">
                                <div className={`${shaded ? 'text-white' : 'text-black'} paragraph`}>
                                    We create custom software that fosters innovation and generates social impact. Whether you're a Fortune 500 company or a startup in stealth mode, we provide our partners with the creative, technical, and business expertise needed to thrive.
                                </div>
                            </div>
                            <div data-aos="fade-up-right">
                                <div className={`${shaded ? 'text-white' : 'text-black'} paragraph`}>
                                    We empower our clients to achieve their business goals with innovative software solutions. Partner with us to transform your vision into reality and drive success.
                                </div>
                            </div>
                            <div data-aos="fade-up-right">
                                <div className={`${shaded ? 'text-white' : 'text-black'} paragraph`}>
                                    Our expert team combines industry-leading technology with strategic insights to deliver results that drive success and growth.
                                </div>
                            </div>
                            <div className='provides-col'>
                                <div data-aos="fade-up-right" className='provides-col-container'>
                                    <span className={`provide-circles ${shaded ? 'bg-white' : 'bg-[#0b3f78]'}`}>
                                        <FaCheck className={`${shaded ? 'text-[#1a0b1a]' : 'text-white'}`} />
                                    </span>
                                    <span className={`provide-text ${shaded ? "text-white" : "text-black"}`}>Gauaranteed Customer Success</span>
                                </div>
                                <div data-aos="fade-up-right" className='provides-col-container'>
                                    <span className={`provide-circles ${shaded ? 'bg-white' : 'bg-[#0b3f78]'}`}>
                                        <FaCheck className={`${shaded ? 'text-[#1a0b1a]' : 'text-white'}`} />
                                    </span>
                                    <span className={`provide-text ${shaded ? "text-white" : "text-black"}`}>Regular Service Improvement</span>
                                </div>
                                <div data-aos="fade-up-right" className='provides-col-container'>
                                    <span className={`provide-circles ${shaded ? 'bg-white' : 'bg-[#0b3f78]'}`}>
                                        <FaCheck className={`${shaded ? 'text-[#1a0b1a]' : 'text-white'}`} />
                                    </span>
                                    <span className={`provide-text ${shaded ? "text-white" : "text-black"}`}>On-Demand Service</span>
                                </div>
                            </div>

                        </div>
                        <div className='gird-column-img'>
                            <div className="markers">
                                <span data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="350" data-aos-delay="450" className="marker marker-1"><MdLocationOn color='#ef2737' /><span>Pakistan</span></span>
                                <span data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="350" data-aos-delay="450" className="marker marker-2"><MdLocationOn color='#ef2737' /><span>UAE</span></span>
                                <span data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="350" data-aos-delay="450" className="marker marker-3"><MdLocationOn color='#ef2737' /><span>UK</span></span>
                                <span data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-offset="350" data-aos-delay="450" className="marker marker-4"><MdLocationOn color='#ef2737' /><span>USA</span></span>
                            </div>
                            <img data-aos="fade-up-left" src={MAP} alt="" className='map-image' />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="partners-bottom-container">
                    <div data-aos="fade-up-right" className='w-full'>
                        <div className={`${shaded ? 'text-[#FFA12B]' : 'text-[#0b3f78]'} title`}>Who We Serve</div>
                    </div>
                    <div data-aos="fade-up-right" className='w-full'>
                        <div className={`${shaded ? "text-white" : "text-black"} paragraph`}>We empower businesses to achieve comprehensive value through technology at every stage of their growth.</div>
                    </div>
                    <div className='mt-20'>
                        <div className={`serve-partners ${shaded ? "text-white" : "text-black"}`}>
                            <div data-aos="fade-up-right" className="serve-partners-left">01/</div>
                            <div className="serve-partners-right">
                                <div className='w-full flex flex-col gap-2'>
                                    <span data-aos="fade-up-left" className='text-xl font-extrabold'>Enterprise</span>
                                    <span data-aos="fade-up-left" className=''>Build custom solutions and adopt advanced technologies for your organization to:</span>
                                    <ul className='serve-ul mt-3'>
                                        <li data-aos="fade-up-right" className='serve-li'>Accelerate digital transformation</li>
                                        <li data-aos="fade-up-left" className='serve-li'>Lower integration costs</li>
                                        <li data-aos="fade-up-right" className='serve-li'>Stream line business process</li>
                                        <li data-aos="fade-up-left" className='serve-li'>Scale to meet market demands</li>
                                        <li data-aos="fade-up-right" className='serve-li'>Maintain a competitive edge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`serve-partners ${shaded ? "text-white" : "text-black"}`}>
                            <div className="serve-partners-left"></div>
                            <div className="serve-partners-right">
                                <div className='w-full flex flex-col gap-2'>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className={`serve-partners ${shaded ? "text-white" : "text-black"}`}>
                            <div data-aos="fade-up-right" className="serve-partners-left">02/</div>
                            <div className="serve-partners-right">
                                <div className='w-full flex flex-col gap-2'>
                                    <span data-aos="fade-up-left" className='text-xl font-extrabold'>Startups</span>
                                    <span data-aos="fade-up-left" className=''>Take your product from an idea to the Minimum Viable Product (MVP) stage through:</span>
                                    <ul className='serve-ul mt-3'>
                                        <li data-aos="fade-up-right" className='serve-li'>Idea &amp; Persona Validation</li>
                                        <li data-aos="fade-up-left" className='serve-li'>UI &amp; UX Design</li>
                                        <li data-aos="fade-up-right" className='serve-li'>Lo-Fi &amp; Hi-Fi Prototypes</li>
                                        <li data-aos="fade-up-left" className='serve-li'>User Acceptance Testing</li>
                                        <li data-aos="fade-up-right" className='serve-li'>Development &amp; Launch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Partners