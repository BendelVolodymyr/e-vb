import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as RightIcon } from '../../assets/svg/Right.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import { ReactComponent as LogoIcon } from '../../assets/svg/genetic-data-svgrepo-com.svg';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderBot = styled.div`
  position: relative;
`;

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Flag = styled.span`
  align-items: end;
`;

export const Select = styled.select`
  height: 30px;
  font-size: 20px;

  color: ${({ theme }) => theme.colors.background};

  background: no-repeat;
  opacity: 0.6;
  border: none;
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
  z-index: 0;
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

export const LogoBox = styled.div`
  position: absolute;
  left: 47%;
`;

export const LogoLink = styled(Link)``;

export const LogoSvg = styled(LogoIcon)`
  width: 25px;
  height: 25px;
`;

export const SearchCartBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchInput = styled.input<{ $visible: boolean }>`
  width: ${({ $visible }) => ($visible ? '100px' : '0')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  padding: ${({ $visible }) => ($visible ? '6px 12px 6px 12px' : '6px 0')};
  transition: all 0.3s ease;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  right: 28px;
  background-color: #fff;
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  z-index: 1;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  color: #555;
  position: relative;
  z-index: 2;
`;

export const CartLink = styled(Link)``;

export const CartInfo = styled.div`
  position: absolute;
  bottom: -2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: small;
  width: 20px;
  height: 20px;

  background-color: #ff7f7f;
  border-radius: 50%;
  z-index: 99999;
`;

export const StyledCartIcon = styled(CartIcon)``;

// export const NavMenu = styled.nav<{ $isOpen: boolean }>`
//   position: absolute;
//   top: 30px;
//   left: 0;
//   width: 100%;
//   max-height: 100dvh;
//   padding: 4px 16px;

//   background-color: ${({ theme }) => theme.colors.background};
//   z-index: 9;

//   transform: ${({ $isOpen }) =>
//     $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
//   transition: transform 0.3s ease-in-out;

//   overflow-y: auto;

//   @supports (height: 100dvh) {
//     height: 100dvh;
//   }

//   @media screen and (min-width: 992px) {
//     display: none;
//   }
// `;

export const NavMenu = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 58px;
  left: 0;
  width: 100%;
  max-height: calc(100dvh - 54px);
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 999;
  padding: 16px;

  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  overflow-y: auto;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const WrapperListMenu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListMenu = styled.li`
  padding: 30px 10px 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 13px;
  border: 1px solid #d6d6d6;

  background: linear-gradient(88deg, #fff 1.69%, #d6d6d6 100%);
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRightIcon = styled(RightIcon)``;
