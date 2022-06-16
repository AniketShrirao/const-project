import React, { useEffect } from 'react';

import StyledModal from './StyledResponsiveModal.styled';

const CommonModal = ({ onRequestClose, children, isPopup = false, styleClass = '', isRankTableModal = false }) => {

  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible';
    };
  },[]);

  const closePopup = (e) => {
    if (e.target.classList.contains('modal__backdrop'))
      onRequestClose();
  }

  return (
    <StyledModal>
      <div className="modal__backdrop" onKeyPress={null} onClick={isPopup ? (e) => closePopup(e) : null}>
        <div className={`${styleClass} modal__container`}>
          {isRankTableModal ? (<div className='modal__rank-table'>
            {children}
          </div>) : (children)}
        </div>
      </div>
    </StyledModal>
  );
};

export default CommonModal;
