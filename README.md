# React Modal

## Usage

```tsx
import useModal, { useModalContext } from '@cyberia-studio/react-modal';

const Dialog: FC = () => {
    const {
        close,
        isOpen,
        open,
        set
    } = useModalContext();

    return <button onClick={close}>Please close me</button>
}

const Page: FC = () => {
    const [modal, modalControls] = useModal();

    const handleShowModal = () => modalControls.set(<Dialog />);

    return (
        <div>
            {modal}
            <h1>Modal block will be teleported to the root or body element</h1>
            <button onClick={handleShowModal}>
        </div>
    )
}

```
