import React, { type FC } from 'react';
import { Year } from './Year';
import type { YearsProps } from './types';
import styles from './Years.module.scss';

export const Years: FC<YearsProps> = ({ startYear, endYear }) => {
    return (
        <div className={styles.container}>
            <Year year={startYear} color="blue" />
            <Year year={endYear} color="pink" />
        </div>
    );
};
