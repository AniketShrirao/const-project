import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';

import { setOpenModal, setModalData } from '../../redux/slices/RankTable';

import { CountryCell } from './Rankingtable.styled';
import { ReactComponent as FaTimes } from '../../assets/images/svgs/times.svg';

const ResponsiveOpenModelBtn = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const dispatch = useDispatch();

  const buttonClicked = () => {
    dispatch(setOpenModal(true));
    dispatch(setModalData(props.data));
  };

  return (
    <CountryCell className='ag-grid-country-cell'>
      <Link className='ag-grid-country-names' to={`/country-profile/${cellValue}/`} title={cellValue}>{cellValue}</Link>
      <FaTimes
        onClick={() => buttonClicked()}
        width={12.25}
        height={14}
      />
    </CountryCell>
  );
};

export default React.memo(ResponsiveOpenModelBtn);
