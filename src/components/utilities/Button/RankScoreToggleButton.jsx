import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { RANK, SCORE } from '../../../utils/Constants';
import { rankScoreToggle, setOnState } from '../../../redux/slices/RankTable';

import { RankScoreToggle } from '../../rankingtable/Rankingtable.styled';

const RankScoreToggleButton = ({ onToggleRankScore, onToggleSwitch, styleClass }) => {
    const on = useSelector(state => state.RankTable.on);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(setOnState((() => (on === RANK) ? SCORE : RANK)()));
        dispatch(rankScoreToggle((on === RANK) ? RANK : SCORE));
    }

    const onToggleResponsive = () => {
        if (styleClass !== '')
            onToggleSwitch();
    }

    return (
        <RankScoreToggle className={`${styleClass} ${on === RANK ? 'on' : 'off'}`} on={on} onClick={() => { toggle(); onToggleRankScore(); onToggleResponsive(); }}>
            <span>{RANK}</span><span className="pin" /><span >{SCORE}</span>
        </RankScoreToggle>
    )
}

export default RankScoreToggleButton;
