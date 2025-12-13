import React, { type FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ButtonProps } from './types';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
    text,
    value,
    x,
    y,
    isSelected,
    isRotating,
    rotateAngle,
    onClick,
}) => {
    const buttonRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                rotate: -rotateAngle,
                duration: 0.6,
                ease: 'none',
                transformOrigin: 'center center', // правильный формат
            });
        }
    }, [rotateAngle]);

    useEffect(() => {
        if (!isSelected) {
            gsap.to(buttonRef.current, {
                duration: 0.6,
                width: 6,
                height: 6,
                fontSize: 1,
                backgroundColor: '#42567A',
                ease: 'power2.out',
            });
        } else {
            // зачем тут эти атрибуты менять? если мне не изменяет память, gsap меняет только численные параметры
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            gsap.to(buttonRef.current, {
                // fontSize, width и height менять не стоит, достаточно тяжело будет для браузера, лучше делать через transform scale
                // но там есть хитрость, что нужно трансформировать контейнер и компонент в противофазе, что бы компенсировать искажение
                width: 56,
                height: 56,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 20,
                backgroundColor: 'white',
                border: '1px solid rgba(48, 62, 88, 0.5)',
                duration: 0.6,
                ease: 'power2.out',
            });
        }
    }, [isSelected]);

    const onMouseEnter = () => {
        if (isSelected) return;

        gsap.to(buttonRef.current, {
            width: 56,
            height: 56,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            backgroundColor: 'white',
            border: '1px solid rgba(48, 62, 88, 0.5)',
            duration: 0.6,
            ease: 'power2.out',
        });
    };

    const onMouseLeave = () => {
        if (!isSelected) {
            gsap.to(buttonRef.current, {
                duration: 0.6,
                width: 6,
                height: 6,
                fontSize: 1,
                backgroundColor: '#42567A',
                ease: 'power2.out',
            });
        }
    };
    const className = `${styles.container} ${isSelected ? styles.selected : ''}`;
    const textClassName = `${styles.text} ${isSelected && !isRotating ? styles.textSelected : ''}`;

    return (
        <>
            <button
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                style={{
                    position: 'absolute',
                    // left и top тоже тяжело рендерятся браузером, лучше переписать полсностью на рассчпет transform
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                }}
                ref={buttonRef}
            >
                {value}
                <div className={textClassName}>{text}</div>
            </button>
        </>
    );
};
