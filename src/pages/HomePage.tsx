import React from 'react';
import { HeroBanner } from '../components/HeroBanner/HeroBanner';
import { PromoBanner } from '../components/PromoBanner/PromoBanner';
import { CategoryList } from '../components/CategoryList/CategoryList';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <PromoBanner />
      <CategoryList />
      <ProductGrid type="popular" title="Популярні товари" />
      <ProductGrid type="promo" title="Акційні товари" />
    </>
  );
};

export default HomePage;
