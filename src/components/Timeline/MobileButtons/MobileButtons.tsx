import React, { type FC, useEffect } from 'react';
import type { MobileButtonsProps } from './types';
import styles from './MobileButtons.module.scss';

export const MobileButtons: FC<MobileButtonsProps> = ({
    total,
    selected,
    setSelected,
    setSliderHide,
}) => {
    useEffect(() => {
        setSliderHide(true);
        setTimeout(() => {
            setSliderHide(false);
        }, 100);
    }, [selected]);

    return (
        <div className={styles.container}>
            {Array(total)
                .fill('')
                .map((_, index) => {
                    const className = `${selected === index ? styles.selected : ''} ${styles.button}`;
                    const onClick = () => {
                        setSelected(index);
                    };
                    return (
                        <button
                            className={className}
                            key={index}
                            onClick={onClick}
                        />
                    );
                })}
        </div>
    );
};
