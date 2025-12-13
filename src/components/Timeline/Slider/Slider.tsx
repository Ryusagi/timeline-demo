import React, { useState, useEffect, type MouseEvent } from 'react';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Arrow } from '../images';
import type { SliderProps } from './types';
import styles from './Slider.module.scss';
import 'swiper/css';

export const Slider: React.FC<SliderProps> = ({
    name,
    events,
    isVisible,
    isMobile,
}) => {
    // не уверен, но нужен ли тут state? возможно тут хватит ref для хранения инстанса,
    const [swiperInstance, setSwiperInstance] = useState<
        SwiperClass | undefined
    >(undefined);

    const checkHasPrevButton = () =>
        !!swiperInstance &&
        !swiperInstance.isBeginning &&
        !(swiperInstance.activeIndex === 0) &&
        isVisible;

    const checkHasNextButton = () => !swiperInstance?.isEnd && isVisible;

    const [hasNextButton, setHasNextButton] =
        useState<boolean>(checkHasNextButton());
    const [hasPrevButton, setHasPrevButton] =
        useState<boolean>(checkHasPrevButton());

    useEffect(() => {
        swiperInstance?.slideTo(0, 0);
    }, [events]);

    const onSlide = () => {
        setHasNextButton(checkHasNextButton());
        setHasPrevButton(checkHasPrevButton());
    };
    //обработчики нужно обернуть в useCallback
    const onNextClick = (event: MouseEvent) => {
        event.stopPropagation();
        swiperInstance?.slideNext();
    };

    const onPrevClick = (event: MouseEvent) => {
        event.stopPropagation();
        swiperInstance?.slidePrev();
    };

    const slidesPerView = isMobile ? 2 : 4;
    // можно для этого юзать classnames lib
    const arrowNextClassName = `${styles.arrow} ${styles.arrowNext}`;
    const cardClassName = `${styles.card} ${isVisible ? '' : styles.hidden}`;

    return (
        <>
            <div className={styles.container}>
                {isMobile && <div className={styles.title}>{name}</div>}
                <div className={styles.sliderContainer}>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={slidesPerView}
                        onSwiper={setSwiperInstance}
                        onSlideChange={onSlide}
                    >
                        {/*events можно мемоизировать*/}
                        {/*index не используется*/}
                        {events.map(({ year, description }, index) => (
                            // думаю что можно сверстаный слайд вынести в компонент отдельный
                            <SwiperSlide key={year}>
                                <div className={cardClassName}>
                                    <div className={styles.header}>{year}</div>
                                    {description && (
                                        <p className={styles.description}>
                                            {description}
                                        </p>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {hasPrevButton && (
                        <button
                            id={styles.prevButton}
                            className={styles.button}
                            onClick={onPrevClick}
                        >
                            <Arrow className={styles.arrow} />
                        </button>
                    )}
                    {hasNextButton && (
                        <button
                            id={styles.nextButton}
                            className={styles.button}
                            onClick={onNextClick}
                        >
                            <Arrow className={arrowNextClassName} />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};
