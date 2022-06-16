import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';

import { capitalize } from '../../utils/helperFunctions';
import { insertPillarNames, getCountryData, getIncomeData, getRegionData } from './PolarChartLogic';
import { polarChartResetStates, setCountry, setFirstCountry, setIncomeGroup, setRegion } from '../../redux/slices/spiderFilter';
import { SCORE_OUT_OF } from '../../utils/Constants';
import { selectedCountry } from '../../redux/slices/pillarTableCountry';
import SpiderFilter from './SpiderFilter';
import theme from '../../themes';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Wrapper from '../wrapper';

import { SpiderDiagContainer } from './Spider.styled';

HighchartsMore(Highcharts);

const PolarChart = ({ match, spiderOptions }) => {
  const history = useHistory();
  const isPageChange = history.location.pathname;

  const [Response, setResponse] = useState('');
  const [pillarsName, setPillarsName] = useState([]);
  const [firstScoreData, setFirstScoreData] = useState([]);
  const { width } = useWindowDimensions();

  const country = useSelector(state => state.polarChart.country);
  const region = useSelector(state => state.polarChart.region);
  const incomeGroup = useSelector(state => state.polarChart.income_group);
  const firstCountry = useSelector(state => state.polarChart.first_country);
  const selectedValue = useSelector((state) => state.polarChart.filterValue);
  const dispatch = useDispatch();

  // get data from select filter of country,region and income group
  useEffect(() => {
    switch (selectedValue[0]) {
      case 'countries':
        dispatch(setCountry(selectedValue[1]));
        dispatch(setIncomeGroup(''));
        dispatch(setRegion(''));
        break;
      case 'income groups':
        dispatch(setIncomeGroup(selectedValue[1]));
        dispatch(setCountry(''));
        dispatch(setRegion(''));
        break;
      case 'regions':
        dispatch(setRegion(selectedValue[1]));
        dispatch(setCountry(''));
        dispatch(setIncomeGroup(''));
        break;
      default:
        break;
    }
  }, [selectedValue[1]]);

  //  To reset states and filter on page change
  useEffect(() => {
    if (isPageChange) {
      dispatch(setCountry(''));
      dispatch(setRegion(''));
      dispatch(setIncomeGroup(''));
      dispatch(setFirstCountry(''));
      dispatch(polarChartResetStates());
    }
    const countryName = capitalize(match.params.country.replace(/-/g, ' '));
    dispatch(setFirstCountry(countryName));
  }, [firstCountry, isPageChange]);

  //  To set data for spider diagram
  useEffect(() => {
    let score2Data;
    let pillarNames;
    let pillars;
    const [firstPillars, firstCountryDetail] = getCountryData(firstCountry);
    const [scoreData, firstCountyPillars] = insertPillarNames(firstPillars, firstCountry, width);
    dispatch(selectedCountry(firstCountryDetail.pillars));
    setFirstScoreData(scoreData);
    setPillarsName(firstCountyPillars);
    const countryResponse = [
      {
        name: firstCountry,
        data: scoreData,
        pointPlacement: 'on',
        color: theme.colors.PRIMARY_COLOR,
      },
    ];
    if (country) {
      const [selectionPillars, selectionCountryDetail] = getCountryData(country);
      [score2Data, pillarNames] = insertPillarNames(selectionPillars, country, width, firstScoreData, selectedValue);
      dispatch(selectedCountry(selectionCountryDetail.pillars));
      setPillarsName(pillarNames);
      countryResponse.push({
        name: country,
        data: score2Data,
        pointPlacement: 'on',
        color: theme.colors.TERTIARY_COLOR,
      });
    } else if (region) {
      pillars = getRegionData(region);
      [score2Data, pillarNames] = insertPillarNames(pillars, 'region', width, firstScoreData);
      setPillarsName(pillarNames);
      countryResponse.push({
        name: region,
        data: score2Data,
        pointPlacement: 'on',
        color: theme.colors.TERTIARY_COLOR,
      });
    } else if (incomeGroup) {
      pillars = getIncomeData(incomeGroup);
      [score2Data, pillarNames] = insertPillarNames(pillars, 'income_group', width, firstScoreData);
      setPillarsName(pillarNames);
      countryResponse.push({
        name: incomeGroup,
        data: score2Data,
        pointPlacement: 'on',
        color: theme.colors.TERTIARY_COLOR,
      });
    }
    setResponse(countryResponse);
  }, [firstCountry, country, region, incomeGroup, selectedValue[1]]);

  // Setting Spider Diagram options with updated data and dynamic pillar categories
  const modifiedSpiderOptions = {
    ...spiderOptions,
    title: null,
    series: Response,
    xAxis: {
      categories: pillarsName,
    },
  }

  return (
    <SpiderDiagContainer className="spider-diagram-section">
      <Wrapper width="100%">
        <SpiderFilter country={firstCountry} />
        <h5>Note: The displayed scores are out of {SCORE_OUT_OF}.</h5>
        <HighchartsReact highcharts={Highcharts} options={modifiedSpiderOptions} />
      </Wrapper>
    </SpiderDiagContainer>
  );
};

export default PolarChart;
