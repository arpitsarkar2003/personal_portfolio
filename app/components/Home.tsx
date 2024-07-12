"use client";

import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import Navbar from "@/components/Navbar";
import ToggleTheme from "@/components/ToggleTheme";
// import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div className="mt-12 mx-20">
            <Header />
            <p className="text-sm text-center text-wrap mt-20 sm:mt-5">Front-End Web Developer | HTML, CSS, JavaScript/React.js | MongoDB/Express | API Integration | Passionate about crafting high-performance web apps with Firebase, Redux, and Material UI/Icons. Let&apos;s innovate together!</p>
            <div className="flex justify-between items-center  mt-[25vh] ">
                <Navbar />
                <HomeContent />
                <div className="hidden lg:block">
                    <ToggleTheme />
                </div>
                
            </div>

        </div>
    );
}

export default Home;