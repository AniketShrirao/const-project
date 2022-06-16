import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { mapResetStates } from '../../redux/slices/mapMeasure';
import Headings from '../utilities/Headings';
import Wrapper from '../wrapper';

import { HeaderContainer } from './Header.styled';
import SiteLogo from '../../assets/images/logos/logo.jpg';
import { getCountries } from '../../utils/helperFunctions';

const NAV_LINKS = [
  {
    id: 1,
    title: 'World Map',
    link: '/',
  },
  {
    id: 2,
    title: 'Country Profile',
    subMenus: getCountries(),
  },
];

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const dropdownMenu = document.querySelectorAll('nav .dropdown-menu');

    document.body.addEventListener(
      'click',
      () => {
        dropdownMenu.forEach((item) => {
          if (item.classList.contains('active')) {
            item.classList.remove('active');
          }
        });
      },
      false
    );
  },[]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    const target = e.currentTarget;
    const dropdownMenu = document.querySelectorAll('nav .dropdown-menu');
    dropdownMenu.forEach((item) => {
      if (!target.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    target.classList.toggle('active');
  };

  const closeMenu = () => {
    const hamburger = document.querySelector('header .hamburger');
    const body = document.querySelector('body');
    if (hamburger) {
      hamburger.classList.remove('active');
      body.style.overflow = 'auto';
    }
  };

  const setMapHoverTitle = () => {
    dispatch(mapResetStates());
    closeMenu();
  }

  const toggleNavigation = (e) => {
    const target = e.currentTarget;
    const body = document.querySelector('body');
    target.classList.toggle('active');
    if (target.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  };

  const renderLinks = NAV_LINKS.map((item) => (
    <li key={item.id}>
      {!item.subMenus ? (
        <Link to={item.link} onClick={setMapHoverTitle} onKeyPress={null} title={item.title}>
          {item.title}
        </Link>
      ) : (
        <div
          className="dropdown-menu"
          onClick={toggleMenu}
          onKeyPress={null}
          title={item.title}
        >
          {item.title}
          <ul className="dropdown-items">
            {item.subMenus.map((country,index) => (
              <li key={index}>
                <Link
                  to={`/country-profile/${country.value.toLowerCase()
                    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')
                    .replace(/\s+/g, '-')}/`}
                  title={country.value}
                  onClick={closeMenu}
                >
                  {country.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ));

  return (
    <HeaderContainer>
      <Wrapper>
        <div className="site-logo">
          <h1>
            <figure>
              <a href="https://www.consumersinternational.org/" target='_blank' rel="noopener noreferrer" title="Home">
                <img onClick={setMapHoverTitle} onKeyPress={null} src={SiteLogo} alt="Site Logo" />
              </a>
            </figure>
          </h1>
          <Headings className='ranking-table-heading' heading='Global Consumer Protection and Empowerment Index' />
        </div>
        <div className="hamburger" onClick={toggleNavigation} onKeyPress={null}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
        <div className="nav-area">
          <Headings className='heading' heading='Analyser' />
          <nav>
            <ul>{renderLinks}</ul>
          </nav>
        </div>
      </Wrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
