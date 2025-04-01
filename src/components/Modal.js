import React from 'react';
import './Modal.css'; // Assuming a separate CSS file for styling

const Modal = ({ title, content, actions }) => {
  // Ensure the modal structure includes a header, body, and footer

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          {/* Content goes here */}

          {content}
        </div>
        <div className="modal-footer">
          {/* Action buttons go here */}

          {actions}
        </div>
      </div>
    </div>
  );
};

export default Modal;
