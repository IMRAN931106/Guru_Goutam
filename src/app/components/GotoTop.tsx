"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { IoMdArrowUp } from 'react-icons/io';

const injectAnimationStyles = () => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes bounce {
            0%, 100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
        }
        .animate-bounce {
            animation: bounce 2s infinite;
        }
    `;
    document.head.appendChild(styleSheet);
};

const GotoTop: React.FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    const handleScroll = useCallback(() => {

        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [])

    const gotoTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Inject animation styles when the component mounts
        injectAnimationStyles();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener and styles on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Remove injected styles
            const styleSheets = document.querySelectorAll('style');
            styleSheets.forEach(sheet => {
                if (sheet.innerText.includes('bounce')) {
                     document.head.removeChild(sheet);
                }
            });
        };
    }, [handleScroll]);

    return (
        <React.Fragment>
            {showButton && (
                <div
                    className={`bg-[#ff6839] p-2 fixed md:bottom-20 bottom-5 md:right-20 right-5 rounded-full text-white cursor-pointer animate-bounce`}
                    onClick={gotoTop}
                >
                    <IoMdArrowUp size={30} />
                </div>
            )}
        </React.Fragment>
    );
};

export default GotoTop;
