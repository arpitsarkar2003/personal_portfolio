import useTypewriter from '@/hooks/useTypewriter';
import React from 'react';


const HomeContent: React.FC = () => {
    const texts = [
        'Front-end.web(Developer)',
        'a-photographer',
        'be-A-Coffee-Lover',
    ];
    
    const currentText = useTypewriter(texts);

    return (
        <div className="home-content-container">
            <div className="text-5xl mt-4">
                <span className='font-mono'>{currentText}</span>
                <span className="blinking-cursor">_</span>
            </div>
            {/* Add more content here as needed */}
        </div>
    );
}

export default HomeContent;
