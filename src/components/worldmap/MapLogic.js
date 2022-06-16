import countriesIso from '../../data/worldmap/countryIso';
import rankingData from '../../data/worldmap/measureLevelCode.json';
import parentChildData from '../../data/spiderdiagram/parentChildMap.json';

// formatting data according to highmaps library requirement
export const formatData = (measure) => {
  const scoreData = [];
  const rankingCountries = new Map();

  parentChildData.forEach((country) => {
    country.pillars.filter((pillarData) => {
      if (pillarData.name === measure && measure.length > 0) {
        rankingCountries.set(pillarData.country, Math.round(pillarData.score));
      }
    });
  });

  countriesIso.forEach((county) => {
    if (rankingCountries.has(county.Name)) {
      scoreData.push([
        county.Code.toLowerCase(),
        parseFloat(rankingCountries.get(county.Name)),
      ]);
    }
  });
  return scoreData;
};

// redirect to detail page
export const redirectToDetailPage = (e, history) => {
  history.push(
    `/country-profile/${e.point.name.toLowerCase().replace(/\s+/g, '-')}/`
  );
};

// reset zoom on double click options
export const doubleClicker = {
  clickedOnce: false,
  timer: null,
  timeBetweenClicks: 400,
};

// reset zoom on double click
export const resetDoubleClick = () => {
  clearTimeout(doubleClicker.timer);
  doubleClicker.timer = null;
  doubleClicker.clickedOnce = false;
};

// MapFilter

// get sub pillar data according to the pillar selected
export const getSubPillars = (code) => {
  const map = new Map();
  rankingData.forEach((element, index) => {
    const firstDigit = parseInt(`${element.code.toString()[0]}000`, 10);
    if (!map.has(firstDigit)) {
      map.set(firstDigit, []);
    } else {
      const id = index + Math.floor(Math.random() * 1234567);
      map.set(firstDigit, [
        ...map.get(firstDigit),
        { value: id, label: element.dataMeasure },
      ]);
    }
  });
  return map.get(code);
};

export const formatSubPillarData = (selectedCategory) => {
  let subPillarOption;
  rankingData.forEach((countyData) => {
    if (countyData.dataMeasure === selectedCategory) {
      const countyCode = countyData.code;
      subPillarOption = getSubPillars(countyCode);
    }
  });
  return subPillarOption;
};

export const formatPillarData = () => {
  const pillarOption = [];
  rankingData.map((countyPillar, index) => {
    if (countyPillar.level === 1) {
      pillarOption.push({
        value: index,
        label: countyPillar.dataMeasure,
      });
    }
  });
  return pillarOption;
};
