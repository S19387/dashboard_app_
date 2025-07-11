// src/components/Modal/Modal.jsx
import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
