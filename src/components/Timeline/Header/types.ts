import type { Dispatch, SetStateAction } from 'react';
import type { TimelinePeriod } from '@src/types';

export interface HeaderProps {
    data: TimelinePeriod[];
    isMobile?: boolean;
    selected: number;
    isRotating: boolean;
    setSelected: Dispatch<SetStateAction<number>>;
    setIsRotating: Dispatch<SetStateAction<boolean>>;
}
