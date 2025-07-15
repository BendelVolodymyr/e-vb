import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonBurger,
  Header,
  HeaderBot,
  HeaderTop,
  NavMenu,
  Select,
  WrapperHelper,
  WrapperLanguage,
  WrapperLogin,
  WrapperMenu,
} from './HeaderNav.styled';

const HeaderNav = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Header>
      <HeaderTop>
        <WrapperHelper></WrapperHelper>
        <WrapperLanguage>
          <Select
            id="language-select"
            name="language"
            value={i18n.language}
            onChange={handleChange}
          >
            <option value="cs">🇨🇿</option>
            <option value="uk">🇺🇦</option>
            <option value="en">eng</option>
          </Select>
        </WrapperLanguage>
        <WrapperLogin></WrapperLogin>
      </HeaderTop>
      <HeaderBot>
        <WrapperMenu>
          <ButtonBurger
            onClick={() => setBurgerMenu(!burgerMenu)}
            $isOpen={burgerMenu}
          >
            <span></span>
          </ButtonBurger>
          <NavMenu $isOpen={burgerMenu}>
            <ul>
              <li>
                <a href="about.html">Про нас</a>
              </li>
              <li>
                <a href="payment.html">Оплата</a>
              </li>
              <li>
                <a href="delivery.html">Доставка та збірка</a>
              </li>
              <li>
                <a href="reviews.html">Відгуки</a>
              </li>
              <li>
                <a href="blog.html">Блог</a>
              </li>
              <li>
                <a href="contacts.html">Контакти</a>
              </li>
            </ul>
          </NavMenu>
        </WrapperMenu>
      </HeaderBot>
    </Header>
  );
};

export default HeaderNav;
