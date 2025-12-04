import type { Dispatch, SetStateAction } from 'react';

export interface AnimatedCircleProps {
    names: string[];
    selected: number;
    isRotating: boolean;
    setSelected: Dispatch<SetStateAction<number>>;
    setIsRotating: Dispatch<SetStateAction<boolean>>;
}
