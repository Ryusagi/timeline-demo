import React, { lazy } from 'react';
export const lazyWrapper = (path: string) => {
    const pathArray = path.split('/');
    const importName = pathArray[pathArray.length - 1];
    return lazy(() =>
        import(path).then(module => ({
            default: module[importName],
        }))
    );
};
