import React, { useMemo } from 'react'

import { getPillarsDescriptions } from '../../../utils/helperFunctions';

import { StyledPillarDefHeading, StyledPillarDefination } from './PillarDefination.styled';

const PillarDefination = ({ pillarIndex }) => {

    const [pillarName, pillarDescription] = useMemo(() => getPillarsDescriptions(pillarIndex), [pillarIndex]);

    return (
        <StyledPillarDefination>
            <StyledPillarDefHeading>{pillarName}</StyledPillarDefHeading>
            <p>{pillarDescription}</p>
        </StyledPillarDefination>
    )
}

export default React.memo(PillarDefination);
