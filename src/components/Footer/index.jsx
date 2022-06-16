import React from 'react';

import Wrapper from '../wrapper';

import { CopyrightInfo, FooterContainer, QuickLinks } from './Footer.styled';

import FooterLogo from '../../assets/images/logos/footer-logo.jpg';
import FacebookIcon from '../../assets/images/icons/facebook-icon.svg';
import TwitterIcon from '../../assets/images/icons/twitter-icon.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import YoutubeIcon from '../../assets/images/icons/youtube-icon.svg';
import InstaIcon from '../../assets/images/icons/insta-icon.svg';

const SOCIAL_LINKS = [
  {
    id: 1,
    title: 'Facebook',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/consumersinternational',
  },
  {
    id: 2,
    title: 'Twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com/Consumers_Int',
  },
  {
    id: 3,
    title: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/company/consumers-international?trk=hb_tab_compy_id_1709164',
  },
  {
    id: 4,
    title: 'Youtube',
    icon: YoutubeIcon,
    url: 'https://www.youtube.com/user/ConsumersIntl',
  },
  {
    id: 5,
    title: 'Instagram',
    icon: InstaIcon,
    url: 'https://www.instagram.com/consumers_int/',
  },
];

const Footer = () => {
  const renderSocialLinks = SOCIAL_LINKS.map((item) => (
    <li className="social-link" key={item.id}>
      <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">
        <figure>
          <img src={item.icon} alt={item.title} width="45" height="45" loading="lazy" />
        </figure>
      </a>
    </li>
  ));

  return (
    <FooterContainer>
      <Wrapper>
        <QuickLinks>
          <ul>
            <li className="contact-button">
              <a href="https://www.consumersinternational.org/contact-us/" target='_blank' rel="noopener noreferrer" title="Contact Us">
                <span className="contact-text">Contact Us</span>
                <span className="plus-icon" />
              </a>
            </li>
            {renderSocialLinks}
          </ul>
        </QuickLinks>
        <CopyrightInfo>
          <div className="copyright">
            <p>
              <span>Copyright ©Consumers International 2021</span>
              <a href="https://www.consumersinternational.org/website-privacy-policy/" target='_blank' rel="noopener noreferrer">Website Privacy Policy</a>
            </p>
            <p>
              Consumers International is a charity (No.1122155) and a
              not-for-profit company limited by guarantee (No. 04337865)
              registered in England and Wales.
            </p>
          </div>
          <div className="footer-logo">
            <figure>
              <a href="https://www.consumersinternational.org/" target='_blank' rel="noopener noreferrer" title="Home">
                <img src={FooterLogo} alt="Footer Logo" loading="lazy" />
              </a>
            </figure>
          </div>
        </CopyrightInfo>
      </Wrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);
