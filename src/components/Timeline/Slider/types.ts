import type { TimelineEvent } from "@src/types";

export interface SliderProps {
    name: string;
    events: TimelineEvent[];
    isVisible: boolean;
    isMobile: boolean;
}