import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import { getPillarsDescriptions } from '../../utils/helperFunctions';
import { setAccSubPillarIndex } from '../../redux/slices/RankTable';

import { ReactComponent as FaTimes } from '../../assets/images/svgs/bold-close.svg';
import { ReactComponent as InfoCircle } from '../../assets/images/svgs/info.svg';

const RankTableIndicators = ({ keyValue, children, data }) => {

    const [pillarsName, setPillarName] = useState('');
    const [pillarsDescription, setPillarDescription] = useState('');
    const accSubPillarIndex = useSelector(state => state.RankTable.accSubPillarIndex);
    const dispatch = useDispatch();

    const handleInfoClick = (e, index) => {
        if (index === accSubPillarIndex) {
            return dispatch(setAccSubPillarIndex(null));
        }
        dispatch(setAccSubPillarIndex(index));
        const [pName, desc] = getPillarsDescriptions(e.target.closest('p').innerText);
        setPillarName(pName);
        setPillarDescription(desc);
    }

    return (
        <li key={keyValue}>
            <div>
                <p>
                    {pillarsName || children}
                    {
                        accSubPillarIndex === keyValue ? <FaTimes width="18" height="18" onClick={(e) => handleInfoClick(e, keyValue)} /> : <InfoCircle width="14" height="14" onClick={(e) => handleInfoClick(e, keyValue)} />
                    }
                </p>
                <span>{data}</span>
            </div>
            {accSubPillarIndex === keyValue ? (
                <>
                    <div className='modal-accordion-content'>
                        <p>{pillarsDescription}</p>
                    </div>
                </>
            ) : null
            }
        </li>
    )
}

export default RankTableIndicators;
