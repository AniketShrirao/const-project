import React from 'react'

import Wrapper from '../../wrapper'

import StyledHeading from './StyledHeadings.styled'

const Headings = ({ children, heading, subHeading }) => {
    return (
        <div className='heading'>
            <Wrapper>
                <StyledHeading>{heading}{subHeading && (<span>{subHeading}</span>)}</StyledHeading>
                {children}
            </Wrapper>
        </div>
    )
}

export default React.memo(Headings);
