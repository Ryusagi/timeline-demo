import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const newValue = window.innerWidth < breakpoint;
            setIsMobile(newValue);
        };

        checkDevice();

        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, [breakpoint]);

    return isMobile;
};
