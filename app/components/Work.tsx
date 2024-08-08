"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const work = [
    {
        id: 1,
        name_company: "Techplement",
        role: "Front-End Developer - Intern",
        date: "August 2024 - September 2024",
        company_logo: `https://via.placeholder.com/300x200?text=Techplement`,
        description: "Worked on various front-end projects, contributing to UI/UX development and enhancing website responsiveness."
    }
];

// @ts-ignore
const formatDuration = (startDateStr, endDateStr = new Date().toLocaleDateString()) => {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if (years === 0 && months < 0) {
        return `${Math.abs(months)} month${Math.abs(months) === 1 ? '' : 's'}`;
    }

    const yearsText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearsText, monthsText].filter(Boolean).join(' and ');
};

work.forEach(item => {
    const [startDate, endDate] = item.date.split(' - ');
    // @ts-ignore
    item.time = formatDuration(startDate, endDate);
});

const Work = () => {
    return (
        <div className="container">
            <div className="flex md:justify-start mx-20 justify-center pt-12">
                <motion.div
                    animate={{ x: -100 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="group hidden md:block">
                    <h1 className="text-[36px] font-[700]">My Work Experiences</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
                </motion.div>
                <div className="group block md:hidden pb-10">
                    <h1 className="text-[36px] font-[700]">My Work Experiences</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
                </div>
            </div>
            <div className="work-experience flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-10">
                {work.map((item) => (
                    <div key={item.id} className="experience-card w-full md:w-[45%] bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 m-4">
                        <div className="flex items-center space-x-4">
                            {item.company_logo && (
                                <Image
                                    src={item.company_logo}
                                    alt={`${item.name_company} logo`}
                                    width={50}
                                    height={50}
                                    className="object-contain rounded-full"
                                />
                            )}
                            <div>
                                <h2 className="text-xl font-semibold">{item.name_company}</h2>
                                <p className="text-gray-500">{item.role}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-gray-500">{item.date}</span>
                                 {/* @ts-ignore */}
                                <span className="text-gray-500">{item.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;