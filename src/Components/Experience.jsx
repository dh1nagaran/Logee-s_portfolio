import React, { useEffect, useRef } from 'react'
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import { VscTriangleRight } from "react-icons/vsc";


const Experience = ({ darkMode, setDarkMode }) => {
    const dark = useRef(null)
    useEffect(() => {
        dark.current.classList.toggle("dark-about", darkMode);
    }, [darkMode])
    return (
        <div className='expri' id='exprience' ref={dark}>
            <div className='expri-1'>
                <div className='expri-section-1'>
                    <span>03</span>
                    <h1>Experience</h1>
                </div>
            </div>
            <div className='expri-2'>
                <div className='expri-sections'>
                    <div className='expri-section'>
                        {/* <FaCaretRight className='icons' /> */}
                        <BiSolidRightArrow className='icons' />
                        {/* <VscTriangleRight className='icons' /> */}
                        <div className='section-child'>
                            <h1>Varshitha Limited</h1>
                            <h3>APR 2026 - Present</h3>
                        </div>
                        <h2>Software Developer</h2>
                    </div>
                    <div className='expri-section'>
                        {/* <FaCaretRight className='icons' /> */}
                        <BiSolidRightArrow className='icons' />
                        <div className='section-child'>
                            <h1>Cloud Institution</h1>
                            <h3>AUG 2025 – FEB 2026</h3>
                        </div>
                        <h2>Data Analyst</h2>
                    </div>
                    <div className='expri-section'>
                        {/* <FaCaretRight className='icons' /> */}
                        <BiSolidRightArrow className='icons' />
                        <div className='section-child'>
                            <h1>DCE Technology</h1>
                            <h3>Jun 2024 – Aug 2024</h3>
                        </div>
                        <h2>web Developer intern</h2>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Experience