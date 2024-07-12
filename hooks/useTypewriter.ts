import { useState, useEffect } from 'react';

const useTypewriter = (
  texts: string[], 
  typingSpeed: number = 300, 
  pauseDuration: number = 1000
): string => {
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[textIndex];
            const updatedText = isDeleting
                ? fullText.substring(0, charIndex - 1)
                : fullText.substring(0, charIndex + 1);

            setCurrentText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setCharIndex(0);
            } else {
                setCharIndex((prevCharIndex) => (isDeleting ? prevCharIndex - 1 : prevCharIndex + 1));
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseDuration]);

    return currentText;
};

export default useTypewriter;
