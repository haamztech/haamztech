import React from 'react';
import { MdWeb } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoPulseOutline } from "react-icons/io5";
import { SiMarketo } from "react-icons/si";
import { GiTechnoHeart } from "react-icons/gi";
import { SiWeb3Dotjs } from "react-icons/si";

export const dataServiceList = [
    {
        title: "Business Solution",
        description: "Our comprehensive business solutions are designed to optimize your operations, streamline processes, and drive sustainable growth. We provide customized strategies and tools that address your unique challenges and opportunities, ensuring that your business remains competitive and agile in an ever-changing market. ",
        icon: <MdWeb size={26} />,
        animation: 'flip-right',
        animationDuration: "500"
    },
    {
        title: "SaaS products",
        description: "Experience the convenience and efficiency of our state-of-the-art SaaS products. From project management to customer relationship management, our solutions are built to scale with your business needs. Enjoy the benefits of reduced IT costs, automatic updates, and seamless integration with your existing systems.",
        icon: <AiFillProduct size={26} />,
        animation: 'flip-down',
        animationDuration: "500"
    },
    {
        title: "SEO",
        description: "Increase your online presence and attract high-quality traffic with our advanced SEO services. Our team of experts uses the latest techniques and tools to improve your search engine rankings, drive organic traffic, and enhance your brand’s visibility. Let us help you convert visitors into loyal customers with a robust SEO strategy.",
        icon: <IoPulseOutline size={26} />,
        animation: 'flip-left',
        animationDuration: "500"
    },
    {
        title: "Digital Marketing",
        description: "Elevate your brand and connect with your target audience through our comprehensive digital marketing services. We offer a full suite of solutions, including social media marketing, content creation, PPC advertising, and email campaigns, all designed to maximize your ROI. Partner with us to create a powerful online presence that drives engagement and growth.",
        icon: <SiMarketo size={26} />,
        animation: 'flip-right',
        animationDuration: "500"
    },
    {
        title: "AI & ML Solutions",
        description: "Harness the transformative power of artificial intelligence and machine learning with our cutting-edge solutions. We provide intelligent automation, predictive analytics, and data-driven insights that empower your business to innovate and stay ahead of the competition. Discover how AI and ML can revolutionize your operations and unlock new opportunities.",
        icon: <GiTechnoHeart size={26} />,
        animation: 'flip-up',
        animationDuration: "500"
    },
    {
        title: "Web 3.0",
        description: "Step into the future with our Web 3.0 services, offering decentralized and blockchain-based solutions that prioritize security, privacy, and user control. We help you leverage the benefits of the next generation of the internet, including enhanced data protection, transparent transactions, and innovative digital experiences. Embrace the evolution of the web with our expert guidance and solutions.",
        icon: <SiWeb3Dotjs size={26} />,
        animation: 'flip-left',
        animationDuration: "500"
    },
]