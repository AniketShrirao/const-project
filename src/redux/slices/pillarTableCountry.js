import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryData: [],
  pillarIndex: null,
  isInfoModalOpen: false,
};

export const selectedCountrySlice = createSlice({
  name: 'pillarTable',
  initialState,
  reducers: {
    selectedCountry: (state = initialState, action) => {
      return {
        ...state,
        countryData: action.payload,
      };
    },
    setInfoModalOpen: (state = initialState, action) => {
      return {
        ...state,
        isInfoModalOpen: action.payload,
      };
    },
    setPillarIndex: (state = initialState, action) => {
      return {
        ...state,
        pillarIndex: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectedCountry, setPillarIndex, setInfoModalOpen } =
  selectedCountrySlice.actions;

export default selectedCountrySlice.reducer;
