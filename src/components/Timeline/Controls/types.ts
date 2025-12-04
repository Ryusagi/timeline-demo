import type { Dispatch, SetStateAction } from 'react';

export type NumberFunc = (val: number) => number;
export interface ControlsProps {
    total: number;
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
}
