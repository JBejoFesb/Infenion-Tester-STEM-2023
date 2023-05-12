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
            <button className=' bg-green-700 py-2 w-full rounded-lg text-lg font-semibold text-white hover:bg-orange-600 hover:scale-x-105 transition-colors duration-100' onClick={handleBackdropClick}>Confirm Selection</button>
        </div>
    );
}

export default ChipSelection;
