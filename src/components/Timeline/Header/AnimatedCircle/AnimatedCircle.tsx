import React, { type FC, Fragment, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from './Button';
import { useGetAngle } from './hooks';
import { AnimatedCircleProps } from './types';
import styles from './AnimatedCircle.module.scss';

export const AnimatedCircle: FC<AnimatedCircleProps> = ({
    names,
    selected,
    setSelected,
    setIsRotating,
    isRotating,
}) => {
    const containerRef = useRef(null);
    const rotationAngle = useGetAngle(selected, names.length);
    const [initialRotation, setInitialRotation] = useState<boolean>(true);

    useEffect(() => {
        if (initialRotation) {
            setInitialRotation(false);
        } else {
            setIsRotating(true);
        }

        gsap.to(containerRef.current, {
            rotate: rotationAngle,
            duration: 1.2,
            ease: 'none',
            transformOrigin: 'center center',
            onComplete: () => {
                setIsRotating(false);
            },
        });
    }, [rotationAngle]);

    return (
        <>
            <div className={styles.line} />
            <div className={styles.circle} ref={containerRef}>
                {names.map((text, index) => {
                    const position = index === 0 ? names.length - 1 : index - 1;
                    const angle = (position / names.length) * 2 * Math.PI;
                    const x = Math.cos(angle) * 265;
                    const y = Math.sin(angle) * 265;

                    return (
                        <Fragment key={text}>
                            <Button
                                text={text}
                                value={index + 1}
                                x={x}
                                y={y}
                                isRotating={isRotating}
                                rotateAngle={rotationAngle}
                                isSelected={selected === index}
                                onClick={() => {
                                    setSelected(index);
                                }}
                            />
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
};
