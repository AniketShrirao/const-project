import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { currentState, resetButtonState } from '../../redux/slices/resetButton';
import { pillarValueChange, selection, subPillarValueChange, modalSubPillarValueChange, modalPillarValueChange, titleChange, mapResetStates } from '../../redux/slices/mapMeasure';
import Dropdown from '../utilities/Dropdown/Dropdown';
import Modal from '../utilities/Modal/ResponsiveModal';
import ResetButton from '../utilities/Button/ResetButton';

import {
  Hamburger,
  StyledHamburgerBackground,
  StyledFilters,
} from './Map.styled';
import { formatPillarData, formatSubPillarData } from './MapLogic';
import { SCORE } from '../../utils/Constants';

const MapFilter = () => {
  const dispatch = useDispatch();
  const pillar = useSelector(state => state.worldMap.pillarValue);
  const subPillar = useSelector(state => state.worldMap.subPillarValue);
  const resetActive = useSelector(state => state.resetButton.value);
  const [isWorldMap, setIsWorldMap] = useState(false);

  const [pillarOptions, setPillarOptions] = useState([]);
  const [subPillarOptions, setSubPillarOptions] = useState([]);
  const [activeDropDown, setActiveDropDown] = useState('disable-menu');
  const [isModalOpen, setModalIsOpen] = useState(false);

  const history = useHistory();
  const isPageChange = history.location.pathname;

  // toggle opening/closing of modal
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  // selection of pillar handling
  const handlePillar = (county) => {
    dispatch(pillarValueChange(county));
    const selectedValue = county.label;
    const subPillarOption = formatSubPillarData(selectedValue);
    setSubPillarOptions(subPillarOption);
    dispatch(selection(selectedValue));
    setActiveDropDown((prev) => !prev);
    dispatch(currentState('enable-reset'));
    dispatch(titleChange(SCORE));
    dispatch(subPillarValueChange(''));
  };

  // selection of sub pillar handling
  const handleSubPillar = (county) => {
    dispatch(subPillarValueChange(county));
    const selectedValue = county.label;
    dispatch(titleChange(SCORE));
    dispatch(selection(selectedValue));
  };

  // selection of modal pillar handling
  const setModalPillar = (element) => {
    dispatch(modalPillarValueChange(element.target.innerText));
    dispatch(titleChange(SCORE));
  }

  // selection of modal sub pillar handling
  const setModalSubPillar = (element) => {
    dispatch(modalSubPillarValueChange(element.target.innerText));
    dispatch(titleChange(SCORE));
  }

  // on clicking of reset button for filters
  const onResetClick = () => {
    dispatch(mapResetStates());
    setActiveDropDown('disable-menu');
    dispatch(resetButtonState());
  }

  // on page change reset
  useEffect(() => {
    if (isPageChange) {
      dispatch(mapResetStates());
      dispatch(resetButtonState());
    }
  }, [isPageChange]);

  useEffect(() => {
    const pillarOption = formatPillarData();
    setPillarOptions(pillarOption);
    setIsWorldMap(true);
  }, []);

  return (
    <StyledFilters className="filters">
      <Dropdown
        options={pillarOptions}
        value={pillar}
        onChange={handlePillar}
        placeholder="Select Pillar"
      />
      <Dropdown
        options={subPillarOptions}
        styleClass={`subpillars ${activeDropDown}`}
        value={subPillar}
        onChange={handleSubPillar}
        placeholder="Select Indicator"
      />
      <div className="ham-menu">
        <Hamburger className="hamburger" onClick={toggleModal} />
        <StyledHamburgerBackground onClick={toggleModal} />
      </div>
      {isModalOpen && (
        <Modal
          modalPillar={setModalPillar}
          modalSubPillar={setModalSubPillar}
          onRequestClose={toggleModal}
          isWorldMap={isWorldMap}
        />
      )}
      <ResetButton resetActive={resetActive} onReset={onResetClick} />
    </StyledFilters>
  );
};

export default MapFilter;
