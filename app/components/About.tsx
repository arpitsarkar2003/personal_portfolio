"use client";

import { motion } from "framer-motion"
import Image from "next/image";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import { Button } from "@/components/ui/button";


const About = () => {
    return (
        <div className="md:mx-20">
            <div className="flex md:justify-end justify-center pt-12">
                <motion.div
                    animate={{ x: -100 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="group hidden md:block">
                    <h1 className="text-[36px] font-[700]">about me.</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
                </motion.div>
                <div className="group block md:hidden pb-10">
                    <h1 className="text-[36px] font-[700]">about me.</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
                </div>
            </div>


            <div className="hidden md:flex mx-32 mt-10 justify-center group ">
                <div>
                    <Image width={300} height={300} src="/hero.jpg" alt="Arpit_Sarkar" className="rounded-full opacity-50 group-hover:opacity-100  transition-opacity duration-300" />
                </div>
                <div className="mx-16 w-[50vw] space-y-5">
                    <h1 className="text-[32px] font-[500]">Arpit Sarkar</h1>
                    <p className="text-wrap text-base font-[300]">
                        As a Front-End Web Developer, I excel in creating stunning, responsive websites using HTML, CSS (especially Tailwind CSS), and JavaScript/React.js for dynamic interfaces. I also handle backend tasks with MongoDB/Express and excel in API integration. My toolkit includes advanced tools like Firebase, Redux, and Material UI/Icons for high-performance web apps.
                    </p>
                    <div className="flex space-x-3 items-center ">
                         
                            <form method="get" action="Resume.pdf" className="flex items-center justify-center space-x-1 cursor-pointer border px-3 py-[7px] rounded-md hover:bg-gray-100 transition-all duration-150 bg-white">
                            <Paperclip className="w-6 h-6" />
                            <button type="submit" >Resume</button>
                        </form>
                         
                        
                        <Button variant="outline">
                            <a href="https://www.linkedin.com/in/arpitsarkar07/" target="_blank" className="flex items-center justify-center space-x-1">
                                <Linkedin />
                                <span>Linkden</span>
                            </a>
                        </Button>
                        <Button variant="outline">
                            <a href="https://github.com/arpitsarkar2003" target="_blank" className="flex items-center justify-center space-x-1">
                                <Github />
                                <span>Github</span>
                            </a>
                        </Button>
                        <Button variant="outline">
                            <a href="https://www.instagram.com/arpitsarkar16/" target="_blank" className="flex items-center justify-center space-x-1">
                                <Instagram />
                                <span>Instagram</span>
                            </a>
                        </Button>


                    </div>
                </div>
            </div>

            <div className="flex flex-col md:hidden mx-10 mt-10 justify-center items-center group ">
                <div>
                    <Image width={400} height={300} src="/hero.jpg" alt="Arpit_Sarkar" className="rounded-md  transition-opacity duration-300" />
                </div>
                <div className="mx-16 w-[90vw] space-y-5 text-center pt-3">
                    <h1 className="text-[32px] font-[700]">Arpit Sarkar</h1>
                    <p className="text-wrap text-base font-[300]">
                        As a Front-End Web Developer, I excel in creating stunning, responsive websites using HTML, CSS (especially Tailwind CSS), and JavaScript/React.js for dynamic interfaces. I also handle backend tasks with MongoDB/Express and excel in API integration. My toolkit includes advanced tools like Firebase, Redux, and Material UI/Icons for high-performance web apps.
                    </p>
                    <div className="items-center pt-10 space-x-1 grid grid-cols-2 gap-3 mx-5">
                    <form method="get" action="Resume.pdf" className="flex items-center justify-center space-x-1 cursor-pointer border px-3 py-[7px] rounded-md hover:bg-gray-100 transition-all duration-150 bg-white">
                            <Paperclip className="w-6 h-6" />
                            <button type="submit" >Resume</button>
                        </form>
                        
                        <Button variant="outline">
                            <a href="https://www.linkedin.com/in/arpitsarkar07/" target="_blank" className="flex items-center space-x-1 ">
                                <Linkedin />
                                <span>Linkden</span>
                            </a>
                        </Button>
                        <Button variant="outline">
                            <a href="https://github.com/arpitsarkar2003" target="_blank" className="flex items-center space-x-1">
                                <Github />
                                <span>Github</span>
                            </a>
                        </Button>
                        <Button variant="outline">
                            <a href="https://www.instagram.com/arpitsarkar16/" target="_blank" className="flex items-center space-x-1">
                                <Instagram />
                                <span>Instagram</span>
                            </a>
                        </Button>


                    </div>
                </div>
            </div>


            <div className="hidden md:flex justify-between md:mx-[20%] mt-10">
                <div className="flex border dark:bg-white/70 dark:text-black border-gray-100 rounded-md hover:bg-gray-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="1.svg" />
                    <div className="border-l-2 pl-2 border-gray-500">
                        <h1>Designer</h1>
                    </div>
                </div>
                <div className="flex border dark:bg-white/70 dark:text-black border-gray-100 rounded-md hover:bg-gray-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="2.svg" />
                    <div className="border-l-2 pl-2 border-gray-500">
                        <h1>Engineering</h1>
                    </div>
                </div>
                <div className="flex border dark:bg-white/70 dark:text-black border-gray-100 rounded-md hover:bg-gray-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="3.svg" />
                    <div className="border-l-2 pl-2 border-gray-500">
                        <h1>Project Management</h1>
                    </div>
                </div>

            </div>

            <div className="md:hidden flex flex-col p-5 space-y-5  justify-between md:mx-[20%] mt-10">
                <div className="bg-gray-100 flex border  dark:bg-white/70 dark:text-black border-gray-100 rounded-md hover:bg-gray-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="1.svg" alt="Engineering" />
                    <div className="border-l-2 pl-2 border-gray-500">
                        <h1>Designer</h1>
                    </div>
                </div>
                <div className="bg-gray-100 flex border dark:bg-white/70 dark:text-black border-gray-100 rounded-md hover:bg-gray-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="2.svg" alt="Engineering" />
                    <div className="border-l-2 pl-2 border-gray-500">
                        <h1>Engineering</h1>
                    </div>
                </div>
                <div className="bg-gray-100 flex border dark:bg-white/70 dark:text-black border-gray-100 rounded-md hover:bg-gray-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="3.svg" alt="Engineering" />
                    <div className="border-l-2 pl-2 border-gray-500">
                        <h1>Project Management</h1>
                    </div>
                </div>

            </div>


            <div className=" hidden md:flex justify-between mx-[14rem] mt-16 ">
                <div className="border flex items-center justify-center border-gray-100 py-2 pl-3 pr-10 hover:bg-gray-100">
                    <ul className="border-l-2 border-gray-500 pl-4 text-sm font-[300]  transition-all duration-200 space-y-1">
                        <li className="text-xl font-[600]">I&apos;ve had experiences with</li>
                        <li>HTML</li>
                        <li>CSS Preprocessors & Tailwind CSS & Bootstrap</li>
                        <li>Javascript </li>
                        <li>ReactJS</li>
                        <li>NextJs</li>
                        <li>Typescript</li>
                        <li>GIT, GitHub, Bitbucket</li>

                    </ul>
                </div>

                <div className="border flex items-center justify-center border-gray-100 py-2 pl-3 pr-10   hover:bg-gray-100">
                    <ul className="border-l-2 border-gray-500 pl-4 text-sm font-[300]  transition-all duration-200 space-y-1">
                        <li className="text-xl font-[600]">The Programming Language I use</li>
                        <li>C programing</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Express</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className="border flex items-center justify-center border-gray-100 py-2 pl-3 pr-10 hover:bg-gray-100">
                    <ul className="border-l-2 border-gray-500 pl-4 text-sm font-[300]  transition-all duration-200 space-y-1">
                        <li className="text-xl font-[600]">I&apos;ve had experiences with</li>
                        <li>Firebase Database, MongoDB, Convex</li>
                        <li>Authentication, OAuth, Clark</li>
                        <li>REST API, Redux, Webhooks, Prisma</li>
                        <li>Material UI, Shadcn UI</li>
                        <li>Uploadthing, Mux, Stripe</li>
                    </ul>
                </div>
            </div>

            <div className="md:hidden flex flex-col items-start pl-5 mt-16 ">
                <div className=" flex items-center justify-center border-gray-100 py-2 pl-3 pr-10 hover:bg-gray-100">
                    <ul className="border-l-2  border-gray-500 pl-4 text-sm font-[300]  transition-all duration-200 space-y-1">
                        <li className="text-lg font-[600]">I&apos;ve had experiences with</li>
                        <li>HTML</li>
                        <li>CSS Preprocessors & Tailwind CSS & Bootstrap</li>
                        <li>Javascript </li>
                        <li>ReactJS</li>
                        <li>NextJs</li>
                        <li>Typescript</li>
                        <li>GIT, GitHub, Bitbucket</li>

                    </ul>
                </div>

                <div className=" flex items-center justify-center border-gray-100 py-2 pl-3 pr-10   hover:bg-gray-100">
                    <ul className="border-l-2 border-gray-500 pl-4 text-sm font-[300]  transition-all duration-200 space-y-1">
                        <li className="text-lg font-[600]">The Programming Language I use</li>
                        <li>C programing</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Express</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className=" flex items-center justify-center border-gray-100 py-2 pl-3 pr-10 hover:bg-gray-100">
                    <ul className="border-l-2 border-gray-500 pl-4 text-sm font-[300]  transition-all duration-200 space-y-1">
                        <li className="text-lg font-[600]">I&apos;ve had experiences with</li>
                        <li>Firebase Database, MongoDB, Convex</li>
                        <li>Authentication, OAuth, Clark</li>
                        <li>REST API, Redux, Webhooks, Prisma</li>
                        <li>Material UI, Shadcn UI</li>
                        <li>Uploadthing, Mux, Stripe</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default About;