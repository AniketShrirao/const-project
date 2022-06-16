import rankTableRank from '../../data/rankingtable/rankTableRank.json';
import rankTableScore from '../../data/rankingtable/rankTableScore.json';
import { CONSUMER_PROTECTION_INDEX } from '../../utils/Constants';
import { isCountryMatched } from '../../utils/helperFunctions';

// get sub pillar data according to the pillar selected
export const getSubPillars = (countryDetail, toggleValue, code) => {
  const map = new Map();
  countryDetail?.forEach((element) => {
    const firstDigit = parseInt(`${element.code.toString()[0]}000`, 10);
    if (!map.has(firstDigit)) {
      map.set(firstDigit, []);
    } else {
      map.set(firstDigit, [
        ...map.get(firstDigit),
        { value: Math.round(element[toggleValue]), label: element.name },
      ]);
    }
  });
  return map.get(code);
};

// get pillar data according to the pillar selected
export const getPillars = (countryDetail, toggleValue) => {
  const pillars = [];
  const data = countryDetail?.filter((feature) => {
    return (
      feature.code === 1000 ||
      feature.code === 2000 ||
      feature.code === 3000 ||
      feature.code === 4000 ||
      feature.code === 5000
    );
  });
  data?.forEach((item) => {
    pillars.push({
      label: item.name,
      value: Math.round(item[toggleValue]),
      code: item.code,
    });
  });
  return pillars;
};

export const getAvgOverallScore = (country) => {
  const overallData = rankTableScore.filter((scoreData) =>
    isCountryMatched(scoreData.country, country)
  );
  if (overallData.length > 0) return overallData[0][CONSUMER_PROTECTION_INDEX];
};

export const getAvgOverallRank = (country) => {
  const overallData = rankTableRank.filter((rankData) =>
    isCountryMatched(rankData.country, country)
  );
  if (overallData.length > 0) return overallData[0][CONSUMER_PROTECTION_INDEX];
};
