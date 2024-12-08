import useTypewriter from '@/hooks/useTypewriter';
import React from 'react';


const HomeContent: React.FC = () => {
    const texts = [
        'Full Stack.web(Developer)',
        'Let\'s Innovate Together',
        '<Pixel Magicians />',
    ];
    
    const currentText = useTypewriter(texts);

    return (
        <div className="home-content-container flex justify-center w-full ">
            <div className="lg:text-5xl text-lg font-[700]  mt-4">
                <span className='font-mono'>{currentText}</span>
                <span className="blinking-cursor">_</span>
            </div>
            {/* Add more content here as needed */}
        </div>
    );
}

export default HomeContent;
