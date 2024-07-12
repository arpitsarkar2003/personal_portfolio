"use client";

import Image from 'next/image';
import React from 'react';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scrolling behavior
        });
    };

    return (
        <button 
            className="fixed bottom-10 right-10"
            onClick={handleScrollToTop}
            title='Scroll to top'
        >
            <Image
                src="https://i.ibb.co/s6qyp7H/logo.jpg"
                alt="Scroll to top"
                width={50}
                height={50}
            />
        </button>
    );
};

export default ScrollToTopButton;
