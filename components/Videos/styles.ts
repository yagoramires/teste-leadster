'use client';
import styled, { keyframes } from 'styled-components';

export const StyledVideosSection = styled.section`
  padding: 1.5rem 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

// export const StyledCardList = styled.ul`
//   padding: 2rem;
//   margin: 0 auto;
//   max-width: 1200px;
//   display: grid;
//   grid-template-columns: 1fr;
//   justify-items: center;
//   gap: 2.2rem;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     column-gap: 2.2rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 3rem 0;
//     grid-template-columns: repeat(3, 1fr);
//     column-gap: 0;
//   }
// `;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledCardList = styled.ul`
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 2.2rem;
  animation: ${fadeInAnimation} 2s ease-in-out;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 0;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0;
  }
`;
