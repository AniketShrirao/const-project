import { AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { formatColumnDefs, getCountriesIncomeWise, getCountriesRegionWise, getRankedTableData, getRowData, getScoreTableData, setAutoHeight, setHeaderName, sortByTotal } from './RankTableLogic';
import { RANK, SCORE } from '../../utils/Constants';
import { rankTableResetStates, setErrorMessage, setIncomeLabelValue, setIncomeSelection, setInfoModalOpen, setRegionLabelValue, setRegionSelection, setTableData } from '../../redux/slices/RankTable';
import CommonModal from '../utilities/Modal/Modal';
import CountryNameRedirect from './CountryNameRedirect';
import CustomHeaderGroup from './CustomHeaderGroup';
import CustomSubHeaderGroup from './CustomSubHeaderGroup';
import Headings from '../utilities/Headings';
import rankingData from '../../data/worldmap/measureLevelCode.json';
import RankTableFilter from './RankTableFilter';
import RankTableGlobalInfo from './RankTableGlobalInfo';
import ResponsiveOpenModelBtn from './ResponsiveOpenModelBtn';
import ResponsiveRankTable from './ResponsiveRankTable';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Wrapper from '../wrapper';

import { RankingTableSection } from './Rankingtable.styled';
import { ReactComponent as FaTimes } from '../../assets/images/svgs/bold-close.svg';
import rankTableRank from '../../data/rankingtable/rankTableRank.json';
import rankTableScore from '../../data/rankingtable/rankTableScore.json';
import PillarDefination from '../utilities/PopupModal/PillarDefination';

const RankingTable = ({ rankTableOptions, backgroundColors }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [columnDefinations, setColumnDefinations] = useState();
  const toggleRankScore = useSelector(state => state.RankTable.toggleRankScore);
  const regionSelected = useSelector(state => state.RankTable.regionSelected);
  const incomeSelected = useSelector(state => state.RankTable.incomeSelected);
  const regionLabelValue = useSelector(state => state.RankTable.regionLabelValue);
  const incomeLabelValue = useSelector(state => state.RankTable.incomeLabelValue);
  const tableData = useSelector(state => state.RankTable.tableData);
  const openModal = useSelector(state => state.RankTable.openModal);
  const isModalOpen = useSelector(state => state.RankTable.isInfoModalOpen);
  const pillarIndex = useSelector(state => state.RankTable.pillarIndex);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const history = useHistory();
  const isPageChange = history.location.pathname;

  // toggle opening/closing of modal
  const toggleModal = () => {
    dispatch(setInfoModalOpen(!isModalOpen));
  };

  // column definations for ag grid
  const desktopColumnDef = useMemo(() => formatColumnDefs(rankingData, width, backgroundColors, false), []);
  const mobileColumnDef = useMemo(() => formatColumnDefs(rankingData, width, backgroundColors, true), []);

  // on Ag-Grid library loaded/ready
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.setRowData(rankTableRank);
    setAutoHeight(params.api);
    dispatch(setTableData(rankTableRank));
    if (width > 1023) {
      setColumnDefinations(desktopColumnDef);
    } else {
      params.api.sizeColumnsToFit();
      setColumnDefinations(mobileColumnDef);
    }
  };

  // modifying rank table options
  const modifiedRankTableOptions = {
    ...rankTableOptions,
    onGridReady,
  }

  // modifying responsive rank table options
  const respRankTableOptions = {
    ...rankTableOptions,
    onGridReady,
  }

  // on Score/Rank button change
  const onToggleRankScore = (toggleValue) => {
    let initialData;
    if ((regionSelected || incomeSelected) && toggleValue === RANK) {
      initialData = getScoreTableData(tableData);
      dispatch(setTableData(initialData));
      sortByTotal('desc', gridColumnApi);
    } else if ((regionSelected || incomeSelected) && toggleValue === SCORE) {
      initialData = getRankedTableData(tableData);
      dispatch(setTableData(initialData));
      sortByTotal('asc', gridColumnApi);
    } else if (toggleValue === SCORE) {
      initialData = rankTableRank;
      dispatch(setTableData(initialData));
      sortByTotal('asc', gridColumnApi);
    } else if (toggleValue === RANK) {
      initialData = rankTableScore;
      dispatch(setTableData(initialData));
      sortByTotal('desc', gridColumnApi);
    }
    setHeaderName(toggleValue, gridApi);
    gridApi.setRowData(initialData);
  }

  // on Region dropdown change
  const onRegionFilterChange = (regionName) => {
    dispatch(setRegionLabelValue(regionName));
    dispatch(setRegionSelection(true));
    const countryNamesRegion = getCountriesRegionWise(regionName, incomeSelected, incomeLabelValue);
    if (countryNamesRegion.length === 0) {
      dispatch(setErrorMessage(`There are no countries which will fall under ${incomeLabelValue} & ${regionName}`));
    } else {
      dispatch(setErrorMessage(''));
    }
    const rowData = getRowData(countryNamesRegion, toggleRankScore);
    if (rowData.length > 0) {
      dispatch(setTableData(rowData));
      gridApi.setRowData(rowData);
    }
  }

  // on Income dropdown change
  const onIncomeFilterChange = (incomeName) => {
    dispatch(setIncomeLabelValue(incomeName));
    dispatch(setIncomeSelection(true));
    const countryNamesIncome = getCountriesIncomeWise(incomeName, regionSelected, regionLabelValue);
    if (countryNamesIncome.length === 0) {
      dispatch(setErrorMessage(`There are no countries which will fall under ${regionLabelValue} & ${incomeName}`))
    } else {
      dispatch(setErrorMessage(''));
    }
    const rowData = getRowData(countryNamesIncome, toggleRankScore);
    if (rowData.length > 0) {
      dispatch(setTableData(rowData));
      gridApi.setRowData(rowData);
    }
  }

  useEffect(() => {
    if (isPageChange) {
      dispatch(rankTableResetStates());
    }
  }, [isPageChange]);

  return (
    <RankingTableSection className='ranking-table-section'>
      <Wrapper>
        <Headings className='ranking-table-heading' heading='Global Country Profile' />
        <p className='ranking-table-info'>The global ranking table ranks every country by their overall index score and across each pillar. Each pillar can be expanded to reveal where countries score and rank at the indicator level too. You can toggle between a countries rank and score and click on a country to view summary country information and comparison options.</p>
        <RankTableFilter
          onRegionFilterChange={(regionName) => onRegionFilterChange(regionName)}
          onIncomeFilterChange={(incomeName) => onIncomeFilterChange(incomeName)}
          onToggleRankScore={() => onToggleRankScore(toggleRankScore)}
          gridApiObject={gridApi}
          gridColumnApiObject={gridColumnApi}
          setHeaderName={setHeaderName}
          sortByTotal={sortByTotal}
          className='ranking-table-filter'
        />
        {isModalOpen && (<CommonModal styleClass='description-popup' isPopup onRequestClose={toggleModal}>
          <PillarDefination pillarIndex={pillarIndex}/>
          <FaTimes
            onClick={() => toggleModal()}
            className="popup-close"
            width="20"
            height="20"
          />
        </CommonModal>)}
        <RankTableGlobalInfo toVisible={toggleRankScore !== RANK ? 'visible' : 'hidden'} />
        {
          (width < 1023 && openModal) && (
            <ResponsiveRankTable isModalOpen={openModal} onToggleRankScore={() => onToggleRankScore(toggleRankScore)} />
          )
        }
      </Wrapper>
      <Wrapper width="100%">
        {
          (width > 1023) ?
            (<div
              id="myGrid"
              style={{
                height: '100%',
                width: '100%',
              }}
              className="ag-theme-alpine"
            >
              <AgGridReact
                columnDefs={columnDefinations}
                gridOptions={modifiedRankTableOptions}
                domLayout='autoHeight'
                tooltipShowDelay={0}
                tooltipMouseTrack
                frameworkComponents={{
                  customHeaderGroupComponent: CustomHeaderGroup,
                  customSubHeaderGroupComponent: CustomSubHeaderGroup,
                  countryNameRedirectRenderer: CountryNameRedirect,
                }} />
            </div>)
            : (<div
              id="myGrid"
              style={{
                height: '100%',
                width: '90%',
                margin: '0 auto',
              }}
              className="ag-theme-alpine"
            >
              <AgGridReact
                columnDefs={columnDefinations}
                gridOptions={respRankTableOptions}
                domLayout='autoHeight'
                frameworkComponents={{
                  customHeaderGroupComponent: CustomHeaderGroup,
                  countryNameRedirectRenderer: CountryNameRedirect,
                  openModalRenderer: ResponsiveOpenModelBtn,
                }} />
            </div>)}
      </Wrapper>
    </RankingTableSection>
  )
}

export default RankingTable;
