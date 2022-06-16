import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useMemo, useState } from 'react';

import { getAvgOverallRank, getAvgOverallScore, getPillars, getSubPillars } from './PillarTableLogic';
import { getRegionAndIncomeGroup } from '../../utils/helperFunctions';
import { headerOptions, colors } from '../../data/pillartable/pillarTableData';
import { SCORE, SCORE_OUT_OF } from '../../utils/Constants';
import Accordion from '../utilities/Accordion/ResponsiveAccordion';
import Dropdown from '../utilities/Dropdown/Dropdown';
import Headings from '../utilities/Headings';
import theme from '../../themes';
import Wrapper from '../wrapper';

import { ReactComponent as FaTimes } from '../../assets/images/svgs/bold-close.svg';
import { AccordionHeader, PillarTableContainer, StyledSubHeadings } from './Pillartable.styled';
import { StyledAccordionTitle } from '../utilities/Accordion/StyledResponsiveAccordion.styled';
import CommonModal from '../utilities/Modal/Modal';
import PillarDefination from '../utilities/PopupModal/PillarDefination';
import { setInfoModalOpen } from '../../redux/slices/pillarTableCountry';

const PillarTable = ({ match }) => {
    const [togglePlaceHolder, setTogglePlaceHolder] = useState(`${SCORE.toLowerCase()} / ${SCORE_OUT_OF}`);
    const [countryProfile, setCountryProfile] = useState('');
    const selectedCountry = useSelector(state => state.pillarTable.countryData);
    const isModalOpen = useSelector(state => state.pillarTable.isInfoModalOpen);
    const toggleValue = togglePlaceHolder.split(' ')[0];
    const avgOverallScore = useMemo(() => getAvgOverallScore(countryProfile), [countryProfile]);
    const avgOverallRank = useMemo(() => getAvgOverallRank(countryProfile), [countryProfile]);
    const pillarsName = useMemo(() => getPillars(selectedCountry, toggleValue), [togglePlaceHolder, selectedCountry]);
    const pillarIndex = useSelector(state => state.pillarTable.pillarIndex);
    const regionAndIncome = useMemo(() => getRegionAndIncomeGroup(countryProfile), [countryProfile]);
    const dispatch = useDispatch();

    // toggle heading placeholder
    const handleHeaderToggle = (e) => {
        setTogglePlaceHolder(e.value);
    };

    // toggle opening/closing of modal
    const toggleModal = () => {
        dispatch(setInfoModalOpen(!isModalOpen));
    };

    useEffect(() => {
        const country = match.params.country.replace(/-/g, ' ');
        setCountryProfile(country);
    }, [match]);


    return (
        <PillarTableContainer className="pillar-table-section">
            <Wrapper width="100%">
                <Headings className='pillar-table-heading' heading='Country Profile - ' subHeading={countryProfile} >
                    <StyledSubHeadings className='pillar-table-region-name'>Overall Score - <span>{avgOverallScore}</span></StyledSubHeadings> |
                    <StyledSubHeadings className='pillar-table-income-group'>Overall Rank - <span>{avgOverallRank}</span></StyledSubHeadings>  |
                    <StyledSubHeadings className='pillar-table-region-name'>Region - <span>{regionAndIncome.get('region')}</span></StyledSubHeadings>  |
                    <StyledSubHeadings className='pillar-table-income-group'>Income Group - <span>{regionAndIncome.get('income_group')}</span></StyledSubHeadings>
                </Headings>
                <AccordionHeader
                    type="button"
                    className='accordion pillar-header'
                    hoverColor={theme.colors.PRIMARY_COLOR}
                >
                    <StyledAccordionTitle className="accordion__title">
                        pillar
                    </StyledAccordionTitle>
                    <Dropdown
                        options={headerOptions}
                        styleClass='pillarHeader'
                        value='Pillar'
                        onChange={(e) => handleHeaderToggle(e)}
                        placeholder={togglePlaceHolder}
                        container='spider-diagram'
                    />
                </AccordionHeader>
                {isModalOpen && (<CommonModal styleClass='description-popup' isPopup onRequestClose={toggleModal}>
                    <PillarDefination pillarIndex={pillarIndex}/>
                    <FaTimes
                        onClick={() => toggleModal()}
                        className="popup-close"
                        width="20"
                        height="20"
                    />
                </CommonModal>)}
                <div className="pillars-accordion">
                    {
                        pillarsName.map((item, index) => {
                            const subPillars = getSubPillars(selectedCountry, toggleValue, item.code);
                            const colorsObj = colors.find((color) => (color.code === item.code));
                            return (<Accordion
                                data={subPillars}
                                key={index}
                                pillarName={item.label}
                                asideTitle={item.value}
                                heightValue={250}
                                colors={colorsObj}
                            />)
                        })
                    }
                </div>
            </Wrapper>
        </PillarTableContainer>
    )
}

export default PillarTable;
