import type { TimelineEvent } from "@src/types";

export interface SliderProps {
    events: TimelineEvent[];
    isVisible: boolean;
    isMobile: boolean;
}