import rankingData from '../data/worldmap/measureLevelCode.json';
import rankTableScore from '../data/rankingtable/rankTableScore.json';
import rankTableRank from '../data/rankingtable/rankTableRank.json';
import parentChildData from '../data/spiderdiagram/parentChildMap.json';
import pillarDescriptions from '../data/rankingtable/pillarIndicatorDefinition.json';
import { RANK } from './Constants';

// to compare country name from params with selected country name
export const compareCountries = (str1, str2, matches = []) => {
  str1.replace(
    /(\w+)/g,
    (m) => str2.search(new RegExp(m, 'i')) >= 0 && matches.push(m)
  );
  return matches;
};

// capitalize a string
export const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (same) =>
    same.toUpperCase()
  );

// debounce utility function which delays execution of a function by timeout
export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

// sorting algorithm to sort countries
const quickSort = (arr, size) => {
  if (size <= 1) {
    return arr;
  }

  const leftArr = [];
  const rightArr = [];
  const pivot = arr[size - 1];
  for (const iterator of arr.splice(0, size - 1)) {
    if (pivot.value > iterator.value) {
      leftArr.push(iterator);
    } else {
      rightArr.push(iterator);
    }
  }

  return [
    ...quickSort(leftArr, leftArr.length),
    pivot,
    ...quickSort(rightArr, rightArr.length),
  ];
};

// get countries for polar chart dropdown options
export const getCountries = () => {
  const countries = [];
  parentChildData.map((countryData) => {
    countries.push({
      value: countryData.name.toLowerCase(),
      label: countryData.name,
    });
  });
  return quickSort(countries, countries.length);
};

//  check weather two country names are same or not
export const isCountryMatched = (countryOne, countryTwo) => {
  if (
    countryOne.toLowerCase().includes(countryTwo.toLowerCase()) ||
    countryTwo.toLowerCase().includes(countryOne.toLowerCase()) ||
    countryOne.toLowerCase() === countryTwo.toLowerCase() ||
    compareCountries(countryOne.toLowerCase(), countryTwo.toLowerCase())
      .length > 1
  ) {
    return true;
  }
  return false;
};

// get region name and income group based on country
export const getRegionAndIncomeGroup = (country) => {
  const regionAndIncome = new Map();

  parentChildData.forEach((countryData) => {
    if (isCountryMatched(countryData.name, country)) {
      regionAndIncome.set('income_group', countryData.income_group);
      regionAndIncome.set('region', countryData.region);
    }
  });

  return regionAndIncome;
};

// get global Data to display above rank table
export const getGlobalData = (toggleValue) => {
  let i = 0;
  let total = 0;
  const globalMeasureData =
    toggleValue === RANK ? rankTableRank : rankTableScore;

  globalMeasureData.map((data) => {
    for (const dataMeasure in data) {
      if (Object.hasOwnProperty.call(data, dataMeasure)) {
        const value = data[dataMeasure];
        if (dataMeasure !== 'country') {
          total += value;
          /* eslint-disable-next-line no-plusplus */
          i++;
        }
      }
    }
  });
  return total / i;
};

// get only pillars
export const getPillarData = (pillarData) => {
  const pillars = [];
  pillarData.map((countyPillar) => {
    if (countyPillar.level === 1) {
      pillars.push(countyPillar.dataMeasure);
    }
  });
  return pillars;
};

// get pillars and indicators in a combined HashMap
export const getPillarAndIndicatorData = (pillarData) => {
  const pillarsAndIndicators = new Map();
  pillarData.map((countyPillar) => {
    if (countyPillar.level === 1 || countyPillar.level === 2) {
      if (!pillarsAndIndicators.has(countyPillar.code)) {
        pillarsAndIndicators.set(countyPillar.dataMeasure, [
          countyPillar.dataMeasure,
        ]);
      }
    }
  });
  return pillarsAndIndicators;
};

// get Description of pillars / indicators based on its dataMeasure
export const getPillarsDescriptions = (dataMeasure) => {
  let description = '';
  let pillarName = '';
  const pillarsAndIndicators = getPillarAndIndicatorData(rankingData);
  if (pillarDescriptions) {
    if (Number.isInteger(dataMeasure)) {
      const pillars = getPillarData(rankingData);
      pillarDescriptions.find((pillar) => {
        if (pillar.name.toLowerCase() === pillars[dataMeasure].toLowerCase()) {
          description = pillar.desc;
          pillarName = pillar.name;
        }
      });
    } else if (pillarsAndIndicators.has(dataMeasure)) {
      if (pillarsAndIndicators.get(dataMeasure)) {
        pillarDescriptions.map((o) => {
          if (
            o.name.toString().toLowerCase().trim() ===
            dataMeasure.toString().toLowerCase().trim()
          ) {
            description = o.desc;
            pillarName = o.name;
          }
        });
      }
    }
  }
  return [pillarName, description];
};

// get average of pillars column-wise (average score of individual pillars)
export const getPillarsWiseAverage = (toggleValue) => {
  const result = [];
  const map = new Map();
  const set = new Set();
  const pillarWiseData = toggleValue === RANK ? rankTableRank : rankTableScore;

  const pillars = getPillarData(rankingData);

  pillars.forEach((dataMeasure) => {
    set.add(dataMeasure);
  });

  pillarWiseData.forEach((country) => {
    for (const item of set) {
      if (map.has(item)) {
        const arr = map.get(item);
        arr.push(country[item]);
        map.set(item, arr);
      } else {
        map.set(item, [country[item]]);
      }
    }
  });

  for (const [key, value] of map) {
    const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
    result.push({
      label: key,
      value: average(value),
    });
  }
  return result;
};
