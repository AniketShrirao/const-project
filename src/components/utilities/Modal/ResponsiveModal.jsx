import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { mapResetStates, modalPillarValueChange, modalSubPillarValueChange, selection, setIsPillarSelected, setPillarOptions, setSubPillarOptions } from '../../../redux/slices/mapMeasure';
import Accordion from '../Accordion/ResponsiveAccordion';
import data from '../../../data/worldmap/measureLevelCode.json';

import StyledModal from './StyledResponsiveModal.styled';

import {
  StyledApplyButton,
  StyledResetButton,
} from '../Button/StyledButton.styled';

import { ReactComponent as FaTimes } from '../../../assets/images/svgs/bold-close.svg';
import { CONSUMER_PROTECTION_INDEX } from '../../../utils/Constants';

const Modal = ({ isWorldMap, onRequestClose, modalPillar, modalSubPillar }) => {
  const dispatch = useDispatch();
  const pillarValue = useSelector(state => state.worldMap.modalPillarValue);
  const subPillarValue = useSelector(state => state.worldMap.modalSubPillarValue);
  const pillarOptions = useSelector(state => state.worldMap.pillarOptions);
  const subPillarOptions = useSelector(state => state.worldMap.subPillarOptions);
  const isPillarSelected = useSelector(state => state.worldMap.isPillarSelected);
  const [rankingData, setRankingData] = useState([]);

  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible';
    };
  },[]);

  const getSubPillars = (code) => {
    const map = new Map();

    data.forEach((element, index) => {
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

  const formatSubPillarData = (selectedCategory) => {
    let subPillarOption;
    rankingData.forEach((countyData) => {
      if (countyData.dataMeasure === selectedCategory) {
        const countyCode = countyData.code;
        subPillarOption = getSubPillars(countyCode);
      }
    });
    dispatch(setSubPillarOptions(subPillarOption));
  };

  const formatPillarData = (pillarData) => {
    const pillarOption = [];
    pillarData.forEach((countyPillar, index) => {
      if (countyPillar.level === 1) {
        pillarOption.push({
          value: index,
          label: countyPillar.dataMeasure,
        });
      }
    });
    dispatch(setPillarOptions(pillarOption));
  };

  useEffect(() => {
    setRankingData(data);
    formatPillarData(rankingData);
  }, [data, rankingData]);

  const handleApply = () => {
    onRequestClose();
    dispatch(setIsPillarSelected(''));
    if (subPillarValue !== 'Select Sub Category') {
      dispatch(selection(subPillarValue));
    } else {
      dispatch(selection(pillarValue));
    }
  };

  const handleReset = () => {
    dispatch(selection(CONSUMER_PROTECTION_INDEX));
    dispatch(mapResetStates());
    onRequestClose();
  };

  const handlePillarClick = (e) => {    
    dispatch(modalPillarValueChange(e.target.innerText));
    formatSubPillarData(e.target.innerText);
    modalPillar(e);
    dispatch(modalSubPillarValueChange('Select Sub Category'));
    dispatch(setIsPillarSelected(''));
  };

  const handleSubPillarClick = (e) => {
    dispatch(modalSubPillarValueChange(e.target.innerText));
    modalSubPillar(e);
  };

  return (
    <StyledModal>
      <div className="modal__backdrop">
        <div className="modal__container">
          <div className="close__modal">
            <h4 className={isWorldMap ? 'world-map-filter-heading' : ''}>World Map Filters</h4>
            <FaTimes
              onClick={() => onRequestClose()}
              width={28}
              height={28}
            />
          </div>
          <Accordion
            data={pillarOptions}
            value={pillarValue}
            onClick={handlePillarClick}
            styleClass={isWorldMap && 'world-map-scroll'}
          />
          <Accordion
            data={subPillarOptions}
            value={subPillarValue}
            onClick={handleSubPillarClick}
            styleClass={`${isPillarSelected} ${isWorldMap && 'world-map-scroll'}`}
          />
          <div className="buttons">
            <StyledApplyButton styleClass="apply" onClick={handleApply}>
              Apply
            </StyledApplyButton>
            <StyledResetButton styleClass="reset" onClick={handleReset}>
              Reset Filter
            </StyledResetButton>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
