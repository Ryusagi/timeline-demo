import type { Dispatch, SetStateAction } from 'react';

export interface MobileButtonsProps {
    total: number;
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
    setSliderHide: Dispatch<SetStateAction<boolean>>;
}
