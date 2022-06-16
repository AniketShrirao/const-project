import { Cascader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import './cascader.css';
import { StyledCountryButton } from '../utilities/Button/StyledButton.styled';

import {
  StyledSpiderFilter,
  VersusHeading,
  OverlayStrip,
} from './Spider.styled';
import { polarChartResetStates, spiderSelection } from '../../redux/slices/spiderFilter';

import CommonModal from '../utilities/Modal/Modal';
import Accordion from '../utilities/Accordion/ResponsiveAccordion';
import ResetButton from '../utilities/Button/ResetButton';
import { currentState, resetButtonState } from '../../redux/slices/resetButton';
import { getRegions, getIncomeGroups, filterOptions } from './PolarChartLogic';
import { getCountries } from '../../utils/helperFunctions';

import { ReactComponent as FaTimes } from '../../assets/images/svgs/bold-close.svg';
import { ReactComponent as FaCaretDown } from '../../assets/images/svgs/arrow_drop_down.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SpiderFilter = ({ country }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState('');
  const resetActive = useSelector(state => state.resetButton.value);

  const cascaderElement = useRef(null);
  const history = useHistory();
  const { width } = useWindowDimensions();

  const isPageChange = history.location.pathname;

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const onChange =
    width < 500 ? null : (value) => {
      dispatch(spiderSelection(value));
      setSelectedDropdown(value?.[1]);
      dispatch(currentState('enable-reset'));
    }

  const displaySelected = (label) => {
    return label?.[1];
  };

  const handleClick = (e) => {
    const selectedValue =
      e.target.parentElement.previousSibling.children[0].innerText.toLowerCase();
    let dispatchValue;
    switch (selectedValue) {
      case 'countries':
        dispatchValue = [selectedValue, e.target.innerText];
        break;
      case 'income groups':
        dispatchValue = [selectedValue, e.target.innerText];
        break;
      case 'regions':
        dispatchValue = [selectedValue, e.target.innerText];
        break;
      default:
        break;
    }
    toggleModal();
    dispatch(spiderSelection(dispatchValue));
    dispatch(currentState('enable-reset'));
    setSelectedDropdown(dispatchValue?.[1]);
  };

  const onResetClick = () => {
    cascaderElement.current.setValue('');
    setSelectedDropdown('');
    dispatch(polarChartResetStates());
    dispatch(resetButtonState());
  }

  useEffect(() => {
    if (isPageChange) {
      dispatch(polarChartResetStates());
      cascaderElement.current.setValue('');
      setSelectedDropdown('');
      dispatch(resetButtonState());
    }
  }, [isPageChange]);

  return (
    <StyledSpiderFilter className="spider__filters">
      <StyledCountryButton>{country}</StyledCountryButton>
      <VersusHeading>VS</VersusHeading>
      <div className="ant-cascader">
        <Cascader
          suffixIcon={
            <FaCaretDown />
          }
          placeholder={selectedDropdown || 'Select'}
          displayRender={displaySelected}
          options={filterOptions}
          onChange={onChange}
          ref={cascaderElement}
        />
      </div>
      {width < 550 && (
        <OverlayStrip onClick={toggleModal} className="overlay-strip" />
      )}
      {isModalOpen && (
        <CommonModal
          onRequestClose={toggleModal}
        >
          <div className="close__modal">
            <h4>Polar Chart Filters</h4>
            <FaTimes
              onClick={() => toggleModal()}
              width={28}
              height={28}
            />
          </div>
          <Accordion
            data={getCountries()}
            value="Countries"
            onClick={handleClick}
            heightValue={250}
            hoveredColor
          />

          <Accordion
            data={getIncomeGroups()}
            value="Income Groups"
            onClick={handleClick}
            heightValue={250}
            hoveredColor
          />

          <Accordion
            data={getRegions()}
            value="Regions"
            onClick={handleClick}
            heightValue={250}
            hoveredColor
          />
        </CommonModal>
      )}
      <ResetButton resetActive={resetActive} onReset={onResetClick} />
    </StyledSpiderFilter>
  );
};

export default SpiderFilter;
