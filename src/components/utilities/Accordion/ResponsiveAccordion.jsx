import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  StyledAccordionSection,
  StyledAccordionButton,
  StyledAccordionTitle,
  StyledAccordionContent,
  StyledAccordionText,
} from './StyledResponsiveAccordion.styled';

import { setInfoModalOpen, setPillarIndex } from '../../../redux/slices/pillarTableCountry';

import { ReactComponent as Chevron } from '../../../assets/images/svgs/bi-chevron-down-light.svg';
import { ReactComponent as FaCaretUp } from '../../../assets/images/svgs/arrow_drop_down-up.svg';
import { ReactComponent as FaCaretDown } from '../../../assets/images/svgs/arrow_drop_down.svg';
import { ReactComponent as InfoCircle } from '../../../assets/images/svgs/info.svg';

const Accordion = ({ pillarName, value, asideTitle, colors, hoveredColor, heightValue, data, onClick, styleClass = '' }) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const [asideClass, setAsideClass] = useState('');
  const [pillarTableClass, setPillarTableClass] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [overflowHidden, setOverflowHidden] = useState('');
  const [subPillarIcon, setSubPillarIcon] = useState('faCaretDown');
  const dispatch = useDispatch();
  const isInfoModalOpen = useSelector(state => state.RankTable.isInfoModalOpen);

  const handleClick = (event) => {
    if (onClick) onClick(event);
  };

  const accordionContentReference = useRef(null);
  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    if (!heightValue) {
      setHeightState(
        setActive === 'active'
          ? '0px'
          : `${accordionContentReference.current.scrollHeight - 50}px`
      );
    } else {
      setHeightState(setActive === 'active' ? '0px' : `${heightValue}px`);
    }

    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    );

    if (asideTitle) {
      setMenuIsOpen((prev) => !prev);
      if (menuIsOpen) {
        setSubPillarIcon('faCaretDown');
      } else {
        setSubPillarIcon('faCaretUp');
      }
    }
  };

  const renderSubPillarIcon = icon => icon === 'faCaretDown' ?
    <FaCaretDown width={15.2} height={20} /> : <FaCaretUp width={15.2} height={20} />

  const handleInfoClick = (e) => {
    const indexValue = e.target.closest('p').innerText;
    e.stopPropagation();
    dispatch(setPillarIndex(indexValue));
    dispatch(setInfoModalOpen(!isInfoModalOpen));
  }

  useEffect(() => {
    setAsideClass('pillar-names');
    setPillarTableClass('pillar-table');
    setOverflowHidden('overflow-hide');
  }, [asideTitle])

  return (
    <StyledAccordionSection className={`accordion__section ${styleClass}`}>
      <StyledAccordionButton
        type="button"
        className={`accordion ${pillarTableClass} ${setActive}`}
        onClick={() => toggleAccordion()}
        hoverColor={hoveredColor}
        colored={colors}
      >
        <StyledAccordionTitle className={`accordion__title ${asideClass}`}>
          {asideTitle ? (
            <>
              <>{pillarName}</>
              <InfoCircle
                onClick={(e) => handleInfoClick(e)}
                width={14}
                height={14}
              />
            </>
          ) : (
            <>{value}</>
          )}
        </StyledAccordionTitle>
        {
          asideTitle &&
          <StyledAccordionTitle className="accordion__title pillar-scores">
            {asideTitle}
          </StyledAccordionTitle>
        }
        {
          asideTitle ?
            renderSubPillarIcon(subPillarIcon)
            :
            <Chevron
              className={setRotate}
              height='15'
              width='15'
            />
        }
      </StyledAccordionButton>
      <StyledAccordionContent
        ref={accordionContentReference}
        style={{ maxHeight: `${setHeight}` }}
        colored={colors}
        className={`accordion__content ${asideTitle ? overflowHidden : ''}`}
      >
        {(data) && data.map((item) => {
          if (asideTitle) {
            return (
              <StyledAccordionText
                key={parseInt(item.value, 10) + Math.random(1)}
                className="accordion__text sub-pillar-header"
                onClick={handleClick}
                hoverColor={hoveredColor}
              >
                <p className="sub-pillar-names">
                  {item.label}
                  <InfoCircle
                    onClick={(e) => handleInfoClick(e)}
                    width={14}
                    height={14}
                  />
                </p>
                <p className="sub-pillar-scores">{item.value}</p>
              </StyledAccordionText>
            )
          }
          return (
            <StyledAccordionText
              key={item.value}
              className="accordion__text"
              onClick={handleClick}
              hoverColor={hoveredColor}
            >
              {item.label}
            </StyledAccordionText>
          );
        })}
      </StyledAccordionContent>
    </StyledAccordionSection>
  );
};

export default Accordion;
