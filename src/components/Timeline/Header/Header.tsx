import React, { type FC, lazy, Suspense, useMemo } from 'react';
import { HeaderProps } from './types';
import type { AnimatedCircleProps } from './AnimatedCircle';
import type { YearsProps } from './Years';
import styles from './Header.module.scss';

const AnimatedCircle = lazy<FC<AnimatedCircleProps>>(() =>
    import('./AnimatedCircle').then(module => ({
        default: module.AnimatedCircle,
    }))
);

const Years = lazy<FC<YearsProps>>(() =>
    import('./Years').then(module => ({
        default: module.Years,
    }))
);

export const Header: FC<HeaderProps> = ({
    data,
    selected,
    isRotating,
    setSelected,
    setIsRotating,
    isMobile = false,
}) => {
    const { startYear, endYear } = data[selected];
    const names = useMemo(() => data.map(({ name }) => name), [data]);
    const isDesktop = !isMobile;

    return (
        <Suspense fallback={<div>Идет загрузка...</div>}>
            {isDesktop ? (
                <>
                    <div className={styles.circle} />
                    <Years startYear={startYear} endYear={endYear} />
                    <AnimatedCircle
                        names={names}
                        selected={selected}
                        isRotating={isRotating}
                        setSelected={setSelected}
                        setIsRotating={setIsRotating}
                    />
                </>
            ) : (
                <Years startYear={startYear} endYear={endYear} />
            )}
        </Suspense>
    );
};
