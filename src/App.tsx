import React from 'react';
import { Timeline } from './components';
import { exampleData } from './const';
import styles from './App.module.scss';

const App: React.FC = () => (
    <div className={styles.container}>
        <Timeline data={exampleData} />
    </div>
);

export default App;
