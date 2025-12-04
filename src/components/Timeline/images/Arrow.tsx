import type { FC } from 'react';
import { IconProps } from './types';

export const Arrow: FC<IconProps> = ({ className }) => (
    <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
);
