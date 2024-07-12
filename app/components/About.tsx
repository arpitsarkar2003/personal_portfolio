"use client";

import { motion } from "framer-motion"


const About = () => {
    return ( 
        <div>
            <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            >
                <h1 className="text-[36px] font-[700]">arpit.</h1>
            </motion.div>
        </div>
     );
}
 
export default About;