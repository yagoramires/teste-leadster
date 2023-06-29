'use client';
import styled from 'styled-components';

export const StyledVideosSection = styled.section`
  padding: 5rem 2rem;
`;

export const StyledCardList = styled.ul`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 2.2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0;
  }
`;
