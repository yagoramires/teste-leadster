'use client';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.light};

  @media (min-width: 1024px) {
    padding: 10rem 0;
  }
`;

export const StyledLabel = styled.p`
  padding: 6px 8px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  border-bottom-left-radius: 4px;

  @media (min-width: 1024px) {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 800;
  }
`;
export const StyledTitleMid = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;

  @media (min-width: 800px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
export const StyledTitleHigh = styled.h2`
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  font-size: 2.2rem;
  position: relative;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;
export const StyledText = styled.p`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  margin: 0.8rem 0.8rem 0;
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 0.8rem 0;
    padding: 1.2rem;
    font-size: 1rem;
  }
`;

export const StyledBold = styled.b`
  font-weight: 800;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  right: -0.5rem;
  top: 0.4rem;
  width: 20px;
  height: auto;

  @media (min-width: 800px) {
    width: 30px;
    right: -0.8rem;
    top: 0.5rem;
  }

  @media (min-width: 1024px) {
    width: 49px;
    right: -1.2rem;
    top: 0.7rem;
  }
`;
