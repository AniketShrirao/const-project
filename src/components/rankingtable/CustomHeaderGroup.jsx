import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import {
  setExpandState,
  setInfoModalOpen,
  setPillarIndex,
} from '../../redux/slices/RankTable';

import { CustomHeaderLabel } from './Rankingtable.styled';

import { ReactComponent as CaretLeft } from '../../assets/images/svgs/arrow-left.svg';
import { ReactComponent as CaretRight } from '../../assets/images/svgs/arrow-right.svg';
import { ReactComponent as InfoCircle } from '../../assets/images/svgs/info.svg';

const CustomHeaderGroup = (props) => {
  const expandState = useSelector((state) => state.RankTable.expandState);
  const isInfoModalOpen = useSelector(
    (state) => state.RankTable.isInfoModalOpen
  );
  const dispatch = useDispatch();

  const expandOrCollapse = () => {
    const currentState = props.columnGroup
      .getOriginalColumnGroup()
      .isExpanded();
    const groupNames = ['0', '1', '2', '3', '4'];
    groupNames.forEach((groupId) => {
      props.columnGroup.gridOptionsWrapper.gridOptions.columnApi.setColumnGroupOpened(
        groupId,
        false
      );
    });
    props.setExpanded(!currentState);
  };

  const syncExpandButtons = () => {
    dispatch(
      setExpandState(
        props.columnGroup.getOriginalColumnGroup().isExpanded()
          ? 'expanded'
          : 'collapsed'
      )
    );
  };

  const handleInfoClick = (e) => {
    const indexValue = e.target.closest('.ag-react-container').parentElement
      .attributes['col-id'].value;
    dispatch(setPillarIndex(parseInt(indexValue, 10)));
    dispatch(setInfoModalOpen(!isInfoModalOpen));
  };

  useEffect(() => {
    props.columnGroup
      .getOriginalColumnGroup()
      .addEventListener('expandedChanged', syncExpandButtons);
    syncExpandButtons();

    return () => {
      props.columnGroup
        .getOriginalColumnGroup()
        .removeEventListener('expandedChanged', syncExpandButtons);
    };
  }, []);

  return (
    <div className="ag-header-group-cell-label">
      <CustomHeaderLabel className="customHeaderLabel">
        {props.displayName}
        {!props.columnGroup.getOriginalColumnGroup().isExpanded() && (
          <InfoCircle
            width={14}
            height={14}
            onClick={(e) => handleInfoClick(e)}
          />
        )}
      </CustomHeaderLabel>
      <div
        className={`customExpandButton ${expandState}`}
        onClick={() => expandOrCollapse()}
        onKeyPress={null}
      >
        <CaretLeft
          width={6.5}
          height={17.3}
        />
        <CaretRight
          width={6.5}
          height={17.3}
        />
      </div>
    </div>
  );
};

export default CustomHeaderGroup;
