import React, { useEffect, useRef } from 'react'; // Removed unused useState
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: "01",
            title: "Madurai Seva",
            role: "Backend Development",
            description:
                "Developed a citizen service platform designed to improve access to government services through a user-friendly mobile application. Built backend-integrated workflows using REST APIs and MySQL for efficient data management. Implemented multilingual support to enhance accessibility and optimized the application for users with low internet connectivity, ensuring a seamless user experience.",
        },
        {
            id: "02",
            title: "Movie Recommendation System",
            role: "Machine Learning",
            description:
                "Built a machine learning-based recommendation system that suggests movies based on user preferences and historical data. Performed data cleaning, preprocessing, feature engineering, and model implementation using Python libraries. Published the project on GitHub with complete documentation and reporting.",
        },
        {
            id: "03",
            title: "Student Analytics Dashboard",
            role: "Data Analysis",
            description:
                "Designed and developed an institution-level analytics dashboard to monitor student academic performance and attendance trends. Created optimized SQL queries for data extraction and transformation, developed automated data workflows, and built interactive Power BI dashboards to help stakeholders identify performance patterns and support data-driven decision-making.",
        },
    ];

    const darkRef = useRef(null);
    const containerRef = useRef(null);
    useGSAP(() => {
        gsap.from(".project-2-contain", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".projects-2",
                start: "top 10%",
                toggleActions: "play none none reverse"
            }
        });

        ScrollTrigger.refresh();
    }, { scope: containerRef, dependencies: [projects] });

    useEffect(() => {
        if (darkRef.current) {
            darkRef.current.classList.toggle("dark-about", darkMode);
        }
    }, [darkMode]);

    return (

        <div
            className='projects'
            id="project"
            ref={(el) => {
                darkRef.current = el;
                containerRef.current = el;
            }}
        >
            <div className='projects-1'>
                <div className='projects-section-1'>
                    <span>04</span>
                    <h1>Projects</h1>
                </div>
            </div>
            <div className='projects-2'>
                {
                    projects.map((p) => (

                        <div className='project-2-contain' key={p.id}>
                            <h1>{p.title}</h1>
                            <h3>{p.role}</h3>
                            <p>{p.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
