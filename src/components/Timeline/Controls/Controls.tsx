import React, { type FC } from 'react';
import { Arrow } from '../images';
import type { ControlsProps, NumberFunc } from './types';
import styles from './Controls.module.scss';

export const Controls: FC<ControlsProps> = ({
    total,
    selected,
    setSelected,
}) => {
    const value = selected + 1;
    const isNextDisabled = selected === total - 1;
    const isPrevDisabled = selected === 0;

    const prevStateFunc: NumberFunc = prevSelected => prevSelected - 1;
    const nextStateFunc: NumberFunc = prevSelected => prevSelected + 1;

    const onClickPrev = () => {
        if (isPrevDisabled) return;
        setSelected(prevStateFunc);
    };

    const onClickNext = () => {
        if (isNextDisabled) return;
        setSelected(nextStateFunc);
    };

    const rightArrowClassName = `${styles.rightArrow} ${styles.arrow}`;

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                0{value}/0{total}
            </div>
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.button}
                    onClick={onClickPrev}
                    disabled={isPrevDisabled}
                >
                    <Arrow className={styles.arrow} />
                </button>
                <button
                    className={styles.button}
                    onClick={onClickNext}
                    disabled={isNextDisabled}
                >
                    <Arrow className={rightArrowClassName} />
                </button>
            </div>
        </div>
    );
};
