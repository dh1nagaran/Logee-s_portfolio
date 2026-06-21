import React, { useEffect, useRef } from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const Footer = ({ darkMode }) => {
    const dark = useRef(null)
    useEffect(() => {
        dark.current.classList.toggle("dark-about", darkMode);
    }, [darkMode])
    return (
        <div className='footer' ref={dark}>
            <div className='footer-main'>
                <div className='footer-1'>
                    <h4>Availability</h4>
                    <span><p></p><h3>
                        Open for opportunities</h3></span>
                </div>
                <div className='footer-2'>
                    <h1>Connect</h1>
                    <ul>
                        <a href='https://github.com/LogeeRam'><li>Github <RxArrowTopRight className='icons' /></li></a>
                        <a href='https://www.linkedin.com/in/logee-ram/'><li>LinkedIn <RxArrowTopRight className='icons' /></li></a>
                        <a href='https://www.instagram.com/logee_ram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><li>Instagram <RxArrowTopRight className='icons' /></li></a>
                    </ul>
                </div>
            </div>
            <div className='footer-3'>
                <h3>© 2026 All Rights Reserved</h3>
                <h3>Designed & Built with passion by Logeeshwari 💜</h3>
            </div>
        </div>
    )
}

export default Footer