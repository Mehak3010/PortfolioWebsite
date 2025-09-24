import { useState, useEffect } from 'react';

interface RoleItem {
  text: string;
  hasImage: boolean;
  image?: string;
}

interface TypeWriterProps {
  texts: RoleItem[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypeWriter = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000,
  className = ""
}: TypeWriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex].text;
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  const currentRole = texts[currentTextIndex];

  return (
    <span className={className}>
      {currentRole.hasImage && currentRole.image && (
        <img 
          src={currentRole.image} 
          alt="Python" 
          className="inline-block w-6 h-6 mr-2"
        />
      )}
      {currentText}
      <span className={`inline-block w-0.5 h-6 bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
};

export default TypeWriter;