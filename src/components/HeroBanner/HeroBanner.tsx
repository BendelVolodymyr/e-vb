import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import {
  BannerWrapper,
  Overlay,
  Content,
  Title,
  Subtitle,
  Button,
  Arrows,
} from './HeroBanner.styled';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchBanners } from '../../redux/banner/operations';
import { selectBanners, selectIsLoading } from '../../redux/banner/selectors';

export const HeroBanner = () => {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(selectBanners);
  const loading = useAppSelector(selectIsLoading);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const lang = i18n.language as 'ua' | 'en' | 'cz';

  const next = () => setIndex(prev => (prev + 1) % banners.length);
  const prev = () =>
    setIndex(prev => (prev - 1 + banners.length) % banners.length);

  if (loading || !banners.length) return null;

  const current = banners[index];

  return (
    <BannerWrapper style={{ backgroundImage: `url(${current.urlImg})` }}>
      <Overlay />
      <AnimatePresence mode="wait">
        <Content
          key={current._id}
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.85, 0.008, 0.094, 0.988] }}
        >
          <Title>{current.title[lang]}</Title>
          <Subtitle>{current.description[lang]}</Subtitle>
          <Button onClick={() => navigate(current.link)}>
            {t('viewProduct')}
          </Button>
        </Content>
      </AnimatePresence>
      <Arrows>
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </Arrows>
    </BannerWrapper>
  );
};
