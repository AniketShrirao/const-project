import { useDispatch, useSelector } from 'react-redux';
import React, { useMemo, useState } from 'react';

import { getPillarData, getPillarsDescriptions } from '../../utils/helperFunctions';
import { setAccPillarIndex } from '../../redux/slices/RankTable';
import rankingData from '../../data/worldmap/measureLevelCode.json';
import RankTableIndicators from './RankTableIndicators';

import { PillarIndicators } from './Rankingtable.styled';
import { ReactComponent as FaTimes } from '../../assets/images/svgs/close.svg';
import { ReactComponent as InfoCircle } from '../../assets/images/svgs/info.svg';

const RankTableModalAccordion = ({ pillar, pillarName, pillarValue }) => {
    const [pillarsName, setPillarName] = useState('');
    const [pillarsDescription, setPillarDescription] = useState('');
    const accPillarIndex = useSelector(state => state.RankTable.accPillarIndex);
    const pillars = useMemo(() => getPillarData(rankingData), []);
    const dispatch = useDispatch();

    const handleInfoClick = (e, pillarIndex) => {
        if (pillarIndex === accPillarIndex) {
            return dispatch(setAccPillarIndex(null));
        }
        pillars.forEach((pillarVal, index) => {
            if (pillarVal === e.target.closest('p').innerText) {
                const [pName, desc] = getPillarsDescriptions(index);
                setPillarName(pName);
                setPillarDescription(desc);
                dispatch(setAccPillarIndex(pillarIndex));
            }
        })
    }

    return (
        <PillarIndicators className={`pillar-indicators __${pillar.code}`}>
            <div className='pillarHead'>
                <p className='pillar-heading'>{pillarName || pillarsName}
                    {
                        accPillarIndex === pillar.code ?
                            <FaTimes
                                width={15}
                                height={15}
                                onClick={(e) => handleInfoClick(e, pillar.code)}
                            /> :
                            <InfoCircle
                                width={20}
                                height={15}
                                onClick={(e) => handleInfoClick(e, pillar.code)}
                            />
                    }
                </p><span>{pillarValue}</span>
            </div>
            {
                accPillarIndex === pillar.code && (
                    <>
                        <div className='modal-accordion-content' >
                            <p>{pillarsDescription}</p>
                        </div>
                    </>
                )
            }
            <ul className='indicators'>
                {
                    (pillar.children) && pillar.children.map((subpillar) => {
                        return (
                            <RankTableIndicators
                                key={subpillar[1].codeNumber}
                                keyValue={subpillar[1].codeNumber}
                                data={subpillar[1].value}
                                heightValue='fit-content'
                            >
                                {subpillar[0]}
                            </RankTableIndicators>
                        )
                    })
                }
            </ul>
        </PillarIndicators>
    )
}

export default RankTableModalAccordion;
