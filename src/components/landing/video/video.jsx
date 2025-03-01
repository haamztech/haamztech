import React from 'react'
import ImageClips from '@assets/clip-svg.svg';
import Container from '../../container/container';
import { FaPlay } from "react-icons/fa";
import LOGO from "@assets/logo-main.png";

const Video = () => {
    return (
        <div className="w-full" id="my-video">
            <img loading="lazy" alt="logo" src={ImageClips} class="clips"></img>
            <Container>
                <div className="content flex flex-col gap-8 justify-center items-center md:justify-start md:items-start">
                    <img src={LOGO} alt="Logo Image" className='h-12 lg:h-16 xl:h-20' />
                    <div className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                        Get to know our competences
                    </div>
                    <button className='bg-transparent rounded-[300px] border border-white text-white h-14 py-0 px-9 text-xl font-bold flex justify-center items-center gap-3'> 
                        <FaPlay size={16} color='white' />
                        Watch the video
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Video