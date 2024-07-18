"use client";

import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import Navbar from "@/components/Navbar";
import ToggleTheme from "@/components/ToggleTheme";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { Dice1 } from "lucide-react";

const Home = () => {
    return (
        <div>
            <div className="mt-12 mx-20">
                <Header />
                <div className="hidden md:block">
                    <motion.div
                        animate={{ x: 50 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    ><p className="text-sm text-center text-wrap mt-20 sm:mt-5">Front-End Web Developer | HTML, CSS, JavaScript/React.js | MongoDB/Express | API Integration | Passionate about crafting high-performance web apps with Firebase, Redux, and Material UI/Icons. Let&apos;s innovate together!</p></motion.div>
                </div>
                <div className="block md:hidden">
                    <p className="text-sm text-center text-wrap mt-20 sm:mt-5">Front-End Web Developer | HTML, CSS, JavaScript/React.js | MongoDB/Express | API Integration | Passionate about crafting high-performance web apps with Firebase, Redux, and Material UI/Icons. Let&apos;s innovate together!</p>
                </div>

                <div className="flex justify-between items-center md:mt-[25vh] mt-10">
                    <Navbar />
                    <HomeContent />
                    <div className="hidden lg:block">
                        <ToggleTheme />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;