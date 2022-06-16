import IncomeData from '../../data/spiderdiagram/incomeWise.json';
import RegionsData from '../../data/spiderdiagram/regionWise.json';
import ResponseData from '../../data/spiderdiagram/parentChildMap.json';
import { getCountries } from '../../utils/helperFunctions';

// get income groups for polar chart dropdown options
export const getIncomeGroups = () => {
  const incomeGroups = [];
  const flag = {};
  const unique = [];

  ResponseData.map((incomeData) => {
    incomeGroups.push({
      value: incomeData.income_group.toLowerCase(),
      label: incomeData.income_group,
    });
  });
  incomeGroups.forEach((elem) => {
    if (!flag[elem.value]) {
      flag[elem.value] = true;
      unique.push(elem);
    }
  });
  return unique;
};

// get regions for polar chart dropdown options
export const getRegions = () => {
  const regions = [];
  const uniqueRegions = [];
  const flag = {};

  ResponseData.map((countryData) => {
    regions.push({
      value: countryData.region.toLowerCase(),
      label: countryData.region,
    });
  });

  regions.forEach((elem) => {
    if (!flag[elem.value]) {
      flag[elem.value] = true;
      uniqueRegions.push(elem);
    }
  });
  return uniqueRegions;
};

// creating options for polar chart select filter
export const filterOptions = [
  {
    value: 'countries',
    label: 'Countries',
    children: getCountries(),
  },
  {
    value: 'income groups',
    label: 'Income Groups',
    children: getIncomeGroups(),
  },
  {
    value: 'regions',
    label: 'Regions',
    children: getRegions(),
  },
];

// get Country details of a particular matched country
export const getCountryDetail = (details, countrysName) => {
  let countryDetail = {};
  for (const countryDetails of details) {
    if (countryDetails.name.toLowerCase() === countrysName.toLowerCase()) {
      countryDetail = countryDetails;
      break;
    }
  }
  return countryDetail;
};

// format country wise data according to pillars only
export const getData = (countryDetail) => {
  const getPillar = countryDetail?.pillars?.filter((feature) => {
    return (
      feature.code === 1000 ||
      feature.code === 2000 ||
      feature.code === 3000 ||
      feature.code === 4000 ||
      feature.code === 5000
    );
  });

  if (getPillar) {
    getPillar.region = countryDetail.region;
    getPillar.incomeGroup = countryDetail.income_group;
  }

  return getPillar;
};

// create a template for pillars with its values
export const createTemplate = (
  width,
  dataPointValue = 1,
  description,
  isSecondData = '',
  dataValue2
) => {
  if (!isSecondData) {
    return `<center><div dy="-5px" class='spider-first-score'>${Math.round(
      dataPointValue
    )}</div><br/><div class='spider-label'>${description}</div></center>`;
  }
  return `<center><div class='spider-first-score'>${Math.round(
    dataValue2
  )}</div>&nbsp;&nbsp;<p class='spider-score-divider'>/</p>&nbsp;&nbsp;<div class='spider-second-score'>${Math.round(
    dataPointValue
  )}</div><br/><div class='spider-label'>${description}</div></center>`;
};

// format country wise singular data for polar charts
export const getCountryData = (countrysName) => {
  const countryDetail = getCountryDetail(ResponseData, countrysName);
  const pillars = getData(countryDetail);
  return [pillars, countryDetail];
};

// format region wise average data for polar charts
export const getRegionData = (regionName) => {
  let pillars = [];
  RegionsData.forEach((regionData) => {
    if (regionData.name.toLowerCase() === regionName.toLowerCase()) {
      pillars = regionData.categories;
    }
  });
  return pillars;
};

// format income wise average data for polar charts
export const getIncomeData = (incomesName) => {
  let pillars = [];
  IncomeData.forEach((incomeData) => {
    if (incomeData.name.toLowerCase() === incomesName.toLowerCase()) {
      pillars = incomeData.categories;
    }
  });
  return pillars;
};

//  insert pillar names in the spider options
export const insertPillarNames = (
  pillars,
  toggleValue = '',
  width,
  firstScoreData,
  selectedValue = []
) => {
  const scoreData = [];
  const pillarNames = [];
  if (pillars) {
    for (const [index, a] of pillars.entries()) {
      if (toggleValue === 'region' || toggleValue === 'income_group') {
        scoreData.push(Number(a.averageScore));
        pillarNames.push(
          createTemplate(
            width,
            a.averageScore,
            a.name,
            true,
            firstScoreData[index]
          )
        );
      } else if (toggleValue === selectedValue[1]) {
        scoreData.push(Number(a.score));
        pillarNames.push(
          createTemplate(width, a.score, a.name, true, firstScoreData[index])
        );
      } else {
        scoreData.push(Number(a.score));
        pillarNames.push(createTemplate(width, a.score, a.name));
      }
    }
  }
  return [scoreData, pillarNames];
};
