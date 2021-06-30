import React, { useEffect, useState } from 'react';
import colors from '../utils/colors';
import Icons from '../utils/Icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    //scroll-to-top classes: fixed, bottom:0, right:0
    return (
        <div className='scroll-to-top'>
            {isVisible && (
                <div onClick={scrollToTop}>
                    <h3 className='flex align-center justify-center pd-10'>
                        <Icons name='IconChevronUp' size={30} color={colors.white} />
                    </h3>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
