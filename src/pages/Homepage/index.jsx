import React from 'react';

import { rankTableOptions, backgroundColors } from '../../data/rankingtable/options';
import mapOptions from '../../data/worldmap/options';
import WorldMap from '../../components/worldmap/index';
import RankingTable from '../../components/rankingtable';
import ErrorBoundary from '../../components/utilities/ErrorBoundary/ErrorBoundary';

const Home = () => {

  return (
    <>
      <ErrorBoundary>
        <WorldMap mapOptions={mapOptions} />      
      </ErrorBoundary>
      <ErrorBoundary>
        <RankingTable rankTableOptions={rankTableOptions} backgroundColors={backgroundColors} />
      </ErrorBoundary>        
    </>
  );
};

export default Home;
