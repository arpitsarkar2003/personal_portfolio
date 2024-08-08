"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"

// @ts-ignore
const ProjectItem = ({ project, isExpanded, toggleExpand }) => {
    const maxDescriptionLength = 100;

    // @ts-ignore
    const renderDescription = (description) => {
        if (description.length <= maxDescriptionLength || isExpanded) {
            return description;
        }

        const truncatedDescription = description.substring(0, maxDescriptionLength);
        return `${truncatedDescription}... `;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10 p-5 border group rounded-md hover:scale-105 transition-all duration-200"
        >
            <div className="w-full md:w-1/3 h-full flex justify-center items-center py-3 px-4 rounded-md group-hover:bg-gray-50 group-hover:scale-110 transition-all duration-200">
                <Image src={project.imgSrc} width={500} height={300} alt={project.title} className="rounded-lg object-cover" />
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-xs font-[600] font-sans mb-2 text-gray-600">Date: {project.date}</p>
                <p className="mb-4 font-[300] text-sm">
                    {renderDescription(project.description)}
                    {project.description.length > maxDescriptionLength && !isExpanded && (
                        <span
                            onClick={toggleExpand}
                            className="font-[500] hover:underline cursor-pointer"
                        >
                            Show more
                        </span>
                    )}
                    {isExpanded && (
                    <span
                        onClick={toggleExpand}
                        className="font-[500] hover:underline cursor-pointer mb-2 block"
                    >
                        Show less
                    </span>
                )}
                </p>
                
                <a href={project.githublink} target="_blank" rel="noopener noreferrer" title={project.title}>
                    <h1>want to see more about this project?</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border border-black group-hover:w-[130px] transition-all duration-200" />
                </a>
                <div className="flex flex-wrap gap-2 mt-2">
                    {/* @ts-ignore */}
                    {project.skills.map((skill, idx) => (
                        <div key={idx} className="text-xs bg-gray-200 dark:bg-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-200 py-1 px-2 rounded ">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Miro LMS",
            description: "Miro is a robust Learning Management System (LMS) offering features like course browsing and filtering, Stripe-integrated course purchasing, and progress tracking with chapter completion markers. It includes a student dashboard and a teacher mode for creating and organizing courses and chapters via drag-and-drop. Content management is streamlined with UploadThing for media uploads and Mux for video processing and playback. Authentication is secured with Clerk, and the backend uses Prisma ORM with a MongoDB database for efficient data handling.",
            imgSrc: "/projects/mirolms_cover.jpeg",
            tags: ["Next.js", "Real-time Data Acquisition", "OAuth", "Databases", "React Hooks", "Responsive Web Design", "User Authentication", "TypeScript", "MongoDB"],
            websiteLink: "",
            githubLink: "https://github.com/arpitsarkar2003/mirolms",
            date: "Mar 2024 - May 2024",
            skills: ["Next.js", "Real-time Data Acquisition", "OAuth", "Databases", "React Hooks", "Responsive Web Design", "User Authentication", "TypeScript", "MongoDB"]
        },
        {
            title: "Airbnb Clone",
            description: "Airbnb clone project while retaining its core functionality, focusing on essential features such as basic Tailwind CSS design and responsiveness, credential-based authentication, and fundamental property management capabilities like creation, deletion, and a booking/reservation system. Simplify the search and filtering process to include essential criteria such as category, date range, location, number of guests, rooms, and bathrooms. Retain client form validation and server error handling to ensure a smooth user experience.",
            imgSrc: "/projects/airbnb_cover.jpeg",
            tags: ["React", "Tailwind CSS", "OAuth", "Next Auth", "Uploadthing", "Next.js", "TypeScript", "MongoDB"],
            websiteLink: "https://airbnb-clone-eta-liard.vercel.app/",
            githubLink: "https://github.com/arpitsarkar2003/airbnb.git",
            date: "Nov 2023 - Dec 2023",
            skills: ["GitHub", "OAuth", "Next Auth", "Uploadthing", "Next.js", "TypeScript", "MongoDB"]
        },
        {
            title: "Jotion",
            description: "Jotion is a clone of Notion, built with NextJs. Key features include real-time database, Notion-style editor, Light and Dark mode, Infinite children documents, Trash can & soft delete, Authentication, File upload File deletion File replacement Icons for each document, Expandable sidebar, Full mobile responsiveness, Publish your note to the web, Fully collapsible sidebar, Landing page, Cover image of each document, Recover deleted files.",
            imgSrc: "/projects/jotion_cover.jpeg",
            websiteLink: "https://jotion-psi.vercel.app/",
            githubLink: "https://github.com/arpitsarkar2003/jotion.git",
            date: "Oct 2023 - Nov 2023",
            skills: ["Full-Stack Development", "Convex Optimization", "React.js", "Next.js", "Real-time Data Acquisition", "OAuth", "Databases", "React Hooks", "Responsive Web Design"]
        },
        {
            title: "Arl Holidays",
            description: "This is a Travel Agency Website in Bangladesh. Built with Reactjs, Tailwind Css, Responsive UI and JSON data implementation.",
            imgSrc: "/projects/arlholidays_cover.jpeg",
            tags: ["React.js", "Customer Relationship Management (CRM)", "JSON", "Tailwind CSS", "Responsive Web Design", "JavaScript"],
            websiteLink: "https://arlholidays.com",
            githubLink: "",
            date: "Mar 2023 - Apr 2023",
            skills: ["React.js", "Customer Relationship Management (CRM)", "JSON", "Tailwind CSS", "Responsive Web Design", "JavaScript"]
        },
        {
            title: "Portfolio",
            description: "This is a personal Portfolio Website. Built with ReactJs, Tailwind Css and Responsive Design.",
            imgSrc: "/projects/arik.jpeg",
            skills: ["React.js", "Customer Relationship Management (CRM)", "JSON", "Tailwind CSS", "Responsive Web Design", "JavaScript"],
            websiteLink: "https://ariksarkar.netlify.app",
            githubLink: "",
            date: "Aug 2022 - Present",
        },
    ];

    const [showAllProjects, setShowAllProjects] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

    // @ts-ignore
    const toggleExpand = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

    return (
        <div className="mx-4 md:mx-20 pt-16">
            <div className="flex justify-end ">
                <div className="group w-full md:w-[10%]">
                <h1 className="text-[36px] font-[700]">projects.</h1>
                <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
            </div>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                <AnimatePresence>
                    {visibleProjects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            project={project}
                            isExpanded={expandedProject === index}
                            toggleExpand={() => toggleExpand(index)}
                        />
                    ))}
                </AnimatePresence>
            </div>

            <div className="flex justify-center mt-10 pr-10">
                <div className="group">
                    <button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        className="text-[15px] font-[700]"
                    >
                        {showAllProjects ? "show less projects." : "show more projects."}
                        <div className="w-[20px] h-[2px] dark:border-white border border-black group-hover:w-full transition-all duration-200" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
