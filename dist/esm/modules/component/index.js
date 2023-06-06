import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import React, { useCallback } from 'react';
import { useModalContext } from '../context';
import S from './styles.module.css';
export const Modal = React.forwardRef(({ children }, ref) => {
    const { close, isOpen } = useModalContext();
    const handleClose = useCallback(() => close(), [close]);
    return (_jsxs("div", { className: cn(S.block, { [S.open]: isOpen }, 'modal', { modal_open: isOpen }), ref: ref, children: [_jsx("div", { className: cn(S.overlay, 'modal__overlay'), onClick: handleClose }), _jsx("div", { className: cn(S.window, 'modal__window'), children: children })] }));
});
