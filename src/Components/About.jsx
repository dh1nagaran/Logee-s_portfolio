import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = ({ darkMode, setDarkMode }) => {
    const dark = useRef(null)
    useEffect(() => {
        dark.current.classList.toggle("dark-about", darkMode);
    }, [darkMode])

    useGSAP(() => {
        gsap.from(".about-2 > p", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-2 > p",
                start: "top 50%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".about-section-2 > span", {
            opacity: 0,
            x: -40,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-section-2",
                start: "top 55%",
                toggleActions: "play none none reverse"
            }
        });
    });

    return (
        <div className='about' id='about' ref={dark}>
            <div className='about-1'>
                <div className='about-section-1'>
                    <span>01</span>
                    <h1>About</h1>
                </div>
            </div>
            <div className='about-2'>
                <p>Graduated in 2025 with a B.Tech in Information Technology from <b>Thiagarajar College of Engineering </b>, with a strong passion for software development and data analytics. Skilled in building scalable applications, backend-integrated systems, and data-driven solutions that solve real-world problems efficiently.

                    Driven by continuous learning and hands-on development, I enjoy creating clean, reliable, and impactful digital experiences through modern technologies, structured problem-solving, and efficient system design.</p>
                <div className='about-section-2'>
                    <span>
                        <h1>Software Developer</h1>
                        <p>Developing clean, scalable, and efficient applications with a focus on backend systems, APIs, databases, and modern development practices.</p>
                    </span>
                    <span>
                        <h1>Data Analyst</h1>
                        <p>Turning complex data into meaningful insights through analytics, dashboards, and data-driven solutions that support smarter decision-making.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About