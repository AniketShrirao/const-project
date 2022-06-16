import rankTableRank from '../../data/rankingtable/rankTableRank.json';
import rankTableScore from '../../data/rankingtable/rankTableScore.json';
import parentChildData from '../../data/spiderdiagram/parentChildMap.json';
import regionWiseData from '../../data/spiderdiagram/regionWise.json';
import incomeWiseData from '../../data/spiderdiagram/incomeWise.json';
import rankingData from '../../data/worldmap/measureLevelCode.json';
import {
  CONSUMER_PROTECTION_INDEX,
  RANK,
  RANK_OUT_OF,
  SCORE,
  SCORE_OUT_OF,
} from '../../utils/Constants';
import theme from '../../themes';

// get sub pillars for header columns
export const getSubPillars = (code, color, ranksData) => {
  const map = new Map();
  ranksData.forEach((element) => {
    const firstDigit = parseInt(`${element.code.toString()[0]}000`, 10);
    if (!map.has(firstDigit)) {
      map.set(firstDigit, [
        {
          field: element.dataMeasure,
          columnGroupShow: 'closed',
          headerName: element.dataMeasure,
          minWidth: '50',
          maxWidth: '260',
          flex: 2,
          lockPosition: true,
          cellStyle: { backgroundColor: color, textAlign: 'center' },
          cellRenderer: 'countryNameRedirectRenderer',
          headerClass: `_${firstDigit}`,
        },
      ]);
    } else {
      map.set(firstDigit, [
        ...map.get(firstDigit),
        {
          field: element.dataMeasure,
          columnGroupShow: 'open',
          headerName: element.dataMeasure,
          minWidth: '80',
          maxWidth: '80',
          lockPosition: true,
          cellClass: 'border-left border-right',
          cellStyle: { backgroundColor: color, textAlign: 'center' },
          cellRenderer: 'countryNameRedirectRenderer',
          headerComponent: 'customSubHeaderGroupComponent',
          headerClass: `_${firstDigit} sub-pillars-headers`,
        },
      ]);
    }
  });
  return map.get(code);
};

//  formatting column Headers names
export const formatColumnDefs = (
  ranksData,
  width,
  backgroundColors,
  isTableResponsive
) => {
  const columns = [];

  if (!isTableResponsive) {
    ranksData.map((rankData) => {
      if (rankData.code % 1000 === 0 && rankData.code !== 0) {
        columns.push({
          children: getSubPillars(
            rankData.code,
            backgroundColors[rankData.code],
            ranksData
          ),
          headerName: '',
          field: '',
          lockPosition: true,
          cellClass: 'grid-cell-centered',
          headerGroupComponent: 'customHeaderGroupComponent',
        });
      }
    });
  }

  columns.unshift({
    headerName: 'Country',
    field: 'country',
    minWidth: isTableResponsive ? '200' : '250',
    lockPosition: true,
    cellClass: 'border-left',
    cellStyle: { backgroundColor: theme.colors['1000'] },
    headerClass: 'country',
    cellRenderer: isTableResponsive
      ? 'openModalRenderer'
      : 'countryNameRedirectRenderer',
    flex: 1,
  });
  const maxWidthResponsiveValue = width < 768 ? '85' : '150';
  columns.unshift({
    columnGroupShow: 'closed',
    headerName: `Total ${RANK}/${RANK_OUT_OF}`,
    field: CONSUMER_PROTECTION_INDEX,
    minWidth: isTableResponsive ? '50' : '85',
    maxWidth: isTableResponsive ? maxWidthResponsiveValue : '85',
    lockPosition: true,
    cellClass: 'border-right ag-grid-total',
    sort: 'asc',
    cellStyle: { backgroundColor: theme.colors['1000'] },
    cellRenderer: 'countryNameRedirectRenderer',
    headerClass: 'total',
    flex: 1,
  });
  return columns;
};

// sets total columns headerName according to rank/score toggle
export const setHeaderName = (toggleRS, gridApi) => {
  const rankScoreValue =
    toggleRS === RANK ? `${SCORE}/${SCORE_OUT_OF}` : `${RANK}/${RANK_OUT_OF}`;
  const newColumns = gridApi.getColumnDefs();

  newColumns.forEach((newColumn) => {
    const columnHeader = newColumn.headerName;
    if (columnHeader.includes('Total')) {
      newColumn.headerName = `Total ${rankScoreValue}`;
    }
  });
  gridApi.setColumnDefs(newColumns);
};

// set Auto Height of Table
export const setAutoHeight = (api) => {
  api.setDomLayout('autoHeight');
  document.querySelector('#myGrid').style.height = '';
};

//  sort By Total Column
export const sortByTotal = (sortOrder, gridColumnApi) => {
  gridColumnApi.applyColumnState({
    state: [
      {
        colId: CONSUMER_PROTECTION_INDEX,
        sort: sortOrder,
      },
    ],
    defaultState: { sort: null },
  });
};

