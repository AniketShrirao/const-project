import { createSlice } from '@reduxjs/toolkit';
import { CONSUMER_PROTECTION_INDEX, SCORE } from '../../utils/Constants';

const initialState = {
  measure: CONSUMER_PROTECTION_INDEX,
  hoverTitle: `Overall ${SCORE}`,
  pillarValue: '',
  subPillarValue: '',
  modalPillarValue: 'Select Category',
  modalSubPillarValue: 'Select Sub Category',
  isPillarSelected: 'disabled',
  pillarOptions: [],
  subPillarOptions: [],
};

export const measureSlice = createSlice({
  name: 'worldMap',
  initialState,
  reducers: {
    mapResetStates: () => initialState,
    selection: (state = initialState, action) => {
      return {
        ...state,
        measure: action.payload,
      };
    },
    titleChange: (state = initialState, action) => {
      return {
        ...state,
        hoverTitle: action.payload,
      };
    },
    pillarValueChange: (state = initialState, action) => {
      return {
        ...state,
        pillarValue: action.payload,
      };
    },
    subPillarValueChange: (state = initialState, action) => {
      return {
        ...state,
        subPillarValue: action.payload,
      };
    },
    modalPillarValueChange: (state = initialState, action) => {
      return {
        ...state,
        modalPillarValue: action.payload,
      };
    },
    modalSubPillarValueChange: (state = initialState, action) => {
      return {
        ...state,
        modalSubPillarValue: action.payload,
      };
    },
    setPillarOptions: (state = initialState, action) => {
      return {
        ...state,
        pillarOptions: action.payload,
      };
    },
    setSubPillarOptions: (state = initialState, action) => {
      return {
        ...state,
        subPillarOptions: action.payload,
      };
    },
    setIsPillarSelected: (state = initialState, action) => {
      return {
        ...state,
        isPillarSelected: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  titleChange,
  selection,
  mapResetStates,
  pillarValueChange,
  subPillarValueChange,
  modalPillarValueChange,
  modalSubPillarValueChange,
  setPillarOptions,
  setSubPillarOptions,
  setIsPillarSelected,
} = measureSlice.actions;

export default measureSlice.reducer;
