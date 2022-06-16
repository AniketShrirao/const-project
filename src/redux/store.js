import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/named
import measureReducer from './slices/mapMeasure';
import spiderFilterReducer from './slices/spiderFilter';
import selectedCountryReducer from './slices/pillarTableCountry';
import resetButtonReducer from './slices/resetButton';
import RankTableReducer from './slices/RankTable';

const store = configureStore({
  reducer: {
    worldMap: measureReducer,
    polarChart: spiderFilterReducer,
    pillarTable: selectedCountryReducer,
    resetButton: resetButtonReducer,
    RankTable: RankTableReducer,
  },
});

export default store;
