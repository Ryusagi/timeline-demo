import { useState, useEffect } from 'react';
export const useGetAngle = (index: number, total: number) => {
    const [currentIndex, setCurrentIndex] = useState<number>(index);
    const [angle, setCurrentAngle] = useState<number>(0);

    useEffect(() => {
        if (index !== currentIndex) {
            let newAngle = (currentIndex - index) * (360 / total) + angle;
            setCurrentAngle(newAngle);
            setCurrentIndex(index);
        }
    }, [index]);

    return angle;
};
