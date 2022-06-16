import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'selected-filter',
};

export const selectedFilterSlice = createSlice({
  name: 'selectedFilter',
  initialState,
  reducers: {
    currentState: (state = initialState, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentState } = selectedFilterSlice.actions;

export default selectedFilterSlice.reducer;
