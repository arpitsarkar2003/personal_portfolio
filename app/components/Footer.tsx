"use client";

import { motion } from "framer-motion"

const Footer = () => {
    return (
        <div className="">
            <div className="hidden md:flex justify-between items-center">
                <motion.div
                    animate={{ x: 100 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <a href="/" className="text-[36px] font-[700] cursor-help">arpit.</a>
                </motion.div>
                <motion.div
                    animate={{ x: -50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="group cursor-default">
                    <h1 className="font-[300]">crafted by <span className="font-[700]">me.</span></h1>
                    <div className="w-[20px] h-[2px] dark:border-white border border-black group-hover:w-full transition-all duration-200" />
                </motion.div>
            </div>
            <div className="flex md:hidden justify-between items-center mx-10">
                <a href="/" className="text-[36px] font-[700] cursor-help">arpit.</a>
                <div>
                    <h1 className="font-[300]">crafted by <span className="font-[700]">me.</span></h1>
                    <div className="w-[20px] h-[2px] dark:border-white border border-black group-hover:w-full transition-all duration-200" />
                </div>
            </div>
        </div>
    );
}

export default Footer;