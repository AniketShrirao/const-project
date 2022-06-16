import React, { useMemo } from 'react';

import { getPillarsModal } from './RankTableLogic';
import RankTableModalAccordion from './RankTableModalAccordion';

const RankTablePillars = ({ modalData }) => {

    const pillarData = useMemo(() => getPillarsModal(modalData), [modalData]);

    return (
        <div className='pillar-indicator-data'>
            {
                pillarData.map((pillar, ind) => {
                    const pillarName = Object.keys(pillar)[0];
                    const pillarValue = pillar[pillarName];
                    return (
                        <RankTableModalAccordion key={ind} pillar={pillar} heightValue='fit-content' pillarName={pillarName} pillarValue={pillarValue} />
                    )
                })
            }
        </div>
    )
}

export default RankTablePillars;
