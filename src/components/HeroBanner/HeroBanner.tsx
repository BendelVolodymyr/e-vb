import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import {
  BannerWrapper,
  Overlay,
  Content,
  Title,
  Subtitle,
  Button,
  Arrows,
  ProgressBox,
} from './HeroBanner.styled';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useCurrentLanguage } from '../../hooks/useCurrentLanguage';
import { fetchBanners } from '../../redux/banner/operations';
import { selectBanners, selectIsLoading } from '../../redux/banner/selectors';
import { useTranslation } from 'react-i18next';

export const HeroBanner = () => {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(selectBanners);
  const loading = useAppSelector(selectIsLoading);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0); // від 0 до 100
  const intervalTime = 5000; // 5 секунд

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  useEffect(() => {
    if (!banners.length) return;

    setProgress(0);
    const stepTime = 50; // кожні 50 мс оновлювати
    const step = (stepTime / intervalTime) * 100; // скільки % за 50мс

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + step;
        if (nextProgress >= 100) {
          setIndex(prevIndex => {
            if (prevIndex + 1 >= banners.length) {
              return 0;
            }
            return prevIndex + 1;
          });

          return 0; // обнулити і почати новий цикл
        }
        return nextProgress;
      });
    }, stepTime);

    return () => clearInterval(progressTimer);
  }, [banners.length, index]); // коли змінюється слайд або кількість слайдів

  const lang = useCurrentLanguage();

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
      <ProgressBox style={{ width: `${progress}%` }} />
    </BannerWrapper>
  );
};
