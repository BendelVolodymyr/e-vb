import React from 'react';
import { Link } from 'react-router-dom';
import { List, StyledRightIcon } from './ListMenu.styled';
import { useTranslation } from 'react-i18next';

type ListMenuProps = {
  toKey: string;
  tKey: string;
};

const ListMenu: React.FC<ListMenuProps> = ({ toKey, tKey }) => {
  const { t } = useTranslation();

  return (
    <List>
      <Link to={toKey}>`${t(tKey)}`</Link>
      <StyledRightIcon />
    </List>
  );
};

export default ListMenu;
