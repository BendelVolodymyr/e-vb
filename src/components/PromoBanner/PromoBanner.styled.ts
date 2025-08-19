import styled from 'styled-components';

export const BannerFirsWrapper = styled.section`
  padding: 4px 16px;
`;

export const BannerWrapper = styled.div`
  background-color: #fff3cd;
  border-left: 6px solid #ffc107;
  color: #856404;
  padding: 1.2rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Emoji = styled.span`
  font-size: 1.5rem;
`;

export const ProductWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;

  background-color: #fff3cd;
  border-left: 6px solid #ffc107;

  & > div {
    flex: 1 1 calc(50% - 16px); /* мобільна (2 в ряд) */
  }

  @media (min-width: 768px) {
    & > div {
      flex: 1 1 calc(33.333% - 16px); /* планшет (3 в ряд) */
    }
  }

  @media (min-width: 1024px) {
    & > div {
      flex: 1 1 calc(25% - 16px); /* ПК (4 в ряд) */
    }
  }
`;
