import { React, useEffect, useLayoutEffect, useState, useRef, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import proj4 from 'proj4';

import { formatData, doubleClicker, resetDoubleClick, redirectToDetailPage } from './MapLogic';
import { debounce, getGlobalData } from '../../utils/helperFunctions';
import { RANK_OUT_OF,SCORE_OUT_OF, SCORE } from '../../utils/Constants';
import Headings from '../utilities/Headings';
import MapFilter from './MapFilter';
import theme from '../../themes';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Wrapper from '../wrapper';

import { MapSection } from './Map.styled';
import mapDataWorld from '../../data/worldmap/worldGeoData.json';

// setting projection co-ordinates system
if (typeof window !== 'undefined') {
  window.proj4 = window.proj4 || proj4;
}

const WorldMap = ({ history, mapOptions }) => {
  const [worldMapData, setWorldMapData] = useState([]);
  const [allowChartUpdate, setAllowChartUpdate] = useState(false);
  const hoverTitle = useSelector(state => state.worldMap.hoverTitle);
  const measure = useSelector((state) => state.worldMap.measure);
  const globalScore = useMemo(() => getGlobalData(SCORE), []);
  
  // zoom map on mobile devices
  const chartComponent = useRef(null);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setAllowChartUpdate(true);
    const scoreData = formatData(measure);
    if (scoreData) setWorldMapData(scoreData);
  }, [measure]);

  function setSizeAndView() {
    if (width < 768 && chartComponent.current) {
      chartComponent?.current?.chart.setSize(width, height - 50);
      chartComponent?.current?.chart?.mapView.setView(
        [4800, 8200], // lat-long to zoom on
        -2 // zoom size
      );
    }
  }

  const debouncedSetView = useRef(debounce(() => setSizeAndView(), 300)).current;

  // setting chart Height from resize events
  useLayoutEffect(() => {
    debouncedSetView();
  }, []);

  // passing formatted data to the highcharts library through options object
  if (worldMapData.length > 0) {
    mapOptions = {
      ...mapOptions,
      series: [
        {
          data: worldMapData,

          mapData: mapDataWorld,
          states: {
            hover: {
              color: theme.colors.PRIMARY_COLOR,
            },
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}',
          },
          events: {
            click(e) {
              if (doubleClicker.clickedOnce === true && doubleClicker.timer) {
                resetDoubleClick();
              } else {
                doubleClicker.clickedOnce = true;
                doubleClicker.timer = setTimeout(() => {
                  resetDoubleClick();
                  redirectToDetailPage(e, history);
                }, doubleClicker.timeBetweenClicks);
              }
            },
          },
        },
      ],
      tooltip: {
        headerFormat:
          `<span class='map-hovered-tooltip' ">${hoverTitle}</span><br/>`,
      },
    };
  }

  return (
    <MapSection className="map-section">
      <Wrapper width="100%">
        <Headings className='world-map-heading' heading='World Map' />
        <p className='world-map-info'>This world map shows the overall Consumer Protection and Empowerment Index score for each of the {RANK_OUT_OF} countries. You can also view the country score for each of the five pillars. For 2021 the average overall global score for the index is {Math.round(globalScore)} / {SCORE_OUT_OF}. Hover over and click on countries to view summary country information and comparison options.</p>
        <MapFilter />
        <HighchartsReact
          allowChartUpdate={allowChartUpdate}
          constructorType="mapChart"
          highcharts={Highcharts}
          ref={chartComponent}
          options={mapOptions}
        />
      </Wrapper>
    </MapSection>
  );
};

export default withRouter(WorldMap);