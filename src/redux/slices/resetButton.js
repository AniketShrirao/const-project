import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const resetButtonSlice = createSlice({
  name: 'resetButton',
  initialState,
  reducers: {
    resetButtonState: () => initialState,
    currentState: (state = initialState, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentState, resetButtonState } = resetButtonSlice.actions;

export default resetButtonSlice.reducer;
