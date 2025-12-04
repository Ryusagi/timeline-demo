import React, { type FC, useState } from 'react';
import { Header } from './Header';
import { Slider } from './Slider';
import { Controls } from './Controls';
import { MobileButtons } from './MobileButtons';
import { useIsMobile } from './hooks';
import type { TimelineProps } from './types';
import styles from './Timeline.module.scss';

export const Timeline: FC<TimelineProps> = ({ data }) => {
    const [selected, setSelected] = useState<number>(0);
    const [isRotating, setIsRotating] = useState<boolean>(false);
    const isMobile = useIsMobile();
    const isSliderVisible = !isRotating;
    if (data.length === 0) {
        return <div className={styles.emptyData}>Empty data !!!</div>;
    }

    const { events, name } = data[selected];

    return (
        <div className={styles.container}>
            <div className={styles.headerText}>Исторические даты</div>
            <Header
                data={data}
                selected={selected}
                isRotating={isRotating}
                setSelected={setSelected}
                isMobile={isMobile}
                setIsRotating={setIsRotating}
            />
            <Slider
                name={name}
                events={events}
                isMobile={isMobile}
                isVisible={isSliderVisible}
            />
            <Controls
                total={data.length}
                selected={selected}
                setSelected={setSelected}
            />
            {isMobile && (
                <MobileButtons
                    total={data.length}
                    selected={selected}
                    setSelected={setSelected}
                    setSliderHide={setIsRotating}
                />
            )}
        </div>
    );
};
