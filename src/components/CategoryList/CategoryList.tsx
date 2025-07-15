import React from 'react';
import { Wrapper, Category } from './CategoryList.styled';

const categories = ['Одяг', 'Техніка', 'Іграшки', 'Косметика', 'Книги'];

export const CategoryList: React.FC = () => {
  return (
    <Wrapper>
      {categories.map(cat => (
        <Category key={cat}>{cat}</Category>
      ))}
    </Wrapper>
  );
};
