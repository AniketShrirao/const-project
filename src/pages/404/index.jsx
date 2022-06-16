import React from 'react'
import { FourZeroFourContainer, FourZeroFourBody, FourZeroFourHero } from './FourZeroFour.styled';
import Wrapper from '../../components/wrapper/index'
import BannerImg from '../../assets/images/404.jpg'; 

const FourZeroFourPage = () => {
  return (
    <FourZeroFourContainer>
        <img src={BannerImg} alt='banner-img'/>
        <FourZeroFourHero>
          <h2>404</h2>
        </FourZeroFourHero>
        <Wrapper>
          <FourZeroFourBody>
          <h3>404 Page not found</h3>
          <p>The requested page cannot be found.</p>
          <p>Please check the address and spelling.</p>
          </FourZeroFourBody>
        </Wrapper>
    </FourZeroFourContainer>
  )
}

export default FourZeroFourPage;