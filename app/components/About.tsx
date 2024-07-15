"use client";

import { motion } from "framer-motion"
import Image from "next/image";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";


const About = () => {
    return (
        <div className="mx-20">
            <div className="flex justify-end pt-12">
                <motion.div
                    animate={{ x: -100 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="group">
                    <h1 className="text-[36px] font-[700]">about me.</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
                </motion.div>
            </div>

            <div className="flex mx-32 mt-10 justify-center group">
                <div>
                    <Image width={300} height={300} src="/hero2.jpeg" alt="Arpit_Sarkar" className="rounded-full opacity-50 group-hover:opacity-100  transition-opacity duration-300" />
                </div>
                <div className="mx-16 w-[50vw] space-y-5">
                    <h1 className="text-[32px] font-[500]">Arpit Sarkar</h1>
                    <p className="text-wrap text-base font-[300]">
                        As a Front-End Web Developer, I excel in creating stunning, responsive websites using HTML, CSS (especially Tailwind CSS), and JavaScript/React.js for dynamic interfaces. I also handle backend tasks with MongoDB/Express and excel in API integration. My toolkit includes advanced tools like Firebase, Redux, and Material UI/Icons for high-performance web apps.
                    </p>
                    <div className="flex space-x-3 items-center">
                        <Button variant="outline">
                            <a href="https://www.linkedin.com/in/arpitsarkar07/" target="_blank" className="flex items-center space-x-1">
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


            <div className="flex justify-between mx-44 mt-10">
                <div className="flex border dark:bg-white/70 dark:text-black border-slate-100 rounded-md hover:bg-slate-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="1.svg" />
                    <div className="border-l-2 pl-2 border-slate-500">
                        <h1>weav</h1>
                        <p>iwabev,wevwev,ewvwe & weg</p>
                    </div>
                </div>
                <div className="flex border dark:bg-white/70 dark:text-black border-slate-100 rounded-md hover:bg-slate-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="2.svg" />
                    <div className="border-l-2 pl-2 border-slate-500">
                        <h1>weav</h1>
                        <p>iwabev,wevwev,ewvwe & weg</p>
                    </div>
                </div>
                <div className="flex border dark:bg-white/70 dark:text-black border-slate-100 rounded-md hover:bg-slate-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="3.svg" />
                    <div className="border-l-2 pl-2 border-slate-500">
                        <h1>weav</h1>
                        <p>iwabev,wevwev,ewvwe & weg</p>
                    </div>
                </div>
                <div className="flex border dark:bg-white/70 dark:text-black border-slate-100 rounded-md hover:bg-slate-50 hover:shadow-sm cursor-default py-1 px-3 space-x-2">
                    <img src="4.svg" />
                    <div className="border-l-2 pl-2 border-slate-500">
                        <h1>weav</h1>
                        <p>iwabev,wevwev,ewvwe & weg</p>
                    </div>
                </div>
            </div>


            <div className="flex justify-between mx-[14rem] mt-16 ">
                <div className="border border-slate-100 py-2 pl-3 pr-24 ">
                    <ul className="border-l-2 border-slate-500 pl-4 text-sm font-[300] space-y-1">
                        <li className="text-xl font-[600]">I&apos;ve had experiences with</li>
                        <li>Firebase Database</li>
                        <li>MySQL Database</li>
                        <li>GIT, GitHub, Bitbucket</li>
                        <li>Coding PHP</li>
                        <li>Figma, Adobe XD, Sketch</li>
                        <li>CSS Preprocessors</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                <div className="border border-slate-100 py-2 pl-3 pr-24  ">
                    <ul className="border-l-2 border-slate-500 pl-4 text-sm font-[300] space-y-1">
                        <li className="text-xl font-[600]">I&apos;ve had experiences with</li>
                        <li>Firebase Database</li>
                        <li>MySQL Database</li>
                        <li>GIT, GitHub, Bitbucket</li>
                        <li>Coding PHP</li>
                        <li>Figma, Adobe XD, Sketch</li>
                        <li>CSS Preprocessors</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                <div className="border border-slate-100 py-2 pl-3 pr-24  ">
                    <ul className="border-l-2 border-slate-500 pl-4 text-sm font-[300] space-y-1">
                        <li className="text-xl font-[600]">I&apos;ve had experiences with</li>
                        <li>Firebase Database</li>
                        <li>MySQL Database</li>
                        <li>GIT, GitHub, Bitbucket</li>
                        <li>Coding PHP</li>
                        <li>Figma, Adobe XD, Sketch</li>
                        <li>CSS Preprocessors</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default About;