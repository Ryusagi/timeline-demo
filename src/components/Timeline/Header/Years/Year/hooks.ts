import { useState, useEffect } from 'react';
export const useYearChange = (newYear: number) => {
    const [currentYear, setCurrentYear] = useState<number>(newYear);

    useEffect(() => {
        if (newYear > currentYear) {
            setCurrentYear(currentYear + 1);
        }
        if (newYear < currentYear) {
            setCurrentYear(currentYear - 1);
        }
    }, [newYear, currentYear]);

    return currentYear;
};
