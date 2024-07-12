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
            <div className="flex justify-between mt-[30%]">
                <Navbar />
                <HomeContent />
                <ToggleTheme />
            </div>

        </div>
    );
}

export default Home;