import { MailCheck } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Contacts = ({ darkMode }) => {
    const dark = useRef(null)
    useEffect(() => {
        dark.current.classList.toggle("dark-about", darkMode);
    }, [darkMode])
    return (
        <div className='contacts' id="contacts" ref={dark}>
            <div className='contacts-1'>
                <div className='contacts-section-1'>
                    <span>05</span>
                    <h1>Contacts</h1>
                </div>
            </div>
            <div className='contacts-2'>
                <h1>Let's work
                    together.</h1>
                <div className='contacts-2-info'>
                    <a href="mailto:logeeshwarirameshbabu@gmail.com"><h2><CiMail />logeeshwarirameshbabu@gmail.com</h2></a>
                    <h2><a href='https://www.linkedin.com/in/logee-ram/'><FaLinkedinIn /></a></h2>
                    <h2><a href='https://github.com/LogeeRam'><FiGithub /></a></h2>
                </div>
            </div>
        </div >
    )
}

export default Contacts