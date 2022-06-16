import React from 'react';

import { StyledButton } from './StyledButton.styled';

const Button = ({ styleClass, onClick, children }) => {
  const handleClick = (event) => onClick(event);

  const myClass = `button ${styleClass}`;
  return (
    <StyledButton type="button" className={myClass} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
