import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BannerWrapperProps } from '../../types/heroBanner';

export const BannerFirsWrapper = styled.section`
  padding: 4px 16px;
`;

export const BannerWrapper = styled(motion.div)<BannerWrapperProps>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: px;
  height: 400px;
  margin-bottom: 2rem;

  background-image: url(${props => props.$bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 12px;
  overflow: hidden;

  transition: background-image 1s ease-in-out;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 2rem;
  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: #ddd;
  }
`;

export const Arrows = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    font-size: 1.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: white;
    }
  }
`;

export const ProgressWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const ProgressBox = styled.div<{
  $active?: boolean;
}>`
  max-width: 100px;
  flex: 1;
  background-color: #eeeeee27;
  position: relative;
  overflow: hidden;
  height: 6px;

  border-radius: 5px;
  z-index: 4;
  cursor: ${props => (props.$active ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: 2px solid #4caf50;
  }
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  width: ${props => props.$progress}%;
  height: 100%;
  height: 100%;
  background-color: #cff3d0ff;
  transition: width 0.08s linear;

  border-radius: 5px;
`;
