import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PillarTable from '../../components/pillartable';
import PolarChart from '../../components/polarchart';
import ErrorBoundary from '../../components/utilities/ErrorBoundary/ErrorBoundary';
import spiderOptions from '../../data/spiderdiagram/options';

const CountryDetail = ({ match }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ErrorBoundary>
        <PillarTable match={match} />
      </ErrorBoundary>    
      <ErrorBoundary>
        <PolarChart match={match} spiderOptions={spiderOptions} />
      </ErrorBoundary>    
    </>
  );
};

export default CountryDetail;
