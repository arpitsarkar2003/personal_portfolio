import { useState, useEffect } from 'react';

const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button 
            onClick={toggleTheme}
            className='texto'
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ToggleTheme;
