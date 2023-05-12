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

    function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">{children}</div>
        </div>
    );
}

export default ChipSelection;
