import { Link } from 'react-router-dom';
import React from 'react';

const CountryNameRedirect = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const countryName = `/country-profile/${props.data.country}/`;
  return (
    <Link className='ag-grid-country-names' to={countryName} title={countryName}>{cellValue}</Link>
  );
};

export default React.memo(CountryNameRedirect);
