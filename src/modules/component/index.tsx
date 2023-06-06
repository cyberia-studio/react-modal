import cn from 'classnames';
import React, { useCallback } from 'react';

import { useModalContext } from '../context';
import S from './styles.module.css';
import { ModalProps } from './types';

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(({ children }, ref) => {
    const { close, isOpen } = useModalContext();

    const handleClose = useCallback(() => close(), [close]);

    return (
        <div className={cn(S.block, { [S.open]: isOpen }, 'modal', { modal_open: isOpen })} ref={ref}>
            <div className={cn(S.overlay, 'modal__overlay')} onClick={handleClose} />
            <div className={cn(S.window, 'modal__window')}>{children}</div>
        </div>
    );
});
