import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: relative;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
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
  bottom: 20px;
  right: 20px;
  z-index: 3;
  display: flex;
  gap: 10px;

  button {
    background: rgba(255, 255, 255, 0.7);
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
