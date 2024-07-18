"use client";

import Image from 'next/image';
import React from 'react';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button 
            className="fixed hidden md:block bottom-12 right-[48.5%] hover:scale-110 transition-all duration-200 hover:bg-gray-50 rounded-full"
            onClick={handleScrollToTop}
            title='Scroll to top'
        >
            <Image
                src="https://i.ibb.co/s6qyp7H/logo.jpg"
                alt="Scroll to top"
                width={50}
                height={50}
                className='rounded-full'
            />
        </button>
    );
};

export default ScrollToTopButton;
