import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import { Modal } from '../component';
import { getBlock } from '../dom';
import { ContextValue, ProviderProps } from './types';

const Context = React.createContext<ContextValue | null>(null);

export const Provider: FC<ProviderProps> = ({ modal, children }) =>
    ReactDOM.createPortal(
        <Context.Provider value={modal}>
            <Modal>{children}</Modal>
        </Context.Provider>,
        getBlock()
    );

export const useModalContext = () => {
    const modal = React.useContext(Context);

    if (!modal) throw new Error('Modal context/dialog usage ouside of modal hook');

    return modal;
};
