import React, { useEffect } from 'react';
import {
  BannerFirsWrapper,
  BannerWrapper,
  Emoji,
  ProductWrapper,
} from './PromoBanner.styled';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectProduct } from '../../redux/product/selectors';
import { fetchProduct } from '../../redux/product/operations';
import { PromoCard } from './PromoCart/PromoCart';

export const PromoBanner: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProduct);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProduct({ page: 1, limit: 4 }));
    }
  }, [dispatch, products.length]);

  const { t } = useTranslation();
  console.log(products);

  return (
    <BannerFirsWrapper>
      <BannerWrapper>
        <Emoji>🔥</Emoji>
        <div>
          <strong>{t('promoBanner.title')}</strong>
        </div>
      </BannerWrapper>
      <ProductWrapper>
        {products
          .filter(prod => prod.weeklySale)
          .map(prod => (
            <PromoCard
              key={prod._id}
              name={prod.name}
              finalPrice={prod.finalPrice}
              oldPrice={prod.oldPrice}
              discount={prod.discount}
              image={prod.images[0]}
              saleEnd={prod.saleEnd}
            />
          ))}
      </ProductWrapper>
    </BannerFirsWrapper>
  );
};
