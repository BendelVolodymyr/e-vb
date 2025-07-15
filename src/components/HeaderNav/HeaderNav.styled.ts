import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.header`
  position: relative;
`;

export const HeaderBot = styled.div``;

export const HeaderTop = styled.div`
  width: 100%;
  height: 24px;
  padding: 4px 16px 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_head};
`;

export const WrapperHelper = styled.div``;

export const WrapperLanguage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  color: ${({ theme }) => theme.colors.background};
  font-size: 10px;
  background: no-repeat;
  border: none;

  opacity: 0.6;

  option {
    color: ${({ theme }) => theme.colors.background};
    font-size: 10px;
    background-color: ${({ theme }) => theme.colors.background_head};
    border: none;
  }
`;

export const WrapperLogin = styled.div``;

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 4px 16px 4px 16px;

  @media screen and (min-width: 428px) {
    gap: 30px;
  }
`;

export const ButtonBurger = styled.button<{ $isOpen: boolean }>`
  position: relative;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;

  span,
  span::before,
  span::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s ease-in-out;
    left: 0;
  }

  span::before {
    top: ${({ $isOpen }) => ($isOpen ? '0' : '-8px')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  span::after {
    top: ${({ $isOpen }) => ($isOpen ? '0' : '8px')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  span {
    background-color: ${({ $isOpen }) => ($isOpen ? 'transparent' : '#000')};
  }

  @media (max-width: 61.99875em) and (min-width: 48em) {
    display: block;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const NavMenu = styled.nav<{ $isOpen: boolean }>`
  /* display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')}; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff; ///отім через пропс
  z-index: 9;

  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  @supports (height: 100dvh) {
    height: 100dvh;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const ListMenu = styled.ul``;
