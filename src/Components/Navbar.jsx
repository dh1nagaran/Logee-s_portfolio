import React, { useEffect, useRef } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import gsap from "gsap";

const Navbar = ({ darkMode, setDarkMode }) => {
    const main = useRef(null);
    const name = useRef(null);
    useEffect(() => {
        main.current.classList.toggle("dark-main", darkMode);
        name.current.classList.toggle("dark-name", darkMode);
    }, [darkMode]);


    useEffect(() => {
        gsap.fromTo(".nav-btn-animate",
            {
                opacity: 0,
                rotation: -90,
                scale: 0.8
            },
            {
                opacity: 1,
                rotation: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            }
        );
    }, [darkMode]);

    console.log(darkMode)
    return (
        <div>
            <div className='main-nav' ref={main}>
                <div className='nav-name' ref={name}><a href='#'>Logeeshwari</a></div>
                <div className='nav-tags'>
                    <ul>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skill'>Skills</a></li>
                        <li><a href="#exprience">Experience</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contacts">Contact</a></li>
                    </ul>
                </div>
                <div className='nav-icon'>
                    {darkMode ? (
                        <span className='light' onClick={() => setDarkMode(false)}><IoSunnyOutline className='icon  nav-btn-animate' /> Light</span>
                    ) : (
                        <span className='dark' onClick={() => setDarkMode(true)}><MdOutlineDarkMode className="icon  nav-btn-animate" /> Dark</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar