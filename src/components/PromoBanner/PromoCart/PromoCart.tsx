import React, { useEffect, useState } from 'react';
import {
  Card,
  ImageWrapper,
  DiscountBadge,
  Favorite,
  Title,
  PriceWrapper,
  OldPrice,
  FinalPrice,
  Rating,
  Timer,
} from './PromoCart.styled';

interface PromoProductCardProps {
  name: string;
  finalPrice: number;
  oldPrice: number | null;
  discount: number;
  image: string;
  saleEnd: string; // ISO string з бекенду
}

export const PromoCard: React.FC<PromoProductCardProps> = ({
  name,
  finalPrice,
  oldPrice,
  discount,
  image,
  saleEnd,
}) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(saleEnd).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft('⏳ Акцію завершено');
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        if (days > 0) {
          setTimeLeft(`${days}д ${hours}год ${minutes}хв ${seconds}с`);
        } else {
          setTimeLeft(`${hours}год ${minutes}хв ${seconds}с`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [saleEnd]);

  return (
    <Card>
      {discount > 0 && <DiscountBadge>-{discount}%</DiscountBadge>}
      <Favorite>❤️</Favorite>
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <Title>{name}</Title>
      <PriceWrapper>
        {oldPrice && <OldPrice>{oldPrice} грн</OldPrice>}
        <FinalPrice>{finalPrice} грн</FinalPrice>
      </PriceWrapper>
      <Rating>⭐️⭐️⭐️⭐️☆</Rating>
      <Timer>⏳ {timeLeft}</Timer>
    </Card>
  );
};
