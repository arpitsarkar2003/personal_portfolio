import { motion } from "framer-motion"


const Header = () => {
    return (
        <div className="">
            <div className="md:flex hidden justify-between items-center">
                <motion.div
                    animate={{ x: 100 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <h1 className="text-[36px] font-[700]">arpit.</h1>
                </motion.div>
                <motion.div
                    animate={{ x: -50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="group">
                    <a href="https://www.linkedin.com/in/arpitsarkar07/"
                        target="_blank"
                        className="font-[500]">hire me.</a>
                    <div className="w-[20px] h-[2px] dark:border-white border border-black group-hover:w-full transition-all duration-200" />
                </motion.div>
            </div>
            <div className="flex md:hidden justify-between items-center">
                <motion.div
                    animate={{ x: -20 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <h1 className="text-[36px] font-[700]">arpit.</h1>
                </motion.div>
                <motion.div
                    animate={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="group">
                    <a href="https://www.linkedin.com/in/arpitsarkar07/"
                        target="_blank" className="font-[500]">hire me.</a>
                    <div className="w-[20px] h-[2px] dark:border-white border border-black group-hover:w-full transition-all duration-200" />
                </motion.div>
            </div>
        </div>

    );
}

export default Header;