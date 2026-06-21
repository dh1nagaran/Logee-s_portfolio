import React, { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react';
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ darkMode, setDarkMode }) => {
    const dark = useRef(null);
    const dark1 = useRef(null);

    useGSAP(() => {
        gsap.to(".child", {
            y: -10,
            duration: 3,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
    });

    useEffect(() => {
        dark.current.classList.toggle("dark-mainn", darkMode);
        dark1.current.classList.toggle("dark-details", darkMode);
    }, [darkMode])

    return (
        <div className='home-main' ref={dark}>
            <div className="home-img">
                <div className='child'>
                    <img src="/lailu'sb&w.png"></img>
                    <span className='box-right' ref={dark}></span>
                    <span className='box-left' ref={dark}></span>
                </div>
            </div>
            <div className='home-details'>
                <div className='details' ref={dark1}>
                    <p>Personal Portfolio / 2026</p>
                    <h1>LOGEESHWARI R</h1>
                    <h2> Developer</h2>
                    <h3>Software Engineer & Data Analyst with a B.Tech in Information Technology and practical experience bridging the gap between application development and data intelligence . Proficient in building structured data workflows, designing REST APIs, and automating KPI reporting systems . From developing multi-lingual citizen service apps to launching interactive analytics dashboards that reduced manual workflows by 40%, I specialize in turning complex technical challenges into scalable, data-driven solutions.</h3>
                    <div className='home-info'>
                        <span>
                            <p>Location</p>
                            <h4>Virudhunagar</h4>
                        </span>
                        <span>
                            <p>Work</p>
                            <h4>Varistha Limited</h4>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home