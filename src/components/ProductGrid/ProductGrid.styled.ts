import styled from 'styled-components';

export const GridWrapper = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const ProductImage = styled.img`
  border-radius: 8px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #1f2937;
`;
