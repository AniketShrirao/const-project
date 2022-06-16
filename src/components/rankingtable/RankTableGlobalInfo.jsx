import React, { useMemo } from 'react';

import { getGlobalData, getPillarsWiseAverage } from '../../utils/helperFunctions';
import { SCORE, SCORE_OUT_OF } from '../../utils/Constants';

import { GlobalRankInfo, PillarRankInfo } from './Rankingtable.styled';

const RankTableGlobalInfo = ({ toVisible }) => {

    const pillarsAvg = useMemo(() => getPillarsWiseAverage(SCORE), []);
    const globalToggleData = useMemo(() => getGlobalData(SCORE), []);

    return (
        <GlobalRankInfo toVisible={toVisible} >
            <h4>Average Global {SCORE}: <span className='value'>{Math.round(globalToggleData)} / {SCORE_OUT_OF}</span></h4>
            <p>Average <span className='toggle-label'>{SCORE}</span>  of individual pillars: </p>
            <PillarRankInfo>
                {
                    pillarsAvg.map((pillar, index) => (<li key={index}>{pillar.label} : <span className='value'>{Math.round(pillar.value)}</span></li>))
                }
            </PillarRankInfo>
        </GlobalRankInfo>
    )
}

export default React.memo(RankTableGlobalInfo);
