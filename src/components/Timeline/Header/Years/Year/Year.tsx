import React, { type FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useYearChange } from './hooks';
import { YearProps } from './types';
import styles from './Year.module.scss';

export const Year: FC<YearProps> = ({ year, color }) => {
    const currentYear = useYearChange(year);
    const animationRef = useRef<(value: number) => void>();
    const currentDateRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        animationRef.current = gsap.quickTo(
            currentDateRef.current,
            'textContent',
            {
                duration: 0.8,
                ease: 'power2.out',
                snap: { textContent: 1 },
            }
        );
    }, []);

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current(year);
        }
    }, [currentYear]);

    const colorClassName = color === 'pink' ? styles.pink : styles.blue;
    const className = `${styles.container} ${colorClassName}`;

    return (
        <div ref={currentDateRef} className={className}>
            {currentYear}
        </div>
    );
};
