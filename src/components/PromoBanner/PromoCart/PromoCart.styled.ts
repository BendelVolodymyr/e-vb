import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ff4d4f;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
`;

export const Favorite = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  font-size: 14px;
`;

export const FinalPrice = styled.span`
  color: #28a745;
  font-weight: bold;
  font-size: 18px;
`;

export const Rating = styled.div`
  font-size: 16px;
  color: gold;
`;

export const Timer = styled.div`
  font-size: 14px;
  color: #d9534f;
  font-weight: bold;
  margin-top: auto;
`;
