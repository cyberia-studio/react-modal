import React from 'react';
import { FC, useMemo } from 'react';

import { useModalContext } from '../context';
import { DialogProps } from './types';

export const Dialog: FC<DialogProps> = ({ children }) => {
    const modal = useModalContext();

    const content = useMemo(() => {
        if (typeof children === 'function') return children(modal);

        return children;
    }, [children]);

    return <>{content}</>;
};
