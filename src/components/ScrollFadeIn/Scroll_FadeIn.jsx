import React from 'react';
import { useEffect, useRef } from 'react';

export default function ScrollFadeIn({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (ref.current) {
                    if (entry.isIntersecting) {
                        // Fade in when entering viewport
                        ref.current.classList.remove('opacity-0', 'translate-y-5');
                        ref.current.classList.add('opacity-100', 'translate-y-0');
                    } else {
                        // Fade out when leaving viewport
                        ref.current.classList.remove('opacity-100', 'translate-y-0');
                        ref.current.classList.add('opacity-0', 'translate-y-5');
                    }
                }
            },
            { 
                threshold: 0.2,
                rootMargin: '-50px'
            }
        );

        // Capture the current ref value
        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Use the captured value in cleanup
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className='opacity-0 translate-y-10 transition-all duration-500 ease-out'>
            {children}
        </div>
    );
}