"use client";

import { Instagram } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="group mt-[10%] flex flex-col items-center">
                <div className="">
                    <h1 className="text-[36px] font-[700]">contact me.</h1>
                    <div className="flex justify-center">
                        <div className="-w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" />
                    <div className="w-[20px] h-[2px] dark:border-white border-2 border-black group-hover:w-full transition-all duration-200" /> 
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-[7rem] mt-10">
                    <div>
                    <a href="https://www.instagram.com/arpitsarkar16/"><BsInstagram size={30}/></a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/arpitsarkar07/"><BsLinkedin size={30}/></a>
                    </div>
                    <div>
                    <a href="https://github.com/arpitsarkar2003"><BsGithub size={30}/></a>
                    </div>
                    <div>
                    <a href="https://www.facebook.com/arpit.sarkar.988/"><BsFacebook size={30}/></a>
                    </div>
                    <div>
                    <a href="mailto:YfTqM@example.com"><MdEmail size={30}/></a>
                    </div>
                    <div>
                    <a href="tel:+91 7074864547"><FaPhoneAlt size={30}/></a>
                    </div>
                </div>

                <div className="mt-10">
                    <h1>here&apos;s all the links.</h1>
                    <div className="w-[20px] h-[2px] dark:border-white border border-black transition-all duration-200" />
                </div>
            </div>
        </div>
    );
}

export default Contact;