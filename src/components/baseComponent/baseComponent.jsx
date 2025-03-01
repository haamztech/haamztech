import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LOGO from "@assets/logo-main.png";
import PHONE_SVG from "@assets/phone.svg";
import PHONE_SVG_WHITE from "@assets/phone-white.svg";
import Container from '../container/container';
import LANDING_SIDES from "@assets/landing_image-background-2.webp";

const BaseComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            document.body.classList.add('prevent-scroll');
        } else {
            document.body.classList.remove('prevent-scroll');
        }
        return () => {
            document.body.classList.remove('prevent-scroll');
        };
    }, [active]);

    const navigateToRoot = () => {
        navigate("/");
        if (active) {
            setActive(false);
        }
    }
    const navigateToBooking = () => {
        navigate("/booking");
        if (active) {
            setActive(false);
        }
    }
    const navigateToServices = () => {
        navigate("/services");
        if (active) {
            setActive(false);
        }
    }
    const activeHandler = () => {
        setActive(!active);
    }

    const scrollToNextSection = (id) => {
        if (location.pathname === '/') {
            setActive(false);
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setActive(false);
        }
    }
    return (
        <div className={`w-full base-container overflow-x-hidden ${active ? 'overflow-hidden' : ''}`}>
            <img src={LANDING_SIDES} alt="LANDING_SIDES_1" className='langind-side-1' />
            <img src={LANDING_SIDES} alt="LANDING_SIDES_2" className='langind-side-2' />
            <Container>
                <nav className="base-navbar">
                    <div className="base-inner-container">
                        <img src={LOGO} alt="logo-image" className="nav-logo" onClick={navigateToRoot} />
                        <div className="nav-right-items">
                            <div className="lets-connect">
                                <img src={PHONE_SVG} alt="phone-svg" className="w-12" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">Let's connect</span>
                                    <span className="text-[#A32FA3] font-semibold">+ (447) 84 215-3349</span>
                                </div>
                            </div>
                            <button className="nav-book-button animation xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full" onClick={navigateToBooking}>Book a meeting</button>
                            <div className="ml-10">
                                <div className="nav-menu-container">
                                    <div className={`nav-menu-btn ${active ? 'active' : ''}`} onClick={activeHandler}>
                                        <div className="circles">
                                            <div className="circle-1"></div>
                                            <div className="circle-2"></div>
                                        </div>
                                        <div className="menu-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
            <div className="w-full">
                <Outlet />
            </div>
            {active && (
                <div className="menu-overlay">
                    <ul className="nav-menu-list">
                        <li data-aos="fade-right" data-aos-duration="1500" className="nav-menu-item">
                            <span className="nav-menu-item left-anim" onClick={() => scrollToNextSection('partners')}><span>Who</span> we are?</span>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1600" className="nav-menu-item">
                            <span className="nav-menu-item right-anim" onClick={navigateToServices}><span>Our</span> Services</span>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1700" className="nav-menu-item">
                            <span className="nav-menu-item left-anim" onClick={() => scrollToNextSection('what-we-do')}><span>What</span> we do?</span>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1800" className="nav-menu-item">
                            <span className="nav-menu-item right-anim" onClick={() => scrollToNextSection('tech-sec-card')}><span>Tech</span>nologies</span>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <span className="nav-menu-item left-anim" onClick={() => scrollToNextSection('contact-sec')}><span>Contact</span> Us</span>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <div className="flex justify-center items-center gap-5 mt-3">
                                <img src={PHONE_SVG_WHITE} alt="phone-svg" className="w-10 fill-slate-50" />
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm font-bold text-[#eee]">Let's connect</span>
                                    <span className="text-[#2b2b2b] font-semibold">+ (447) 84 215-3349</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <button className="nav-book-button animation xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full mt-5" onClick={navigateToBooking}>Book a meeting</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BaseComponent