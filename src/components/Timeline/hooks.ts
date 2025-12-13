import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint = 768, height = 530) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const newValue =
                window.innerWidth < breakpoint || window.innerHeight < height;
            setIsMobile(newValue);
        };

        checkDevice();
        //  тут лучше подойдет Window.matchMedia(), он дернет обработчик в нужный момент
        // если же есть причины использовать resize, то нужно делать debounce или thorttle
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, [breakpoint]);

    return isMobile;
};
