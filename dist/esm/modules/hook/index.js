import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { Provider } from '../context';
import { names } from '../events';
export const useModal = (options) => {
    const [isOpen, setOpen] = useState(false);
    const [content, setContent] = useState();
    const close = useCallback(() => {
        setOpen(false);
        if (options && options.closeDelay) {
            setTimeout(() => {
                setContent(null);
            }, options.closeDelay);
        }
        else {
            setContent(null);
        }
    }, []);
    const __setState = useCallback((options) => {
        const [newContent, newOpen] = Array.isArray(options) && typeof options[1] === 'boolean' ? options : [options, true];
        setContent(newContent);
        setOpen(newOpen);
    }, []);
    const set = useCallback((contentNode) => __setState(typeof contentNode === 'function' ? contentNode(content, isOpen) : contentNode), [isOpen, content, __setState]);
    useEffect(() => {
        const listener = (event) => {
            switch (event.code) {
                case 'Escape':
                    close();
                    break;
            }
        };
        const handleOpen = ((event) => setOpen(event.detail.open));
        document.addEventListener('keydown', listener);
        document.addEventListener(names.open, handleOpen);
        return () => {
            document.removeEventListener('keydown', listener);
            document.removeEventListener(names.open, handleOpen);
        };
    }, []);
    const Modal = useMemo(() => _jsx(Provider, { modal: { close, isOpen, open: setOpen, set, styles: options }, children: content }), [isOpen, content]);
    return [Modal, { set, open: setOpen, close, isOpen }];
};
