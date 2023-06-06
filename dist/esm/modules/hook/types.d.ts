import { ReactNode } from 'react';
import { StateValue } from '../../types';
import { ModalProperties } from '../component/types';
export type Callback = (content: ReactNode) => void;
export type StateNode = [ReactNode, boolean] | ReactNode;
export type Set = (contentNode: StateNode | ((prevContent: ReactNode, prevOpen: boolean) => StateNode), callback?: Callback) => void;
export type Close = () => void;
export type SetOpen = (value: StateValue<boolean>) => void;
export interface ModalControls {
    set: Set;
    open: SetOpen;
    close: Close;
    isOpen: boolean;
}
export type UseModal = (options?: ModalProperties) => [ReactNode, ModalControls];
