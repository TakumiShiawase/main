import React from 'react';

const BookModal = ({ isOpen, onClose, children }) => {
  const modalRef = React.useRef();

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" ref={modalRef} onClick={handleOverlayClick}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default BookModal;