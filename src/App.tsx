import React from 'react';
import { Timeline, ErrorBoundary } from './components';
import { exampleData } from './const';
import styles from './App.module.scss';

const App: React.FC = () => (
    <ErrorBoundary>
        <div className={styles.container}>
            <Timeline data={exampleData} />
        </div>
    </ErrorBoundary>
);

export default App;