// get list of countries according to income
export const getCountriesRegionWise = (
  region,
  incomeSelected,
  incomeLabelValue
) => {
  const countryNames = [];

  if (incomeSelected) {
    parentChildData.forEach((data) => {
      if (data.region === region && data.income_group === incomeLabelValue) {
        countryNames.push(data.name);
      }
    });
  } else {
    parentChildData.forEach((data) => {
      if (data.region === region) {
        countryNames.push(data.name);
      }
    });
  }
  return countryNames;
};

// get list of countries according to region
export const getCountriesIncomeWise = (
  incomeName,
  regionSelected,
  regionLabelValue
) => {
  const countryNames = [];

  if (regionSelected) {
    parentChildData.forEach((data) => {
      if (
        data.income_group === incomeName &&
        data.region === regionLabelValue
      ) {
        countryNames.push(data.name);
      }
    });
  } else {
    parentChildData.forEach((data) => {
      if (data.income_group === incomeName) {
        countryNames.push(data.name);
      }
    });
  }
  return countryNames;
};

// get row data based on income and region filtered countries
export const getRowData = (countryList, toggleRankScore) => {
  const rowData = [];
  let initialData = [];
  if (toggleRankScore === RANK) {
    initialData = rankTableRank;
  } else {
    initialData = rankTableScore;
  }

  initialData.forEach((data) => {
    for (const nodeKey in data) {
      if (Object.hasOwnProperty.call(data, nodeKey)) {
        const countryName = data[nodeKey];
        if (countryList.includes(countryName)) {
          rowData.push(data);
        }
      }
    }
  });
  return rowData;
};

// get RankedTable rank data
export const getRankedTableData = (data) => {
  let rankedData = Array.isArray(data) ? [] : {};
  rankTableRank.forEach((rankData) => {
    if (Array.isArray(data)) {
      data.forEach((countryData) => {
        if (rankData.country === countryData.country) {
          rankedData.push(rankData);
        }
      });
    } else if (rankData.country === data.country) {
      rankedData = rankData;
    }
  });
  return rankedData;
};

// get RankedTable Score data
export const getScoreTableData = (data) => {
  let scoredData = Array.isArray(data) ? [] : {};
  rankTableScore.forEach((scoreData) => {
    if (Array.isArray(data)) {
      data.forEach((countryData) => {
        if (scoreData.country === countryData.country) {
          scoredData.push(scoreData);
        }
      });
    } else if (scoreData.country === data.country) {
      scoredData = scoreData;
    }
  });
  return scoredData;
};

// RankTable Filters

// fetching region options
export const getRegionOptions = () => {
  const regionOption = [];
  regionWiseData.map((region, index) => {
    regionOption.push({
      value: index,
      label: region.name,
    });
  });
  return regionOption;
};

// fetching income options
export const getIncomeOptions = () => {
  const incomeOption = [];
  incomeWiseData.map((income, index) => {
    incomeOption.push({
      value: index,
      label: income.name,
    });
  });
  return incomeOption;
};

// RankTablePillars

// get subpillars for modal
export const getSubPillarsModal = (code, modalPillarData) => {
  const map = new Map();
  rankingData.forEach((element) => {
    const firstDigit = parseInt(`${element.code.toString()[0]}000`, 10);
    if (!map.has(firstDigit)) {
      map.set(firstDigit, []);
    } else {
      for (const indicator in modalPillarData) {
        if (Object.hasOwnProperty.call(modalPillarData, indicator)) {
          const value = modalPillarData[indicator];
          if (indicator === element.dataMeasure) {
            const codeNumber = element.code;
            map.set(firstDigit, {
              ...map.get(firstDigit),
              [indicator]: { value, codeNumber },
            });
          }
        }
      }
    }
  });
  return map.get(code);
};

// get pillar for modal
export const getPillarsModal = (modalPillarData) => {
  const pillarsData = [];
  const subPillarsData = [];
  rankingData.forEach((pillarData) => {
    for (const pillarName in modalPillarData) {
      if (Object.hasOwnProperty.call(modalPillarData, pillarName)) {
        if (
          pillarName === pillarData.dataMeasure &&
          pillarData.code % 1000 === 0
        ) {
          const subpillars = getSubPillarsModal(
            pillarData.code,
            modalPillarData
          );
          subPillarsData.push(subpillars);
          pillarsData.push({
            [pillarName]: modalPillarData[pillarName],
            code: pillarData.code,
          });
        }
      }
    }
  });
  pillarsData.shift();
  subPillarsData.shift();

  pillarsData.forEach((pillar, index) => {
    pillar.children = Object.entries(subPillarsData[index]);
  });
  return pillarsData;
};
