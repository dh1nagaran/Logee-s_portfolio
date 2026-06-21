import React, { useEffect, useRef } from 'react'
import { RiJavaFill } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { MdSignalCellularAlt } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { FaGitAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { LiaBootstrap } from "react-icons/lia";
import { MdCss } from "react-icons/md";
import { MdHtml } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ darkMode }) => {
    const dark = useRef(null);

    // Sync Dark Mode classes safely
    useEffect(() => {
        if (dark.current) {
            dark.current.classList.toggle("dark-about", darkMode);
        }
    }, [darkMode]);

    useGSAP(() => {
        gsap.from(".skill-contains", {
            opacity: 0,
            x: -60,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".skill-2",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        ScrollTrigger.refresh();
    });

    return (
        <div className='skills' id='skill' ref={dark}>
            <div className='skill-1'>
                <div className='skill-section-1'>
                    <span>02</span>
                    <h1>Skills</h1>
                </div>
            </div>
            <div className='skill-2'>
                <div className='skill-contains'>
                    <h1>Frontend</h1>
                    <ul>
                        <li><MdHtml className='icons' />Html</li>
                        <li><MdCss className='icons' />CSS</li>
                        <li><IoLogoJavascript className='icons' />Java script</li>
                        <li><FaReact className='icons' /> React</li>
                        <li><LiaBootstrap className='icons' />Bootstrap</li>
                        <li><RiTailwindCssFill className='icons' />Tailwind css</li>
                    </ul>
                </div>

                <div className='skill-contains'>
                    <h1>Backend</h1>
                    <ul>
                        <li><DiMysql className='icons' />SQL</li>
                        <li><TbApi className='icons' />REST API</li>
                    </ul>
                </div>

                <div className='skill-contains'>
                    <h1>Programming</h1>
                    <ul>
                        <li><RiJavaFill className='icons' /> Java</li>
                        <li><AiOutlinePython className='icons' />Python</li>
                    </ul>
                </div>

                <div className='skill-contains'>
                    <h1>Data & BI</h1>
                    <ul>
                        <li><MdSignalCellularAlt className='icons' />Power BI</li>
                        <li><GoDatabase className='icons' />Data modeling</li>
                    </ul>
                </div>

                <div className='skill-contains'>
                    <h1>Tools</h1>
                    <ul>
                        <li><FaGitAlt className='icons' />GIT</li>
                        <li><FiGithub className='icons' />Github</li>
                        <li><VscVscode className='icons' />vs code</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
