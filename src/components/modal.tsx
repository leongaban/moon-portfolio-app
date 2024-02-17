import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen
    ? 'fixed inset-0 flex items-center justify-center z-50'
    : 'hidden';
  const overlayClass = isOpen
    ? 'modal-overlay absolute inset-0 bg-gray-900 opacity-50'
    : 'hidden';

  return (
    <div className={modalClass}>
      <div className={overlayClass} onClick={onClose}></div>
      <div className="modal-container bg-white w-96 mx-auto rounded-lg shadow-lg z-50 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Modal;
