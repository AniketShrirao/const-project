import React from 'react';

import { ReactComponent as ResetIcon } from '../../../assets/images/svgs/redo-alt-solid.svg';
import StyledResetIcon from './StyledResetIcon.styled';

const ResetButton = ({ resetActive, onReset }) => {

  const resetFilters = () => onReset();

  return (
    <StyledResetIcon
      className={`reset ${resetActive}`}
      onKeyPress={null}
      onClick={resetFilters}
    >
      <ResetIcon
        width={20}
        height={20}
        className="reset" />
    </StyledResetIcon>
  )
}

export default ResetButton;
