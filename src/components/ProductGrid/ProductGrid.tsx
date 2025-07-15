import React from 'react';
import {
  GridWrapper,
  SectionTitle,
  Grid,
  Card,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './ProductGrid.styled';

type ProductGridProps = {
  title: string;
  type: 'popular' | 'promo';
};

export const ProductGrid: React.FC<ProductGridProps> = ({ title, type }) => {
  // Заглушка: можеш замінити на API запит
  const products = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `${type === 'promo' ? 'Знижка' : 'Товар'} №${i + 1}`,
    price: 199 + i * 100,
    image: 'https://via.placeholder.com/300x200',
  }));

  return (
    <GridWrapper>
      <SectionTitle>{title}</SectionTitle>
      <Grid>
        {products.map(prod => (
          <Card key={prod.id}>
            <ProductImage src={prod.image} alt={prod.name} />
            <ProductTitle>{prod.name}</ProductTitle>
            <ProductPrice>{prod.price} грн</ProductPrice>
          </Card>
        ))}
      </Grid>
    </GridWrapper>
  );
};
