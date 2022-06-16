import { createSlice } from '@reduxjs/toolkit';
import { RANK, SCORE } from '../../utils/Constants';

const initialState = {
  toggleRankScore: RANK,
  on: SCORE,
  modalData: {},
  expandState: 'collapsed',
  errorMessage: '',
  incomeLabelValue: '',
  regionLabelValue: '',
  incomeSelected: false,
  regionSelected: false,
  openModal: false,
  tableData: [],
  globalData: null,
  accPillarIndex: 0,
  accSubPillarIndex: 0,
  pillarIndex: null,
  isInfoModalOpen: false,
};

export const RankTableSlice = createSlice({
  name: 'RankTable',
  initialState,
  reducers: {
    rankTableResetStates: () => initialState,
    rankScoreToggle: (state = initialState, action) => {
      return {
        ...state,
        toggleRankScore: action.payload,
      };
    },
    setOnState: (state = initialState, action) => {
      return {
        ...state,
        on: action.payload,
      };
    },
    setGlobalData: (state = initialState, action) => {
      return {
        ...state,
        globalData: action.payload,
      };
    },
    setInfoModalOpen: (state = initialState, action) => {
      return {
        ...state,
        isInfoModalOpen: action.payload,
      };
    },
    setModalData: (state = initialState, action) => {
      return {
        ...state,
        modalData: action.payload,
      };
    },
    setPillarIndex: (state = initialState, action) => {
      return {
        ...state,
        pillarIndex: action.payload,
      };
    },
    setAccPillarIndex: (state = initialState, action) => {
      return {
        ...state,
        accPillarIndex: action.payload,
      };
    },
    setAccSubPillarIndex: (state = initialState, action) => {
      return {
        ...state,
        accSubPillarIndex: action.payload,
      };
    },
    setExpandState: (state = initialState, action) => {
      return {
        ...state,
        expandState: action.payload,
      };
    },
    setErrorMessage: (state = initialState, action) => {
      return {
        ...state,
        errorMessage: action.payload,
      };
    },
    setRegionLabelValue: (state = initialState, action) => {
      return {
        ...state,
        regionLabelValue: action.payload,
      };
    },
    setIncomeLabelValue: (state = initialState, action) => {
      return {
        ...state,
        incomeLabelValue: action.payload,
      };
    },
    setRegionSelection: (state = initialState, action) => {
      return {
        ...state,
        regionSelected: action.payload,
      };
    },
    setIncomeSelection: (state = initialState, action) => {
      return {
        ...state,
        incomeSelected: action.payload,
      };
    },
    setTableData: (state = initialState, action) => {
      return {
        ...state,
        tableData: action.payload,
      };
    },
    setOpenModal: (state = initialState, action) => {
      return {
        ...state,
        openModal: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  rankScoreToggle,
  setOnState,
  setErrorMessage,
  setExpandState,
  setTableData,
  setIncomeLabelValue,
  setRegionLabelValue,
  setIncomeSelection,
  setRegionSelection,
  rankTableResetStates,
  setModalData,
  setOpenModal,
  setGlobalData,
  setPillarIndex,
  setAccPillarIndex,
  setAccSubPillarIndex,
  setInfoModalOpen,
} = RankTableSlice.actions;

export default RankTableSlice.reducer;
