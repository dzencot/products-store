import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { selectCart, selectCartProductsCount } from '../../store/selectors';
import Container from './Container';
import Dropdown from '../Dropdown/Dropdown';

const links = [
  {
    text: 'store',
    path: '/',
    reloadDocument: true,
  },
  {
    text: 'cart',
    path: '/cart',
    withCounter: true,
  },
];

const languages = [
  {
    text: 'English',
    lang: 'en',
  },
  {
    text: 'Russian',
    lang: 'ru',
  },
];

const cartLengthStyle = { height: '20px', width: '20px', fontSize: '12px' };

const Header = () => {
  const { t, i18n } = useTranslation();

  const cart = useSelector(selectCart);
  const productsInCartCount = useSelector(selectCartProductsCount);

  const handleClick = (lang: string) => i18n.changeLanguage(lang);

  return (
        <header className='navbar navbar-expand-lg navbar-light bg-light shadow'>
            <Container styles='px-4 px-lg-5'>
                <h1 className='navbar-brand'>
                  <Link to='/' className='nav-link'>Hexlet Store</Link>
                </h1>
                <nav>
                    <ul className='navbar navbar-nav'>
                        {
                          links.map((link) => (
                            <li className='nav-item d-flex' key={link.text}>
                              <Link reloadDocument={link.reloadDocument} to={link.path} className='nav-link'>{t(link.text)}</Link>
                              {
                                link.withCounter && Object.keys(cart).length
                                  ? <span
                                      className='bg-info rounded-circle d-flex align-items-center justify-content-center'
                                      style={cartLengthStyle}
                                    >
                                      {productsInCartCount}
                                    </span>
                                  : <></>
                              }
                            </li>
                          ))
                        }
                        <Dropdown title={t('lang')}>
                          {
                            languages.map((lang) => (
                              <li className='dropdown-item' onClick={() => handleClick(lang.lang)} key={lang.lang}>
                                {lang.text}
                              </li>
                            ))
                          }
                        </Dropdown>
                    </ul>
                </nav>
            </Container>
        </header>
  );
};

export default Header;
