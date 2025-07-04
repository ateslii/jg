import { useState, useEffect } from 'react';
import {
  Header,
  Link,
  List,
  Nav,
  LogoLink,
  Logo,
  Item,
  MobileBtn,
  BurgerIcon,
  CrossIcon,
  MobileContainer,
} from './Navigation.styled';
import { useMedia, useWindowSize } from 'react-use';

import logo from '../../images/logo-circle.svg';

const Navigation = () => {
  const isMobile = useMedia('(max-width: 1024px)');
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useWindowSize();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Header mobile={isMobile ? 'mobile' : ''}>
      <Nav>
        <LogoLink to="/" onClick={isMobile ? onClose : null}>
          {/*<Logo src={logo} alt="logo" />*/}
          <div style={{ backgroundColor: '#000', borderRadius: '50%', display: 'grid', palceItems: 'center', padding: '15px', color: 'white' }}>J G</div>
        </LogoLink>

        {isMobile ? (
          <MobileBtn onClick={toggleMenu} aria-label="mobile-menu-toggle">
            {isOpen ? <CrossIcon /> : <BurgerIcon />}
          </MobileBtn>
        ) : (
          <List>
            <Item>
              <Link to="/portfolio">Портфолио</Link>
            </Item>
            <Item>
              <Link to="/services">Услуги и цены</Link>
            </Item>
            <Item>
              <Link to="/aftercare">Последующий уход</Link>
            </Item>
            {/*<Item>*/}
            {/*  <Link to="/waiverform">Waiver</Link>*/}
            {/*</Item>*/}
            <Item>
              <Link to="/booking/service">Бронирование</Link>
            </Item>
            <Item>
              <Link to="/faq">Вопросы и ответы</Link>
            </Item>
            <Item>
              <Link to="/contact">Контакты</Link>
            </Item>
            {/*<Item>*/}
            {/*  <Link to="/payment/client-info">Payment</Link>*/}
            {/*</Item>*/}
          </List>
        )}
      </Nav>

      <MobileContainer open={isOpen} height={height}>
        <List>
          <Item>
            <Link onClick={toggleMenu} to="/portfolio">
              Портфолио
            </Link>
          </Item>
          <Item>
            <Link onClick={toggleMenu} to="/services">
              Услуги и цены
            </Link>
          </Item>
          <Item>
            <Link onClick={toggleMenu} to="/aftercare">
              Последующий уход
            </Link>
          </Item>
          {/*<Item>*/}
          {/*  <Link onClick={toggleMenu} to="/waiverform">*/}
          {/*    Waiver*/}
          {/*  </Link>*/}
          {/*</Item>*/}
          <Item>
            <Link onClick={toggleMenu} to="/booking/service">
              Бронирование
            </Link>
          </Item>
          <Item>
            <Link onClick={toggleMenu} to="/faq">
              Вопросы и ответы
            </Link>
          </Item>
          <Item>
            <Link onClick={toggleMenu} to="/contact">
              Контакты
            </Link>
          </Item>
          {/*<Item>*/}
          {/*  <Link onClick={toggleMenu} to="/payment/client-info">*/}
          {/*    Payment*/}
          {/*  </Link>*/}
          {/*</Item>*/}
        </List>
      </MobileContainer>
    </Header>
  );
};

export default Navigation;
