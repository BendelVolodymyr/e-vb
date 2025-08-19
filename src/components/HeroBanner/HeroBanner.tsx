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
  BannerFirsWrapper,
  ProgressFill,
  ProgressWrapper,
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

  const [index, setIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0); // від 0 до 100

  const intervalTime = 5000; // 5 секунд

  useEffect(() => {
    dispatch(fetchBanners());
  }, []);

  useEffect(() => {
    if (!banners.length) return;

    setProgress(0);
    const stepTime = 50; // кожні 50 мс оновлювати
    const step = (stepTime / intervalTime) * 100; // скільки % за 50мс

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + step;
        if (nextProgress >= 100) {
          if (index + 1 >= banners.length) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
          return 0;
        }
        return nextProgress;
      });
    }, stepTime);

    return () => clearInterval(progressTimer);
  }, [banners.length, index]);

  const lang = useCurrentLanguage();

  if (loading || !banners.length) return null;

  const current = banners[index];

  return (
    <BannerFirsWrapper>
      <BannerWrapper $bgUrl={current.urlImg}>
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
        <ProgressWrapper>
          {!loading &&
            banners.length > 0 &&
            banners.map((banner, i) => (
              <ProgressBox
                key={banner._id}
                tabIndex={0}
                $active={i === index}
                onClick={() => setIndex(i)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIndex(i);
                  }
                }}
              >
                <ProgressFill $progress={i === index ? progress : 0} />
              </ProgressBox>
            ))}
        </ProgressWrapper>
      </BannerWrapper>
    </BannerFirsWrapper>
  );
};
