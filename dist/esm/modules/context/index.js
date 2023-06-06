import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../component';
import { getBlock } from '../dom';
const Context = React.createContext(null);
export const Provider = ({ modal, children }) => ReactDOM.createPortal(_jsx(Context.Provider, { value: modal, children: _jsx(Modal, { children: children }) }), getBlock());
export const useModalContext = () => {
    const modal = React.useContext(Context);
    if (!modal)
        throw new Error('Modal context/dialog usage ouside of modal hook');
    return modal;
};
