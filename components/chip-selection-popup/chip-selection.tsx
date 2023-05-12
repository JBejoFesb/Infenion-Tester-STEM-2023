import React, { ReactNode, MouseEvent } from 'react';

export interface IChipSelection {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}

const ChipSelection: React.FC<IChipSelection> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    function handleBackdropClick(event: MouseEvent<HTMLButtonElement>) {
        onClose();
    }

    return (
        <div className="modal-container">
            <div className="modal-content">{children}</div>
            <button onClick={handleBackdropClick}>Confirm Selection</button>
        </div>
    );
}

export default ChipSelection;
