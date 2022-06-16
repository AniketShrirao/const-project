import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { setInfoModalOpen, setPillarIndex } from '../../redux/slices/RankTable';

import { CustomSubHeaderLabel } from './Rankingtable.styled';
import { ReactComponent as InfoCircle } from '../../assets/images/svgs/info.svg';

const CustomSubHeaderGroup = (props) => {
  const isInfoModalOpen = useSelector(state => state.RankTable.isInfoModalOpen);
  const dispatch = useDispatch();

  const handleInfoClick = (e) => {
    const indexValue = e.target.closest('.ag-react-container').parentElement.attributes['col-id'].value;
    dispatch(setPillarIndex(indexValue));
    dispatch(setInfoModalOpen(!isInfoModalOpen));
  }

  return (
    <div className="ag-header-group-cell-label">
      <CustomSubHeaderLabel className="customSubHeaderLabel">
        <p>{props.displayName}</p>
        <InfoCircle
          onClick={(e) => handleInfoClick(e)}
          width={14}
          height={14}
        />
      </CustomSubHeaderLabel>
    </div>
  );
};

export default CustomSubHeaderGroup;