import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useMemo, useState } from 'react';

import { getIncomeOptions, getRegionOptions } from './RankTableLogic';
import { rankTableResetStates, setErrorMessage, setTableData } from '../../redux/slices/RankTable';
import { SCORE } from '../../utils/Constants';
import Dropdown from '../utilities/Dropdown/Dropdown';
import RankScoreToggleButton from '../utilities/Button/RankScoreToggleButton';

import { RankFilterSection } from './Rankingtable.styled';
import { ReactComponent as FaTimes } from '../../assets/images/svgs/bold-close.svg';
import { StyledRankResetButton } from '../utilities/Button/StyledButton.styled';
import rankTableRank from '../../data/rankingtable/rankTableRank.json';

const RankTableFilter = ({ onToggleRankScore, onIncomeFilterChange, onRegionFilterChange, gridApiObject, gridColumnApiObject, sortByTotal, setHeaderName }) => {
    const [incomeValue, setIncomeValue] = useState('');
    const [regionValue, setRegionValue] = useState('');
    const errorMessage = useSelector(state => state.RankTable.errorMessage);
    const [visible, setVisible] = useState(false);


    const regionOptions = useMemo(() => getRegionOptions(), []);
    const incomeOptions = useMemo(() => getIncomeOptions(), []);
    const dispatch = useDispatch();

    const handleRegionDropDown = (region) => {
        onRegionFilterChange(region.label);
        setRegionValue(region);
    }

    const handleIncomeDropDown = (income) => {
        onIncomeFilterChange(income.label);
        setIncomeValue(income);
    }

    const handleReset = () => {
        setIncomeValue('');
        setRegionValue('');
        dispatch(rankTableResetStates());
        setHeaderName(SCORE, gridApiObject);
        sortByTotal('asc', gridColumnApiObject);
        dispatch(setTableData(rankTableRank));
        dispatch(setErrorMessage(''));
        gridApiObject.setRowData(rankTableRank);
    };

    useEffect(() => {
        // message is empty (meaning no errors). Adjust as needed
        if (!errorMessage) {
            setVisible(false)
            return
        }
        // error exists. Display the message and hide after 5 secs
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [errorMessage]) // executes every time `message` changes. Adjust as needed


    return (
        <RankFilterSection className='rank-table-filters'>
            <RankScoreToggleButton styleClass='' onToggleRankScore={onToggleRankScore} />
            <Dropdown
                options={incomeOptions}
                onChange={handleIncomeDropDown}
                value={incomeValue}
                placeholder="Select Income Group"
            />
            {visible && <span className='error-message'>{errorMessage}</span>}
            <Dropdown
                options={regionOptions}
                onChange={handleRegionDropDown}
                value={regionValue}
                placeholder="Select Region"
            />
            <StyledRankResetButton styleClass="reset-rank-table" onClick={handleReset}>
                Reset Filter
                <FaTimes width="16" height="16" />
            </StyledRankResetButton>
        </RankFilterSection>
    )
}

export default RankTableFilter;
