import { ReactNode } from 'react';
import { ContextValue } from '../context/types';
export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
}
export interface ModalProperties {
    closeDelay?: number;
}
export type ModalOptions = ModalProperties & ModalLogic;
export type ModalLogic = ContextValue;
