import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useModalContext } from '../context';
export const Dialog = ({ children }) => {
    const modal = useModalContext();
    const content = useMemo(() => {
        if (typeof children === 'function')
            return children(modal);
        return children;
    }, [children]);
    return _jsx(_Fragment, { children: content });
};
