import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: [],
  country: '',
  region: '',
  income_group: '',
  first_country: '',
};

export const spiderFilterSlice = createSlice({
  name: 'polarChart',
  initialState,
  reducers: {
    polarChartResetStates: () => initialState,
    spiderSelection: (state = initialState, action) => {
      return {
        ...state,
        filterValue: action.payload,
      };
    },
    setCountry: (state = initialState, action) => {
      return {
        ...state,
        country: action.payload,
      };
    },
    setIncomeGroup: (state = initialState, action) => {
      return {
        ...state,
        income_group: action.payload,
      };
    },
    setRegion: (state = initialState, action) => {
      return {
        ...state,
        region: action.payload,
      };
    },
    setFirstCountry: (state = initialState, action) => {
      return {
        ...state,
        first_country: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  spiderSelection,
  polarChartResetStates,
  setCountry,
  setIncomeGroup,
  setRegion,
  setFirstCountry,
} = spiderFilterSlice.actions;

export default spiderFilterSlice.reducer;
