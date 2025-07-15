import React from 'react';
import { BannerWrapper, Emoji } from './PromoBanner.styled';

export const PromoBanner: React.FC = () => {
  return (
    <BannerWrapper>
      <Emoji>🔥</Emoji>
      <div>
        <strong>Акція:</strong> Знижки до 50% на обрані товари лише до кінця
        тижня!
      </div>
    </BannerWrapper>
  );
};
